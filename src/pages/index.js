import { Canvas, useThree } from '@react-three/fiber';
import Experience from './Experience.js';
import { Perf } from 'r3f-perf';


export default function Home() {
  return (
    <div id="root">
      <Canvas
          shadows
          camera={ {
              fov: 45,
              near: 0.1,
              far: 200,
              position: [ - 4, 3, 6 ]
          } }
      >
        <Perf position="top-left"/>
        <Experience />            
      </Canvas>
    </div>
  )
}
