'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';

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

    return <primitive object={scene} scale={20} />;
};

const Modeling2: FC = () => {
    const controlsRef = useRef<any>(null);

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.target.set(0, 0, 0); // 모델 중심을 바라보게 설정
            controlsRef.current.update();
        }
    }, []);

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
                <OrbitControls ref={controlsRef} enableZoom={true} />
                <Model url={`/modeling/pds.glb`} />
            </Canvas>
        </>
    );
};

export default Modeling2;
