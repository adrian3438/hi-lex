'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { FC } from 'react';
import * as THREE from 'three';

interface ModelProps {
    url: string;
    floorName?: string;
}

const Model: FC<ModelProps> = ({ url }) => {
    const { scene, animations } = useGLTF(url);

    scene.position.set(0, -0.1, 0);


    /* S: animation 실행 */
    const mixer = new THREE.AnimationMixer(scene);
    const renderer = new THREE.WebGLRenderer();
    document.body.appendChild(renderer.domElement);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
    });
    const animate = () => {
        requestAnimationFrame(animate);
        if (mixer) {
            mixer.update(0.016);
        }
        renderer.render(scene, camera);
    };
    animate();
    /* E: animation 실행 */

    return <primitive object={scene} />;
};


const ModelViewer: FC = () => {
    return (
        <>
            <Canvas className="model-canvas" camera={{position: [3, 1, 3], fov: 10}}>
                <ambientLight intensity={1}/>
                <directionalLight position={[10, 30, 20]} intensity={1}/>
                <directionalLight position={[10, -180, -90]} intensity={1}/>
                <directionalLight position={[-10, -30, 20]} intensity={1}/>
                <directionalLight position={[0, 50, 50]} intensity={0.8}/>
                <directionalLight position={[-30, 10, -40]} intensity={0.7}/>
                <directionalLight position={[50, -50, 30]} intensity={0.6}/>
                <directionalLight position={[-50, 50, -30]} intensity={0.6} />
                <OrbitControls enableZoom={true}/>
                <Model url="/model/scene.gltf"/>
            </Canvas>
        </>
    );
};

export default ModelViewer;
