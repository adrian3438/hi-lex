'use client';

import React, { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

export default function MainTopVideo() {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const iframeWrapRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
        if (iframeRef.current) {
            const player = new Player(iframeRef.current);

            player.on('play', () => {
                iframeWrapRef.current?.classList.add('on');
            });

            player.on('ended', () => {
                iframeWrapRef.current?.classList.remove('on');
            });

            return () => {
                player.off('ended');
            };
        }
    }, []);
    function handleClick() {
        iframeWrapRef.current?.classList.remove('on');
    }

    return (
        <div style={{padding: "56.25% 0 0 0"}} className="main-video" ref={iframeWrapRef}>
            <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/782381466?badge=0&amp;autopause=0&autoplay=1&amp;player_id=0&amp;app_id=58479&controls=0&muted=1"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                title="onshore-plant"
            />
            <button onClick={handleClick}></button>
        </div>
    );
}
