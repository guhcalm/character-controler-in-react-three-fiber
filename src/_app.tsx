import { Canvas, useThree } from "@react-three/fiber"
import {
  ACESFilmicToneMapping,
  AnimationAction,
  AnimationMixer,
  Color,
  EquirectangularReflectionMapping,
  Fog,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneBufferGeometry,
  sRGBEncoding,
  Vector3
} from "three"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { Suspense, useEffect, useState } from "react"
import { useEntityBehaviors, useFiniteStateMachine } from "./hooks"
import { Layout } from "./components"

const hdri = new RGBELoader().load(
  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/empty_warehouse_01_1k.hdr",
  texture => (texture.mapping = EquirectangularReflectionMapping)
)

const CeramicMaterial = new MeshStandardMaterial({
  color: "white",
  roughness: 0,
  metalness: 0
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
              if (obj.name === "Beta_Joints") {
                obj.visible = false
                obj.geometry.dispose()
                obj.material.dispose()
              }
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
  useEntityBehaviors("player", 0.2, new Vector3(0, 0.75, 0), setEntityState)
  return (
    <group ref={setEntityState}>
      <Model />
      <pointLight position={[0, 0.75, 0]} args={["red", 13, 2]} castShadow />
    </group>
  )
}

const EnvironmentStyles = {
  geometry: new PlaneBufferGeometry(300, 300, 50, 50),
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
    gl.physicallyCorrectLights = true
    gl.setPixelRatio(Math.min(devicePixelRatio, 2) * 0.9)
    scene.background = new Color("rgb(240,195,185)")
    scene.environment = hdri
    scene.fog = new Fog("rgb(240,195,185)", 0, 50)
    camera.position.set(0, 2, 3)
    camera.lookAt(0, 0, 0)
    camera.near = 1.5
    camera.far = 50
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
      <Canvas gl={{ antialias: true, powerPreference: "high-performance" }}>
        <Scene />
      </Canvas>
    </Suspense>
  </Layout>
)
