import { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
// @ts-expect-error
import fs from "../assets/Sky.fs";
// @ts-expect-error
import vs from "../assets/Sky.vs";

const BackgroundMaterial = shaderMaterial(
  { time: 0, sat: 0, color: new THREE.Color() },
  vs,
  fs
);

extend({ BackgroundMaterial });

type BackgroundMaterial = {
  time: number;
  sat: number;
  color: THREE.Color;
} & JSX.IntrinsicElements["shaderMaterial"];

declare global {
  namespace JSX {
    interface IntrinsicElements {
      backgroundMaterial: BackgroundMaterial;
    }
  }
}

export default function BackgroundScene() {
  const ref = useRef(null);

  useFrame(
    () =>
      (ref.current.uniforms.time.value =
        (ref.current.uniforms.time.value + 0.001) % 360)
  );

  useFrame(() => {
    const color = ref.current.uniforms.color.value;
    const { h, s, l } = color.getHSL({
      h: 0,
      s: 0,
      l: 0,
    });
    color.setHSL(h + 0.00015, s, l);

    ref.current.uniforms.color.value = color;
  });

  return (
    <mesh>
      <icosahedronGeometry args={[100, 4]} />
      <backgroundMaterial
        ref={ref}
        attach="material"
        time={0}
        sat={0}
        // color={new THREE.Color(0x49beaa)}
        color="hotpink"
        side={THREE.BackSide}
      />
    </mesh>
  );
}
