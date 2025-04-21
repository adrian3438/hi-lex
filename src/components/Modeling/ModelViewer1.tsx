'use client';

import {Canvas, useThree} from '@react-three/fiber';
import { Html, OrbitControls, useGLTF } from '@react-three/drei';
import {FC, useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import gsap from "gsap";
// import Image from "next/image";

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

    return <primitive object={scene} scale={3} />;
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

export default function Modeling1({language}: Props) {
    const [buttonIndex, setButtonIndex] = useState<number>();
    const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 2]);
    const [cameraTarget, setCameraTarget] = useState<[number, number, number]>([0, 0, 0]);
    useEffect(() => {
        switch (buttonIndex) {
            case 0:
                setCameraPosition([0, 0, -1.5]);
                setCameraTarget([0, 0, 0]);
                break;
            case 1:
                setCameraPosition([-0.5, -1.5, -2]);
                setCameraTarget([0, 0, 0]);
                break;
            case 2:
                setCameraPosition([-1, 1, -1]);
                setCameraTarget([0, 0, 0]);
                break;
            case 3:
                setCameraPosition([0, 1.5, -1.5]);
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
                <Model url={`/modeling/e-latch.glb`} />
                <>
                    <Html position={[0.4, 0.4, -0.08]} distanceFactor={10}>
                        <div
                          className="model-detail-button"
                          style={{background: '#00E5FF', padding: '2.5px', borderRadius: '2.5px', pointerEvents: 'auto', cursor: 'pointer'}}
                          onClick={() => setButtonIndex(0)}
                        />
                    </Html>
                    {/* <Html position={[-0.15, -0.9, -0.11]} distanceFactor={10}>
                        <div
                          className="model-detail-button"
                          style={{background: '#00E5FF', padding: '2.5px', borderRadius: '2.5px', pointerEvents: 'auto', cursor: 'pointer',}}
                          onClick={() => setButtonIndex(1)}
                        />
                    </Html>
                    <Html position={[-0.72, 0.65, 0.07]} distanceFactor={10}>
                        <div
                          className="model-detail-button"
                          style={{background: '#00E5FF', padding: '2.5px', borderRadius: '2.5px', pointerEvents: 'auto', cursor: 'pointer',}}
                          onClick={() => setButtonIndex(2)}
                        />
                    </Html>
                    <Html position={[0.4, 0.9, -0.06]} distanceFactor={10}>
                        <div
                          className="model-detail-button"
                          style={{background: '#00E5FF', padding: '2.5px', borderRadius: '2.5px', pointerEvents: 'auto', cursor: 'pointer',}}
                          onClick={() => setButtonIndex(3)}
                        />
                    </Html> */}
                </>
            </Canvas>
            <div className="features col-md-5">
                {buttonIndex === 0 && (
                  <div className="features-01">
                    <div className="image-area">
                      <iframe
                        src="https://player.vimeo.com/video/1077167595?h=abcde12345&autoplay=1&loop=1&muted=1"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Vimeo Video"
                       ></iframe>
                      </div>
                      <div className="text-area">
                          <h2>{language?.e_latch_03}</h2>
                      </div>
                      <button className="detail-close" onClick={() => setButtonIndex(100)}/>
                  </div>
                )}
                {/* {buttonIndex === 1 && (
                  <div className="features-01">
                      <div className="image-area">
                      <iframe
                        src="https://player.vimeo.com/video/1077167595?h=abcde12345&autoplay=1&loop=1&muted=1"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Vimeo Video"
                       ></iframe>
                      </div>
                      <div className="text-area">
                          <h2>{language?.e_latch_04}</h2>
                      </div>
                      <button className="detail-close" onClick={() => setButtonIndex(100)}/>
                  </div>
                )}
                {buttonIndex === 2 && (
                  <div className="features-01">
                      <div className="image-area">
                          <Image src="/images/sub/company/greeting/ceo-greeting-flags.jpg" alt="extinguisher" width={441} height={268}/>
                      </div>
                      <div className="text-area">
                          <h2>{language?.e_latch_05}</h2>
                      </div>
                      <button className="detail-close" onClick={() => setButtonIndex(100)}/>
                  </div>
                )}
                {buttonIndex === 3 && (
                  <div className="features-01">
                      <div className="image-area">
                          <Image src="/images/sub/company/greeting/ceo-greeting-flags.jpg" alt="extinguisher" width={441} height={268}/>
                      </div>
                      <div className="text-area">
                          <h2>{language?.e_latch_06}</h2>
                      </div>
                      <button className="detail-close" onClick={() => setButtonIndex(100)}/>
                  </div>
                )} */}
            </div>
        </>
    );
};


