'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { FC, useEffect } from 'react';
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

    return <primitive object={scene} scale={0.2} />;
};

const Modeling3: FC = () => {
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
                <Model url={`/modeling/plgs.glb`} />
            </Canvas>
        </>
    );
};

export default Modeling3;
