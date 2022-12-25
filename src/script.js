import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";

/**
 * Basics
 */
// Debug panel
const gui = new dat.GUI();
dat.GUI.toggleHide();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
// gui.add(ambientLight, "intensity").min(0).max(1).step(0.001);
scene.add(ambientLight);

// front
const frontLight = new THREE.DirectionalLight(0xbc00ff, 1);
frontLight.position.set(0, 0, 4.5);

// top
const topLight = new THREE.DirectionalLight(0xbc00ff, 1);
topLight.position.set(0, 2, 0);

// bottom
const bottomLight = new THREE.DirectionalLight(0xcafe00, 1);
bottomLight.position.set(0, -2, 0);

// left
const leftLight = new THREE.DirectionalLight(0xcafe00, 1);
leftLight.position.set(-2, 0, 0);

// right
const rightLight = new THREE.DirectionalLight(0xbc00ff, 1);
rightLight.position.set(2, 0, 0);

scene.add(frontLight, topLight, bottomLight, leftLight, rightLight);

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();

const squareTexture = textureLoader.load("/textures/square.png");
squareTexture.generateMipmaps = false;
squareTexture.minFilter = THREE.NearestFilter;
squareTexture.magFilter = THREE.NearestFilter;
squareTexture.repeat.set(2, 7);
squareTexture.wrapS = THREE.RepeatWrapping;
squareTexture.wrapT = THREE.RepeatWrapping;

const squareTextureHorizontal = textureLoader.load("/textures/square.png");
squareTextureHorizontal.generateMipmaps = false;
squareTextureHorizontal.minFilter = THREE.NearestFilter;
squareTextureHorizontal.magFilter = THREE.NearestFilter;
squareTextureHorizontal.repeat.set(2, 10);
squareTextureHorizontal.wrapS = THREE.RepeatWrapping;
squareTextureHorizontal.wrapT = THREE.RepeatWrapping;

const squareTextureLong = textureLoader.load("/textures/square.png");
squareTextureLong.generateMipmaps = false;
squareTextureLong.minFilter = THREE.NearestFilter;
squareTextureLong.magFilter = THREE.NearestFilter;
squareTextureLong.repeat.set(2, 17);
squareTextureLong.wrapS = THREE.RepeatWrapping;
squareTextureLong.wrapT = THREE.RepeatWrapping;

const squareTexturePlane = textureLoader.load("/textures/square.png");
squareTexturePlane.generateMipmaps = false;
squareTexturePlane.minFilter = THREE.NearestFilter;
squareTexturePlane.magFilter = THREE.NearestFilter;
squareTexturePlane.repeat.set(2, 2);
squareTexturePlane.wrapS = THREE.RepeatWrapping;
squareTexturePlane.wrapT = THREE.RepeatWrapping;

/**
 * Materials
 */
const material = new THREE.MeshStandardMaterial({
  map: squareTexture,
});
const materialLong = new THREE.MeshStandardMaterial({
  map: squareTextureLong,
});
const materialHorizontal = new THREE.MeshStandardMaterial({
  map: squareTextureHorizontal,
});

const materialPlane = new THREE.MeshStandardMaterial({
  map: squareTexturePlane,
});

const materialFlatShading = new THREE.MeshStandardMaterial({
  flatShading: true,
  metalness: 0.7,
});

/**
 * Objects
 */
// Main Structure
const structure = new THREE.Group();

const geometryHorizontal = new THREE.BoxGeometry(1, 5, 1);
const geometryVertical = new THREE.BoxGeometry(1, 4, 1);
const geometryDeep = new THREE.BoxGeometry(1, 9, 1);

// BACK
// back bottom
const backBottom = new THREE.Mesh(geometryHorizontal, materialHorizontal);
backBottom.position.y = -2.5;
backBottom.rotation.z = Math.PI / 2;

// back top
const backTop = new THREE.Mesh(geometryHorizontal, materialHorizontal);
backTop.position.y = 2.5;
backTop.rotation.z = Math.PI / 2;

// back left
const backLeft = new THREE.Mesh(geometryVertical, material);
backLeft.position.x = -2;

// back right
const backRight = new THREE.Mesh(geometryVertical, material);
backRight.position.x = 2;

// DEPTH
// depth top left
const depthTopLeft = new THREE.Mesh(geometryDeep, materialLong);
depthTopLeft.rotation.x = Math.PI / 2;
depthTopLeft.position.x = -2;
depthTopLeft.position.y = 2.5;
depthTopLeft.position.z = 5;

// depth top right
const depthTopRight = new THREE.Mesh(geometryDeep, materialLong);
depthTopRight.rotation.x = Math.PI / 2;
depthTopRight.position.x = 2;
depthTopRight.position.y = 2.5;
depthTopRight.position.z = 5;

