'use strict';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let Draw = () =>{

    ctx.moveTo(0, 0);
    ctx.lineTo(0, 300)
    ctx.stroke();

    ctx.moveTo(0, 0);
    ctx.lineTo(300, 0)
    ctx.stroke();

    ctx.moveTo(0, 0);
    ctx.lineTo(300, 300)
    ctx.stroke();

    ctx.moveTo(300, 300);
    ctx.lineTo(300, 0)
    ctx.stroke();

    ctx.moveTo(300, 300);
    ctx.lineTo(0, 300)
    ctx.stroke();
}