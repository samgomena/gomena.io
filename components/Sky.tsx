import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import BackgroundScene from "./BackgroundScene";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 10_000,
  position: [0, 0, 10],
};

let dpr: number = undefined;

export default function Sky() {
  // Set pixel ratio on hydartion
  useEffect(() => void (dpr = window.devicePixelRatio), []);

  return (
    <Canvas camera={cameraSettings} dpr={dpr}>
      <BackgroundScene />
    </Canvas>
  );
}
