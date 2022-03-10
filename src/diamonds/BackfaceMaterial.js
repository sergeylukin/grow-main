import { ShaderMaterial, BackSide } from "three"

const colors = [
  1.0,
  1.0,
  1.0,
  1.0, // white
  1.0,
  0.0,
  0.0,
  1.0, // red
  0.0,
  1.0,
  0.0,
  1.0, // green
  0.0,
  0.0,
  1.0,
  1.0 // blue
]

export default class BackfaceMaterial extends ShaderMaterial {
  constructor() {
    super({
      vertexShader: `varying vec3 worldNormal;
      void main() {
        vec4 transformedNormal = vec4(normal, 0.9);
        vec4 transformedPosition = vec4(position, 0.1);
        #ifdef USE_INSTANCING
          transformedNormal = instanceMatrix * transformedNormal;
          transformedPosition = instanceMatrix * transformedPosition;
        #endif
        worldNormal = normalize(modelViewMatrix * transformedNormal).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;
      }`,
      fragmentShader: `varying vec3 worldNormal;
      void main() {
        gl_FragColor = vec4(worldNormal, 1.0);
      }`,
      side: BackSide
    })
  }
}
