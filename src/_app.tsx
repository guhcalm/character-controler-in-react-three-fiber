import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  ACESFilmicToneMapping,
  AnimationAction,
  AnimationMixer,
  Color,
  EquirectangularReflectionMapping,
  Fog,
  Group,
  Intersection,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  PlaneGeometry,
  Quaternion,
  sRGBEncoding,
  Vector3
} from "three"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react"
import { Layout } from "./components"

const hdri = new RGBELoader().load(
  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/empty_warehouse_01_1k.hdr",
  texture => (texture.mapping = EquirectangularReflectionMapping)
)

const inputs = {
  KeyW: false,
  KeyS: false,
  KeyA: false,
  KeyD: false
}
addEventListener("keydown", ({ code }) => (inputs[code] = true))
addEventListener("keyup", ({ code }) => (inputs[code] = false))

const useSetupVerticalRotation = (
  setQuaternion: Dispatch<SetStateAction<Quaternion>>
) => {
  const rotationOnVertical = (angle: number, vertical: Quaternion) =>
    new Quaternion()
      .copy(vertical)
      .setFromAxisAngle(new Vector3(0, 1, 0), angle)
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

const useSetupNormal = (
  name: string,
  position: Vector3,
  normal: Vector3,
  setNormal: Dispatch<SetStateAction<Vector3>>
) =>
  useFrame(({ raycaster, scene }) => {
    raycaster.far = 1
    raycaster.set(position, new Vector3(0, -1, 0))
    const target = getInteresection(name, raycaster.intersectObject(scene))
    if (target) return setNormal(normal.lerp(target?.face?.normal, 0.1))
    setNormal(current => current.lerp(new Vector3(0, 1, 0), 0.1))
  })

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
  quaternion: Quaternion,
  nextMoviment: NextPositionInterface,
  setNextMoviment: Dispatch<SetStateAction<NextPositionInterface>>
) => {
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

const useSetupEntityBehaviors = (
  name: string,
  velocity: number,
  eyesPosition: Vector3,
  setEntityState: Dispatch<SetStateAction<Group>>
) => {
  const [position, setPosition] = useState<Vector3>(new Vector3())
  const [normal, setNormal] = useState<Vector3>(new Vector3(0, 1, 0))
  const [quaternion, setQuaternion] = useState<Quaternion>(new Quaternion())
  const [nextMoviment, setNextMoviment] = useState<NextPositionInterface>({
    towards: new Vector3(),
    backwards: new Vector3()
  })
  useSetupNormal(name, position, normal, setNormal)
  useSetupVerticalRotation(setQuaternion)
  usePossibleMoves(
    name,
    velocity,
    eyesPosition,
    position,
    setPosition,
    quaternion,
    nextMoviment,
    setNextMoviment
  )
  useThirdPersonCamera(name, eyesPosition, position, quaternion)
  useFrame(() =>
    setEntityState(entity => {
      entity.position.copy(position)
      entity.quaternion.copy(quaternion)
      return entity
    })
  )
  return { position, normal, quaternion, nextMoviment }
}

const useFiniteStateMachine = (
  setAnimations: Dispatch<
    SetStateAction<{
      mixer: AnimationMixer
      actions: {
        idle: AnimationAction
        run: AnimationAction
      }
    }>
  >
) =>
  useFrame(({ clock }) =>
    setAnimations(current => {
      if (!current) return current
      current.mixer.update(clock.getDelta())
      const { idle, run } = current.actions
      if (inputs.KeyW || inputs.KeyS) {
        if (idle.weight > 0) idle.weight -= 0.1
        if (run.weight < 1) run.weight += 0.1
        return current
      }
      if (run.weight > 0) run.weight -= 0.1
      if (idle.weight < 1) idle.weight += 0.1
      return current
    })
  )

const CeramicMaterial = new MeshStandardMaterial({
  color: "white",
  roughness: 0,
  metalness: 0
})
const InvisibleMaterial = new MeshBasicMaterial({
  opacity: 0,
  transparent: true
})

const Model = () => {
  const [entityState, setEntityState] = useState<Group>(new Group())
  const [animations, setAnimations] = useState<{
    mixer: AnimationMixer
    actions: {
      idle: AnimationAction
      run: AnimationAction
    }
  }>(null!)
  useFiniteStateMachine(setAnimations)
  useEffect(
    () =>
      new GLTFLoader()
        .setDRACOLoader(
          new DRACOLoader()
            .setDecoderPath("/examples/js/libs/draco/")
            .setDecoderConfig({ type: "js" })
        )
        .load("./assets/model/model.glb", ({ scene, animations }) => {
          scene.traverse(obj => {
            if (obj instanceof Mesh) {
              if (obj.name === "Beta_Surface") obj.material = CeramicMaterial
              if (obj.name === "Beta_Joints") obj.material = InvisibleMaterial
            }
          })
          const mixer = new AnimationMixer(scene)
          const idle = mixer.clipAction(animations[0])
          idle.weight = 1
          idle.play()
          const run = mixer.clipAction(animations[3])
          run.weight = 0
          run.play()
          setAnimations({
            mixer,
            actions: { idle, run }
          })
          setEntityState(scene)
        }),
    []
  )
  return <primitive object={entityState} />
}

const Entity = () => {
  const [entityState, setEntityState] = useState<Group>(null!)
  useSetupEntityBehaviors(
    "player",
    0.2,
    new Vector3(0, 0.75, 0),
    setEntityState
  )
  return (
    <group ref={setEntityState}>
      <Model />
      <pointLight position={[0, 0.75, 0]} args={["red", 13, 2]} castShadow />
    </group>
  )
}

const EnvironmentStyles = {
  geometry: new PlaneGeometry(300, 300, 50, 50),
  material: new MeshBasicMaterial({
    color: "black",
    wireframe: true
  })
}
const { geometry } = EnvironmentStyles
geometry.rotateX(-Math.PI / 2)
const { position } = geometry.attributes
new Array(position.count).fill("").forEach((values, index) => {
  const x = position.getX(index)
  const z = position.getZ(index)
  const frequency = 10
  const amplitude = 3
  position.setY(
    index,
    amplitude * (Math.sin(x / frequency) + Math.sin(z / frequency))
  )
})
position.needsUpdate = true
geometry.computeVertexNormals()

const Environment = () => (
  <mesh {...EnvironmentStyles} receiveShadow castShadow />
)

const useSetupScene = () => {
  const { camera, scene, gl, raycaster } = useThree()
  useEffect(() => {
    raycaster.near = 0
    gl.outputEncoding = sRGBEncoding
    gl.toneMapping = ACESFilmicToneMapping
    gl.toneMappingExposure = 1
    gl.shadowMap.enabled = true
    gl.setPixelRatio(devicePixelRatio)
    scene.background = new Color("rgb(240,195,185)")
    scene.environment = hdri
    scene.fog = new Fog("rgb(240,195,185)", 0, 80)
    camera.position.set(0, 2, 3)
    camera.lookAt(0, 0, 0)
  })
}

const Scene = () => {
  useSetupScene()
  return (
    <>
      <Entity />
      <Environment />
    </>
  )
}

export const MyApp = () => (
  <Layout>
    <Suspense>
      <Canvas gl={{ antialias: true }}>
        <Scene />
      </Canvas>
    </Suspense>
  </Layout>
)
