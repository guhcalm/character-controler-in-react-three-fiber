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
interface AllowedMovementInterface {
  towards: boolean
  backwards: boolean
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
  const [allowedMoves, setAllowedMoves] = useState<AllowedMovementInterface>({
    towards: false,
    backwards: false
  })
  useFrame(({ raycaster, scene }) => {
    if (inputs.KeyW) setPosition(current => current.add(nextMoviment.towards))
    if (inputs.KeyS) setPosition(current => current.add(nextMoviment.backwards))
    const rayOrigin = new Vector3().copy(eyesPosition).add(position)
    ;[
      { direction: "towards", target: new Vector3(0, 0, 1) },
      { direction: "backwards", target: new Vector3(0, 0, -1) }
    ].forEach(({ direction, target }) => {
      target.applyQuaternion(quaternion)
      raycaster.far = 0.5
      raycaster.set(rayOrigin, target)
      const wall = getInteresection(name, raycaster.intersectObject(scene))
      if (wall)
        setAllowedMoves(current => ({
          ...current,
          [direction]: false
        }))
      else setAllowedMoves(current => ({ ...current, [direction]: true }))
      raycaster.far = 10
      raycaster.set(
        rayOrigin,
        new Vector3()
          .copy(new Vector3().copy(position).add(target))
          .sub(rayOrigin)
          .normalize()
      )
      const ground = getInteresection(name, raycaster.intersectObject(scene))
      if (ground && allowedMoves[direction])
        setNextMoviment(current => ({
          ...nextMoviment,
          [direction]: current[direction].copy(
            new Vector3()
              .copy(ground.point)
              .sub(position)
              .normalize()
              .multiplyScalar(velocity)
          )
        }))
      else
        setNextMoviment(current => ({
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
        new Vector3()
          .copy(eyesPosition)
          .add(new Vector3(0, 0, 2))
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
