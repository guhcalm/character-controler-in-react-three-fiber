import { useFrame } from "@react-three/fiber"
import { AnimationAction, AnimationMixer, Vector3 } from "three"
import { Dispatch, SetStateAction } from "react"

const inputs = {
  KeyW: false,
  KeyS: false,
  KeyA: false,
  KeyD: false
}
addEventListener("keydown", ({ code }) => (inputs[code] = true))
addEventListener("keyup", ({ code }) => (inputs[code] = false))

export default (
  setAnimations: Dispatch<
    SetStateAction<{
      mixer: AnimationMixer
      actions: {
        idle: AnimationAction
        run: AnimationAction
      }
    }>
  >,
  target: Vector3 | null
) =>
  useFrame(({ clock }) =>
    setAnimations(hid => {
      if (!hid) return hid
      hid.mixer.update(clock.getDelta())
      const { idle, run } = hid.actions
      if (inputs.KeyW || inputs.KeyS || target) {
        if (idle.weight > 0) idle.weight -= 0.1
        if (run.weight < 1) run.weight += 0.1
        return hid
      }
      if (run.weight > 0) run.weight -= 0.1
      if (idle.weight < 1) idle.weight += 0.1
      return hid
    })
  )
