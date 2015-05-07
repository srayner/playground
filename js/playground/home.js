/* 
 * home.js
 * 
 * A 3D playground for fun!
 */

// container
var container = document.getElementById('layout-center');

// Scene
var scene = new THREE.Scene();

// Camera
var camera = new THREE.PerspectiveCamera( 75, (window.innerWidth - 400)/ window.innerHeight, 0.1, 6000 );

// Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xffffff, 1);
renderer.setSize( window.innerWidth - 436, window.innerHeight );
document.getElementById('layout-center').appendChild( renderer.domElement );

// Controls
controls = new THREE.OrbitControls( camera, container );
controls.damping = 0.2;
controls.addEventListener( 'change', render );
           
// World
var geometry = new THREE.BoxGeometry( 100, 200, 100 );
var material = new THREE.MeshLambertMaterial( { color: 'green' } );
var cube = new THREE.Mesh( geometry, material );
cube.position.y = (cube.height / 2);
scene.add( cube );
camera.position.z = 1500;

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.copy(camera.position); // probably not needed
scene.add(pointLight);
        
// Animation loop
function animate() {
    pointLight.position.set(camera.position.x, camera.position.y , camera.position.z);
    requestAnimationFrame(animate);
    controls.update();
}
animate();

function render() {	
    renderer.render( scene, camera );
}