import { useFrame } from "@react-three/fiber"
import { Group, Intersection, Mesh, Object3D, Quaternion, Vector3 } from "three"
import { Dispatch, SetStateAction, useState } from "react"

const inputs = {
  KeyW: false,
  KeyS: false,
  KeyA: false,
  KeyD: false
}
addEventListener("keydown", ({ code }) => (inputs[code] = true))
addEventListener("keyup", ({ code }) => (inputs[code] = false))

const rotationOnVertical = (angle: number, vertical: Quaternion) =>
  new Quaternion().copy(vertical).setFromAxisAngle(new Vector3(0, 1, 0), angle)

const useSetupVerticalRotation = (
  setQuaternion: Dispatch<SetStateAction<Quaternion>>
) => {
  useFrame(() => {
    if (inputs.KeyA)
      setQuaternion(current =>
        current.multiply(rotationOnVertical(0.05, current))
      )
    if (inputs.KeyD)
      setQuaternion(current =>
        current.multiply(rotationOnVertical(-0.05, current))
      )
  })
}

const getInteresection = (
  name: string,
  list: Intersection<Object3D<Event>>[]
) =>
  list.filter(
    ({ object }) => object instanceof Mesh && object.name !== name
  )[0] as Intersection<Object3D<Event>>

interface NextPositionInterface {
  towards: Vector3
  backwards: Vector3
}

const usePossibleMoves = (
  name: string,
  velocity: number,
  eyesPosition: Vector3,
  position: Vector3,
  setPosition: Dispatch<SetStateAction<Vector3>>,
  quaternion: Quaternion
) => {
  const [nextMoviment, setNextMoviment] = useState<NextPositionInterface>({
    towards: new Vector3(),
    backwards: new Vector3()
  })
  const [allowedMoves, setAllowedMoves] = useState<{
    towards: boolean
    backwards: boolean
  }>({ towards: false, backwards: false })
  useFrame(({ raycaster, scene }) => {
    if (inputs.KeyW) setPosition(position.add(nextMoviment.towards))
    if (inputs.KeyS) setPosition(position.add(nextMoviment.backwards))
    const rayOrigin = new Vector3()
      .copy(eyesPosition)
      .applyQuaternion(quaternion)
      .add(position)
    // check permission
    ;[
      { direction: "towards", target: new Vector3(0, 0, 1) },
      { direction: "backwards", target: new Vector3(0, 0, -1) }
    ].forEach(({ direction, target }) => {
      raycaster.far = 0.5
      raycaster.set(rayOrigin, target.applyQuaternion(quaternion))
      const wall = getInteresection(name, raycaster.intersectObject(scene))
      if (wall)
        return setAllowedMoves(current => ({ ...current, [direction]: false }))
      return setAllowedMoves(current => ({ ...current, [direction]: true }))
    })
    // seek next move
    ;[
      { direction: "towards", target: new Vector3(0, 0, 1) },
      { direction: "backwards", target: new Vector3(0, 0, -1) }
    ].forEach(({ direction, target }) => {
      const nextStep = new Vector3()
        .copy(position)
        .add(target.applyQuaternion(quaternion).multiplyScalar(velocity))
      const rayDirection = new Vector3()
        .copy(nextStep)
        .sub(rayOrigin)
        .normalize()
      raycaster.far = 10
      raycaster.set(rayOrigin, rayDirection)
      const ground = getInteresection(name, raycaster.intersectObject(scene))
      if (ground && allowedMoves[direction])
        return setNextMoviment(current => ({
          ...nextMoviment,
          [direction]: current[direction].copy(
            new Vector3()
              .copy(ground.point)
              .sub(position)
              .normalize()
              .multiplyScalar(velocity)
          )
        }))

      return setNextMoviment(current => ({
        ...nextMoviment,
        [direction]: current[direction].copy(new Vector3())
      }))
    })
  })
  return { nextMoviment }
}
const useThirdPersonCamera = (
  name: string,
  eyesPosition: Vector3,
  position: Vector3,
  quaternion: Quaternion
) => {
  const [cameraPosition, setCameraPosition] = useState<Vector3>(new Vector3())
  const [cameraTarget, setCameraTarget] = useState<Vector3>(new Vector3())
  useFrame(({ camera, raycaster, scene }) => {
    camera.position.copy(cameraPosition)
    camera.lookAt(cameraTarget)

    setCameraPosition(current =>
      current.lerp(
        new Vector3(0, 2, -2).applyQuaternion(quaternion).add(position),
        0.1
      )
    )
    setCameraTarget(current =>
      current.lerp(
        new Vector3(0, eyesPosition.y, 2)
          .applyQuaternion(quaternion)
          .add(position),
        0.5
      )
    )

    const directionVector = new Vector3().copy(camera.position).sub(position)
    const distanceToCamera = new Vector3().copy(directionVector).length()
    const origin = new Vector3().copy(eyesPosition).add(position)
    const direction = directionVector.normalize()
    raycaster.far = distanceToCamera
    raycaster.set(origin, direction)
    const wall = getInteresection(name, raycaster.intersectObject(scene))
    if (wall) setCameraPosition(current => current.lerp(wall.point, 1))
  })
}

export default (
  name: string,
  velocity: number,
  eyesPosition: Vector3,
  setEntityState: Dispatch<SetStateAction<Group>>
) => {
  const [position, setPosition] = useState<Vector3>(new Vector3())
  const [quaternion, setQuaternion] = useState<Quaternion>(new Quaternion())
  useSetupVerticalRotation(setQuaternion)
  const { nextMoviment } = usePossibleMoves(
    name,
    velocity,
    eyesPosition,
    position,
    setPosition,
    quaternion
  )
  useThirdPersonCamera(name, eyesPosition, position, quaternion)
  useFrame(() =>
    setEntityState(entity => {
      entity.position.copy(position)
      entity.quaternion.copy(quaternion)
      return entity
    })
  )
  return { position, quaternion, nextMoviment }
}

/* on main 
const worker = new Worker("worker.js")
worker.postMessage({
  some_data: "foo",
  some_more_data: "bar"
})

worker.onmessage = (e: {data: {some_data, some_more_data}}) => {}
*/

/* on worker
self.addEventListener("message", () => {
  self.postMessage({type: "results", data: {...}})
}) */
