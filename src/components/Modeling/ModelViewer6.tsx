'use client';

import {Canvas, useThree} from '@react-three/fiber';
import { Html, OrbitControls, useGLTF } from '@react-three/drei';
import {FC, useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import gsap from "gsap";

interface ModelProps {
    url: string;
}

const Model: FC<ModelProps> = ({ url }) => {
    const { scene } = useGLTF(url);

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const center = box.getCenter(new THREE.Vector3());
        scene.position.sub(center);
    }, [scene]);

    return <primitive object={scene} scale={6} />;
};

const CameraController: FC<{ newPosition: [number, number, number]; targetPosition: [number, number, number] }> = ({ newPosition, targetPosition }) => {
    const { camera } = useThree();
    const controlsRef = useRef<any>();

    useEffect(() => {
        gsap.to(camera.position, {
            x: newPosition[0],
            y: newPosition[1],
            z: newPosition[2],
            duration: 1,
            onUpdate: () => {
                if (controlsRef.current) {
                    controlsRef.current.target.set(...targetPosition);
                    controlsRef.current.update();
                }
            },
        });
    }, [newPosition, targetPosition, camera]);

    return <OrbitControls ref={controlsRef} enableZoom={true} />;
};

interface Props {
    language: any
}

export default function Modeling6({language}: Props) {
    const [buttonIndex, setButtonIndex] = useState<number>();
    const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0.9, 0, 0]);
    const [cameraTarget, setCameraTarget] = useState<[number, number, number]>([0, 0, 0]);
    useEffect(() => {
        switch (buttonIndex) {
            case 0:
                setCameraPosition([0.8, 0.1, 0]);
                setCameraTarget([0, 0, 0]);
                break;
        }
    }, [buttonIndex]);

    return (
      <>
          <Canvas className="model-canvas">
              <ambientLight intensity={1} />
              <directionalLight position={[10, 30, 20]} intensity={1} />
              <directionalLight position={[10, -180, -90]} intensity={1} />
              <directionalLight position={[-10, -30, 20]} intensity={1} />
              <directionalLight position={[0, 50, 50]} intensity={0.8} />
              <directionalLight position={[-30, 10, -40]} intensity={0.7} />
              <directionalLight position={[50, -50, 30]} intensity={0.6} />
              <directionalLight position={[-50, 50, -30]} intensity={0.6} />
              <OrbitControls enableZoom={true} />
              <CameraController newPosition={cameraPosition} targetPosition={cameraTarget}/>
              <Model url={`/modeling/phl.glb`} />
              <>
                  <Html position={[0.17, 0, 0]} distanceFactor={5}>
                      <div
                        className="model-detail-button"
                        style={{background: '#00E5FF', padding: '2.5px', borderRadius: '2.5px', pointerEvents: 'auto', cursor: 'pointer',}}
                        onClick={() => setButtonIndex(0)}
                      />
                  </Html>
              </>
          </Canvas>
          <div className="features col-md-5">
              {buttonIndex === 0 && (
                <div className="features-01">
                    <div className="video-area">
                        <video src="/video/power-cinching-latch/power-cinching-latch-01.mp4" autoPlay muted loop/>
                    </div>
                    <div className="text-area">
                        <h2>{language?.e_latch_07}</h2>
                    </div>
                    <button className="detail-close" onClick={() => setButtonIndex(100)}/>
                </div>
              )}
          </div>
      </>
    );
};