// depth bottom left
const depthBottomLeft = new THREE.Mesh(geometryDeep, materialLong);
depthBottomLeft.rotation.x = Math.PI / 2;
depthBottomLeft.position.x = -2;
depthBottomLeft.position.y = -2.5;
depthBottomLeft.position.z = 5;

// depth bottom right
const depthBottomRight = new THREE.Mesh(geometryDeep, materialLong);
depthBottomRight.rotation.x = Math.PI / 2;
depthBottomRight.position.x = 2;
depthBottomRight.position.y = -2.5;
depthBottomRight.position.z = 5;

// FRONT
// front left
const frontLeft = new THREE.Mesh(geometryVertical, material);
frontLeft.position.x = -2;
frontLeft.position.z = 10;

// front right
const frontRight = new THREE.Mesh(geometryVertical, material);
frontRight.position.x = 2;
frontRight.position.z = 10;

structure.add(
  backBottom,
  backTop,
  backLeft,
  backRight,
  depthTopLeft,
  depthTopRight,
  depthBottomLeft,
  depthBottomRight,
  frontLeft,
  frontRight
);

structure.scale.set(0.5, 0.5, 0.5);
scene.add(structure);

// Patches
const patchGeometry = new THREE.PlaneGeometry(1, 1);

const frontTopLeftVerticalPatch = new THREE.Mesh(patchGeometry, materialPlane);
frontTopLeftVerticalPatch.position.x = -2;
frontTopLeftVerticalPatch.position.y = 2.5;
frontTopLeftVerticalPatch.position.z = 9.501;

const frontTopRightVerticalPatch = new THREE.Mesh(patchGeometry, materialPlane);
frontTopRightVerticalPatch.position.x = 2;
frontTopRightVerticalPatch.position.y = 2.5;
frontTopRightVerticalPatch.position.z = 9.501;

const frontBtmLeftVerticalPatch = new THREE.Mesh(patchGeometry, materialPlane);
frontBtmLeftVerticalPatch.position.x = -2;
frontBtmLeftVerticalPatch.position.y = -2.5;
frontBtmLeftVerticalPatch.position.z = 9.501;

const frontBtmRightVerticalPatch = new THREE.Mesh(patchGeometry, materialPlane);
frontBtmRightVerticalPatch.position.x = 2;
frontBtmRightVerticalPatch.position.y = -2.5;
frontBtmRightVerticalPatch.position.z = 9.501;

const frontTopLeftHorizontalPatch = new THREE.Mesh(
  patchGeometry,
  materialPlane
);
frontTopLeftHorizontalPatch.position.x = -2;
frontTopLeftHorizontalPatch.position.y = 2.001;
frontTopLeftHorizontalPatch.position.z = 10.001;
frontTopLeftHorizontalPatch.rotation.x = -Math.PI / 2;

const frontTopRightHorizontalPatch = new THREE.Mesh(
  patchGeometry,
  materialPlane
);
frontTopRightHorizontalPatch.position.x = 2;
frontTopRightHorizontalPatch.position.y = 2.001;
frontTopRightHorizontalPatch.position.z = 10.001;
frontTopRightHorizontalPatch.rotation.x = -Math.PI / 2;

const frontBtmLeftHorizontalPatch = new THREE.Mesh(
  patchGeometry,
  materialPlane
);
frontBtmLeftHorizontalPatch.position.x = -2;
frontBtmLeftHorizontalPatch.position.y = -2.001;
frontBtmLeftHorizontalPatch.position.z = 10.001;
frontBtmLeftHorizontalPatch.rotation.x = Math.PI / 2;

const frontBtmRightHorizontalPatch = new THREE.Mesh(
  patchGeometry,
  materialPlane
);
frontBtmRightHorizontalPatch.position.x = 2;
frontBtmRightHorizontalPatch.position.y = -2.001;
frontBtmRightHorizontalPatch.position.z = 10.001;
frontBtmRightHorizontalPatch.rotation.x = Math.PI / 2;

const backTopLeftPatch = new THREE.Mesh(patchGeometry, materialPlane);
backTopLeftPatch.position.x = -2.501;
backTopLeftPatch.position.y = 2.5;
backTopLeftPatch.position.z = 0;
backTopLeftPatch.rotation.y = -Math.PI / 2;

const backBottomLeftPatch = new THREE.Mesh(patchGeometry, materialPlane);
backBottomLeftPatch.position.x = -2.501;
backBottomLeftPatch.position.y = -2.5;
backBottomLeftPatch.position.z = 0;
backBottomLeftPatch.rotation.y = -Math.PI / 2;

const backTopRightPatch = new THREE.Mesh(patchGeometry, materialPlane);
backTopRightPatch.position.x = 2.501;
backTopRightPatch.position.y = 2.5;
backTopRightPatch.position.z = 0;
backTopRightPatch.rotation.y = Math.PI / 2;

