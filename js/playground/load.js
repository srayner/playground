$( document ).ready(function() {
    $('#container').on('change', function(){
       console.log('changed');
       
       var geometry = new THREE.BoxGeometry( 2000, 10, 1000 );
       var material = new THREE.MeshLambertMaterial( { color: 'blue' } );
       var cube = new THREE.Mesh( geometry, material );
       cube.position.y = -5;
       scene.add( cube );
       render();

    });
});


