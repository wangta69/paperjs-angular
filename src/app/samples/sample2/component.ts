// https://stackabuse.com/introduction-to-phaser-3-building-breakout/
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Project, Path, Point} from 'paper';
@Component({
  selector: 'app-root',
  template:`<canvas id="canvas1" #canvas1></canvas><canvas id="canvas2" #canvas2></canvas>`,
  styles: [
      '#canvas1 {width: 100%; height: 100%; border: 1px solid blue;}',
      '#canvas2 {width:300px; height: 200px; border: 1px solid red;}'
  ]
})

export class Sample2Component implements OnInit {
    @ViewChild('canvas1', {static: true}) canvas1: ElementRef<HTMLCanvasElement> = {} as ElementRef;
    @ViewChild('canvas2', {static: true}) canvas2: ElementRef<HTMLCanvasElement> = {} as ElementRef;
    constructor() {
    }

    ngOnInit() {
        this.draw();
    }

    private draw() {
        new Project(this.canvas1.nativeElement);
        new Path.Circle({
            center: [80, 50],
            radius: 30,
            strokeColor: 'black'
        });

        new Project(this.canvas2.nativeElement);
        new Path.Circle({
            center: new Point(100, 70),
            radius: 50,
            strokeColor: 'blue'
        });


    }
}
