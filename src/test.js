'use strict'
import * as THREE from './lib/three.module.js';
import { OrbitControls } from './lib/OrbitControls.js';


class Drawer {
  constructor(pointsTxt, linesTxt) {//создает в массив точек и ребер
    let arrayP = pointsTxt.split('\n');
    let arrayL = linesTxt.split('\n');

    this.points = [];
    this.links = [];
    for (let i = 0; i < arrayP.length; i++) {
      if (arrayP[i] != '') {
        let subarr = arrayP[i].split(',');
        this.points.push(subarr);
      }
    }
    for (let i = 0; i < arrayL.length; i++) {
      if (arrayL[i] != '') {
        let subarr = arrayL[i].split(',');
        this.links.push(subarr);
      }

    }
  }

  main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ canvas });
    const camera = CameraOptions();
    camera.position.set(0, 0, 3);

    const controls = new OrbitControls(camera, canvas);
    controls.update();

    const scene = new THREE.Scene();

    function CameraOptions() {
      const fov = 75;
      const aspect = 2;  // the canvas default
      const near = 0.1;
      const far = 5000;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      return camera
    }

    function SceneOptions(scene) {
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);
      const light2 = new THREE.DirectionalLight(color, intensity);
      light2.position.set(-1, 2, -4);
      scene.add(light2);
    }
    function TwoPointsLine(p1, p2) {
      let geometry = new THREE.Geometry();
      geometry.vertices.push(
        new THREE.Vector3(p1[0], p1[1], p1[2]),
        new THREE.Vector3(p2[0], p2[1], p2[2]),
      );
      let line = new THREE.Line(geometry);//создает линию
      line.material.depthTest = false;
      line.material.opacity = 0.5;
      line.material.transparent = true;

      scene.add(line);
    }
    function MainAxises() {
      TwoPointsLine([-1, 0, 0], [1, 0, 0]);
      TwoPointsLine([0, -1, 0], [0, 1, 0]);
      TwoPointsLine([0, 0, -1], [0, 0, 1]);
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

    MainAxises();
    SceneOptions(scene);
    for (let i = 0; i < this.links.length; i++) {
      let p1 = this.links[i][0];
      let p2 = this.links[i][1];
      TwoPointsLine(this.points[p1], this.points[p2])
    };

    requestAnimationFrame(render);
  }
}
//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------

document.getElementById('draw').onclick = function () {
  let points = document.getElementById('points').value;
  let lines = document.getElementById('lines').value;
  let drawer = new Drawer(points, lines);
  drawer.main();
}
