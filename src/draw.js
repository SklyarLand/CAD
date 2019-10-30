'use strict'
export default class Drawer{
    constructor(a){
        this.canvas=document.getElementById('canvas');
        this.ctx = canvas.getContext('webgl');
        this.cube = {
            points:[
                [0,0,0,1],
                [50,0,0,1],
                [50,50,0,1],
                [0,50,0,1],
                [0,0,50,1],
                [50,0,50,1],
                [50,50,50,1],
                [0,50,50,1]
            ],
            links:[
                [0,1],
                [0,3],
                [0,4],
                [1,2],
                [1,5],
                [2,3],
                [2,6],
                [3,7],
                [4,5],
                [4,7],
                [5,6],
                [6,7],
            ]
        }
    }
    Draw(){
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, 300)
        this.ctx.stroke();
    }
    Draw(){
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, 300)
        this.ctx.stroke();
    }
}

