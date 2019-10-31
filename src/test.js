'use strict'
import * as THREE from './lib/three.module.js';
import { OrbitControls } from './lib/OrbitControls.js';

// document.getElementById('draw').onclick=function(){
//     let drawer = new Drawer('sdsdas');
//     drawer.Draw();
// };
class Drawer{
    constructor(filetxt){
        this.array=filetxt.slice('\n');
        this.points = [];
        this.links = [];
        for(let i = 0;i<this.array;i++){
            let subarr = array.slice(',');
            if(subarr.light>1&&subarr.light<3) this.links.push(subarr);
            if(subarr.light>3&&subarr.light<5) this.points.push(subarr);
        }
    }

    main() {
        const canvas = document.querySelector('#c');
        const renderer = new THREE.WebGLRenderer({canvas});
      
        const fov = 75;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 5000;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set( 0, 0, 3 );
    
        const controls = new OrbitControls(camera, canvas);
        controls.update();
      
        const scene = new THREE.Scene();
      
        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(-1, 2, 4);
            scene.add(light);
            const light2 = new THREE.DirectionalLight(color, intensity);
            light2.position.set(-1, 2, -4);
            scene.add(light2);
        }
        {
            // var geometry1 = new THREE.Geometry();
    
            // geometry1.vertices.push(
            //     new THREE.Vector3( -2,  2, 0 ),
            //     new THREE.Vector3( -2, -2, 0 ),
            //     new THREE.Vector3(  2, -2, 0 )
            // );
    
            // var material1 = new THREE.MeshBasicMaterial({color:0xffffff, wireframe: true});
            // var triangle = new THREE.Mesh(geometry1,material1);
    
            // scene.add( geometry1 );
            function TwoPointsLine(p1,p2){
                let geometry = new THREE.Geometry();
                geometry.vertices.push(
                    new THREE.Vector3(p1[0], p1[1], p1[2]),
                    new THREE.Vector3( p2[0], p2[1], p2[2]), 
                );
                let line = new THREE.Line( geometry );//создает линию
                line.material.depthTest = false;
                line.material.opacity = 0.5;
                line.material.transparent = true;
            
                scene.add( line );
            }
            
            function MainAxises(){
                TwoPointsLine([-1,0,0],[1,0,0]);
                TwoPointsLine([0,-1,0],[0,1,0]);
                TwoPointsLine([0,0,-1],[0,0,1]);
            }
            MainAxises()
            // var geometry = new THREE.Geometry();
            // geometry.vertices.push(
            //     new THREE.Vector3(-1, -1,  1),  // 0
            //     new THREE.Vector3( 1, -1,  1),  // 7
            //     new THREE.Vector3(1, 1,  1),  // 0
            //     new THREE.Vector3( 1, -1, -1), 
            // );
            
            // var line = new THREE.Line( geometry );//создает линию
            // line.material.depthTest = false;
            // line.material.opacity = 0.5;
            // line.material.transparent = true;
            
            // scene.add( line );
    }
        //Создание кубов
        // const boxWidth = 1;
        // const boxHeight = 1;
        // const boxDepth = 1;
        // const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
      
        // function makeInstance(geometry, color, x) {
        //   const material = new THREE.MeshPhongMaterial({color});
      
        //   const cube = new THREE.Mesh(geometry, material);
        //   scene.add(cube);
      
        //   cube.position.x = x;
      
        //   return cube;
        // }
      
        // const cubes = [
        //   makeInstance(geometry, 0x44aa88,  0),
        //   makeInstance(geometry, 0x8844aa, -2),
        //   makeInstance(geometry, 0xaa8844,  2),
        // ];
      
        function resizeRendererToDisplaySize(renderer) {
          const canvas = renderer.domElement;
          const width = canvas.clientWidth;
          const height = canvas.clientHeight;
          const needResize = canvas.width !== width || canvas.height !== height;
          if (needResize) {
            renderer.setSize(width, height, false);
          }
          return needResize;
        }
      
        function render(time) {
          time *= 0.001;
      
          if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
          }
      
        //   cubes.forEach((cube, ndx) => {
        //     const speed = 1 + ndx * .1;
        //     const rot = time * speed;
        //     cube.rotation.x = rot;
        //     cube.rotation.y = rot;
        //   });
      
          renderer.render(scene, camera);
      
          requestAnimationFrame(render);
        }
        for(let i = 0;i<this.links;i++){
            TwoPointsLine(this.points[this.links[0]],this.points[this.links[1]])
        }
      
        requestAnimationFrame(render);
      }
}

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
  
    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set( 0, 0, 3 );

    const controls = new OrbitControls(camera, canvas);
    controls.update();
  
    const scene = new THREE.Scene();
  
    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
        const light2 = new THREE.DirectionalLight(color, intensity);
        light2.position.set(-1, 2, -4);
        scene.add(light2);
    }
    {
        function TwoPointsLine(p1,p2){
            let geometry = new THREE.Geometry();
            geometry.vertices.push(
                new THREE.Vector3(p1[0], p1[1], p1[2]),
                new THREE.Vector3( p2[0], p2[1], p2[2]), 
            );
            let line = new THREE.Line( geometry );//создает линию
            line.material.depthTest = false;
            line.material.opacity = 0.5;
            line.material.transparent = true;
        
            scene.add( line );
        }
        function MainAxises(){
            TwoPointsLine([-1,0,0],[1,0,0]);
            TwoPointsLine([0,-1,0],[0,1,0]);
            TwoPointsLine([0,0,-1],[0,0,1]);
        }
        MainAxises()
        // var geometry = new THREE.Geometry();
        // geometry.vertices.push(
        //     new THREE.Vector3(-1, -1,  1),  // 0
        //     new THREE.Vector3( 1, -1,  1),  // 7
        //     new THREE.Vector3(1, 1,  1),  // 0
        //     new THREE.Vector3( 1, -1, -1), 
        // );
        
        // var line = new THREE.Line( geometry );//создает линию
        // line.material.depthTest = false;
        // line.material.opacity = 0.5;
        // line.material.transparent = true;
        
        // scene.add( line );
}
  
    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }
  
    function render(time) {
      time *= 0.001;
  
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      renderer.render(scene, camera);
  
      requestAnimationFrame(render);
    }
  
    requestAnimationFrame(render);
  }


document.getElementById('draw').onclick = function() {
    let text = document.getElementById('content-file').value;
    let drawer = new Drawer(text);
    drawer.main();
}