const backBottomRightPatch = new THREE.Mesh(patchGeometry, materialPlane);
backBottomRightPatch.position.x = 2.501;
backBottomRightPatch.position.y = -2.5;
backBottomRightPatch.position.z = 0;
backBottomRightPatch.rotation.y = Math.PI / 2;

structure.add(
  frontTopLeftVerticalPatch,
  frontTopRightVerticalPatch,
  frontBtmLeftVerticalPatch,
  frontBtmRightVerticalPatch,
  frontTopLeftHorizontalPatch,
  frontTopRightHorizontalPatch,
  frontBtmLeftHorizontalPatch,
  frontBtmRightHorizontalPatch,
  backTopLeftPatch,
  backBottomLeftPatch,
  backTopRightPatch,
  backBottomRightPatch
);

// Triangle
const triangleGeometry = new THREE.BufferGeometry();
const triangleVertices = new Float32Array([
  // vertex 1
  -1.0, -1.0, 0,
  // vertex 2
  1.0, -1.0, 0,
  // vertex 3
  0, 0.6, 0,
]);
triangleGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(triangleVertices, 3)
);

const triangle = new THREE.Mesh(
  triangleGeometry,
  new THREE.MeshBasicMaterial({
    color: 0xcafe00,
    side: THREE.DoubleSide,
  })
);
triangle.scale.set(0.4, 0.4, 0.4);
triangle.position.y = 0.075;
scene.add(triangle);

// Cylinders
const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 3, 1);

const cylinderTop = new THREE.Mesh(cylinderGeometry, materialFlatShading);
cylinderTop.scale.set(0.6, 0.6, 0.6);
cylinderTop.rotation.x = Math.PI / 2;
cylinderTop.position.y = 1.75;
cylinderTop.position.z = 2.5;

const cylinderBottom = new THREE.Mesh(cylinderGeometry, materialFlatShading);
cylinderBottom.scale.set(0.6, 0.6, 0.6);
cylinderBottom.rotation.x = Math.PI / 2;
cylinderBottom.position.y = -1.75;
cylinderBottom.position.z = 2.5;

scene.add(cylinderTop, cylinderBottom);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  20
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 6;

camera.lookAt(structure.position);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enabled = false;
gui.add(controls, "enabled");
controls.enablePan = false;
gui.add(controls, "enablePan");
controls.autoRotate = false;
gui.add(controls, "autoRotate");
controls.autoRotateSpeed = 0.5;
controls.maxDistance = 10;
controls.minDistance = 0.75;
controls.maxAzimuthAngle = Math.PI / 4;
controls.minAzimuthAngle = -Math.PI / 4;
controls.maxPolarAngle = Math.PI / 1.5;
controls.minPolarAngle = Math.PI / 4;
controls.rotateSpeed = 0.7;

const enableFullRotation = {
  enableFullRotation: () => {
    controls.maxAzimuthAngle = Infinity;
    controls.minAzimuthAngle = Infinity;
  },
};

gui.add(enableFullRotation, "enableFullRotation");

gui.add(controls, "autoRotateSpeed", -10, 10, 0.001);

controls.autoRotate = false;
controls.autoRotateSpeed = 0.5;
controls.maxDistance = 50;
controls.minDistance = 5;
controls.maxAzimuthAngle = Math.PI / 3;
controls.minAzimuthAngle = - Math.PI / 3;
controls.maxPolarAngle = Math.PI / 1.5;
controls.minPolarAngle = Math.PI / 4;

controls.minZoom = 20;
controls.panSpeed = 0;
controls.rotateSpeed = 0.7;


const enableFullRotation = {
    enableFullRotation: () => {
        controls.maxAzimuthAngle = Infinity;
        controls.minAzimuthAngle = Infinity;
    }
}

gui
    .add(enableFullRotation, "enableFullRotation");
gui
    .add(controls, "autoRotate");
gui
    .add(controls, "autoRotateSpeed", -10, 10, 0.001);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Background
 */
const root = document.querySelector(":root");
let backgroundSize = 24.5;
let change = +0.5;
setInterval(function () {
  if (backgroundSize == 25) {
    change = -0.5;
  }
  if (backgroundSize == 24) {
    change = +0.5;
  }
  backgroundSize += change;
}, 500);

/**
 * Animate
 */
const clock = new THREE.Clock();

const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  ambientLight.intensity = Math.abs(Math.sin(elapsedTime * 0.5) * 0.5);

  triangle.position.z = Math.sin(elapsedTime * 0.5);

  cylinderTop.rotation.y = elapsedTime * 0.75;
  cylinderBottom.rotation.y = -elapsedTime * 0.75;

  // Background
  root.style.setProperty("--background-size", `${backgroundSize}px`);

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call animate again on the next frame
  window.requestAnimationFrame(animate);
};

animate();
