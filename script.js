import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';




// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe0e0e0);

// Camera
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 10
);
camera.position.z=0.5;
camera.position.y=-0.8;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
// const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 10);
// scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(3, 10, 10);
scene.add(dirLight);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
controls.minPolarAngle = Math.PI / 4;   // Minimum vertical angle (~45°)
controls.maxPolarAngle = Math.PI;   // Maximum vertical angle (~90° = flat horizontal)
controls.minAzimuthAngle = -Math.PI / 2; // -90 degrees
controls.maxAzimuthAngle =  Math.PI / 2; // +90 degrees


// Load Model
const loader = new GLTFLoader();
loader.load(
  './hall9.glb', // ensure hall9.glb is in the same folder
  (gltf) => {
    const model = gltf.scene;
    model.scale.set(1, 1, 1);
    model.rotation.z = Math.PI / 2;
    scene.add(model);
  },
  (xhr) => {
    console.log(`Loading: ${((xhr.loaded / xhr.total) * 100).toFixed(2)}%`);
  },
  (err) => {
    console.error('Error loading model:', err);
  }
);

// Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  animation.x += 0.05;
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animate
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  // .rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();