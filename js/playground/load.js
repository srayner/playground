$( document ).ready(function() {
    $('#container').on('change', function(){
       console.log('changed');
       
       var geometry = new THREE.BoxGeometry( 100, 100, 100 );
       var material = new THREE.MeshLambertMaterial( { color: 'red' } );
       var cube = new THREE.Mesh( geometry, material );
       cube.position.y = 200;
       scene.add( cube );
       render();

    });
});


