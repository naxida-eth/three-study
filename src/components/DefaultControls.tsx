import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { MapControls } from "@react-three/drei";

const OneDirectionMapControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef<any>();

  // useFrame(() => {
  //   if (controlsRef.current) {
  //     const controls = controlsRef.current;
  //     const { x, y, z } = controls.target;
  //     const forwardVector = new Vector3();
  //     camera.getWorldDirection(forwardVector);
  //     const newTarget = new Vector3(
  //       x + forwardVector.x,
  //       y + forwardVector.y,
  //       z + forwardVector.z
  //     );
  //     controls.target = newTarget;
  //     controls.object.position.setZ(controls.object.position.z + forwardVector.z);
  //     controls.update();
  //   }
  // });

  return (
    <MapControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableRotate={false}
      enablePan={true}
      maxDistance={100}
      minDistance={0}
      screenSpacePanning={false}
      enableZoom={true}
    />
  );
};

export default OneDirectionMapControls;