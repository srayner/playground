/* 
 * home.js
 * 
 * A 3D playground for fun!
 */

// Scene
var scene = new THREE.Scene();

// Camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xffffff, 1);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Controls
controls = new THREE.OrbitControls( camera );
controls.damping = 0.2;
controls.addEventListener( 'change', render );
           
// World
var geometry = new THREE.BoxGeometry( 500, 500, 500 );
var material = new THREE.MeshLambertMaterial( { color: 'green' } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 2000;

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.copy(camera.position); // probably not needed
scene.add(pointLight);

// dynamic texture
var dynamicTexture = new THREEx.DynamicTexture(500,500);
dynamicTexture.context.font = "bold "+(0.2*500)+"px Arial";
dynamicTexture.clear('cyan');
dynamictexture.drawText('Hello', undefined, 250, 'red');
        
// Animation loop
function animate() {
    pointLight.position.set(camera.position.x, camera.position.y +3, camera.position.z);
    requestAnimationFrame(animate);
    controls.update();
}
animate();

function render() {	
    renderer.render( scene, camera );
}