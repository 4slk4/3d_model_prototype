import { useGLTF, Html } from "@react-three/drei";
import { useMemo } from "react";

export default function Room( props ) {
    const hallway = useGLTF("./gallery/scene.gltf");
    console.log(hallway);
    const { nodes } = hallway;
    const paintings = nodes.paintings;
    console.log(paintings.position);

    return (
    <primitive
        object={ hallway.scene }
        scale={ 2 }
        position={ [ - 2.5, 0, 2.5 ] }
    >
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={ 1 }
          position={ [ 1.88, 2.18, 6.98 ] }
          rotation-y={ -Math.PI * 0.5 }
          rotation-z={ 0 }
        >
          <iframe 
            src="https://renaultespace.littleworkshop.fr/"
            style={{
                width: "1320px",
                height: "780px",
            }}
          />
        </Html>

        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={ 1 }
          position={ [ 1.89, 2, 13.445 ] }
          rotation-y={ -Math.PI * 0.5 }
          rotation-z={ 0 }
        >
          <iframe 
            src="https://www.fullerton.edu"
            style={{
                width: "852px",
                height: "620px",
            }}
          />
        </Html>

        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={ 1 }
          position={ [ -0.77, 1.828, 15.94 ] }
          rotation-y={ Math.PI * 1 }
          rotation-z={ 0 }
        >
          <iframe 
            src="https://carvisualizer.plus360degrees.com/threejs/"
            style={{
                width: "548px",
                height: "512px",
            }}
          />
        </Html>

        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={ 1 }
          position={ [ -1.96, 1.88, 9.92 ] }
          rotation-y={ Math.PI * 0.5 }
          rotation-z={ 0 }
        >
          <iframe 
            src="https://carvisualizer.plus360degrees.com/threejs/"
            style={{
                width: "586px",
                height: "540px",
            }}
          />
        </Html>

        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={ 1 }
          position={ [ -1.96, 2.10, 7.59 ] }
          rotation-y={ Math.PI * 0.5 }
          rotation-z={ 0 }
        >
          <iframe 
            src="https://earth.plus360degrees.com/"
            style={{
                width: "739px",
                height: "720px",
            }}
          />
        </Html>


    </primitive>
    )
}

useGLTF.preload("./gallery/scene.gltf");