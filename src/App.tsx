import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./config/styledConfig";
import type { DirectionalLight } from "three";
import { Layers } from "three";
import { MapControls } from "@react-three/drei";
import DefaultControls from "./components/DefaultControls";

const layers = new Layers();

function App() {
  const [light, setLight] = useState<DirectionalLight>();

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Canvas>
          {/*  打个光  */}
          {/* <ambientLight intensity={0.1} /> */}
          {/* 调个色 */}
          {/* <directionalLight
            position={[0, 50, 150]}
            intensity={1}
            shadow-bias={-0.001}
            shadow-mapSize={[4096, 4096]}
            shadow-camera-left={-150}
            shadow-camera-right={150}
            shadow-camera-top={150}
            shadow-camera-bottom={-150}
            castShadow
          /> */}
          <mesh position={[-1.2, 0, 0]}>
            {/* args: 宽度、长度和深度  */}
            {/* <circleGeometry args={[1, 22, 0, 1]} />
            <meshBasicMaterial color={"#fdb756"} /> */}

            <circleGeometry />
            <meshBasicMaterial color={"#fdb756"} />

            {/* 开启缩放或者旋转 */}
            {/* <MapControls
              screenSpacePanning={true}
              maxDistance={50}
              minDistance={10}
              // enableRotate={false}
            ></MapControls> */}
          </mesh>
          <mesh position={[1.2, -1, 0]}>
            <circleGeometry />
            <meshBasicMaterial color={"#fdb756"} />
          </mesh>

          <DefaultControls />
          {/* <MapControls
            maxDistance={5}
            minDistance={1}
            // enablePan={false}
            enableRotate={false}
            enableDamping={false}
            // enableZoom={false}
            maxPolarAngle={Math.PI / 2}
          /> */}
        </Canvas>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #000000;
`;
