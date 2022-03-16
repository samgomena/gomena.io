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
    hasMounted && (
      <Canvas camera={cameraSettings} dpr={window.devicePixelRatio}>
        <BackgroundScene />
      </Canvas>
    )
  );
}
