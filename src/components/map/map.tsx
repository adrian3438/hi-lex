'use client'

import { GoogleMaps } from "./google-map"

export default function Map () {

    return (
        <>
        <div style={{width: '100%' , height : '100vh'}}>
            <GoogleMaps address="" google={null}/>
        </div>
        </>
    )
}
