import { Canvas } from "@react-three/fiber";

import BackgroundScene from "./BackgroundScene";
import useIsMounted from "../hooks/useIsMounted";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 10_000,
  position: [0, 0, 10],
};

export default function Sky() {
  const hasMounted = useIsMounted();

  return (
    // Ensure DOM is loaded before calculating dpr
    // This will throw an error in Brave because its fingerprinting prevention logic blocks WebGL context from loading. There is no known workaround ATM.
    // See: https://github.com/mrdoob/three.js/issues/16904#issuecomment-556386278
    hasMounted && (
      <Canvas camera={cameraSettings}>
        <BackgroundScene />
      </Canvas>
    )
  );
}
