// https://stackabuse.com/introduction-to-phaser-3-building-breakout/
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Project, Path, Point, Raster, Layer, PointText} from 'paper';
@Component({
  selector: 'app-root',
  template:`<canvas #canvas1></canvas>`,
  styles: [
      'canvas {width: 100%; height: 100%; border: 1px solid blue;}',
      // 'canvas {width: 800px; height: 800px; border: 1px solid blue;}',
  ]
})

export class Sample7Component implements OnInit {
    @ViewChild('canvas1', {static: true}) canvas1: ElementRef<HTMLCanvasElement> = {} as ElementRef;

    private canvasSize = {width: 0, height: 0};
    constructor() {
    }

    ngOnInit() {
        this.canvasSize.width = this.canvas1.nativeElement.offsetWidth;
        this.canvasSize.height = this.canvas1.nativeElement.offsetWidth;
        this.draw();
    }

    private draw() {
        new Project(this.canvas1.nativeElement);

        const text: any = new PointText(new Point(100, 50));
        text.content='Click Button';
        text.fontSize = 50;


        const ball1: any = new Path.Circle(new Point(100, 100), 30);
        ball1.fillColor = 'red';
        ball1.onMouseUp = () => {
            text.style.fillColor = 'black';
        };
        ball1.onMouseDown = () => {
            text.style.fillColor = 'red';
        };
        ball1.onMouseDrag = (e: any) => {
            ball1.position = ball1.position.add(e.delta);
        };



        // layer2.addChild(ball1);
        // layer2.visible = false;

        const ball2: any = new Path.Circle(new Point(200, 100), 30);
        ball2.fillColor = 'blue';
        ball2.onMouseUp = () => {
            text.style.fillColor = 'black';
        };

        ball2.onMouseDown = () => {
            text.style.fillColor = 'blue';
        };
        ball2.onMouseDrag = (e: any) => {
            ball2.position = ball2.position.add(e.delta);
        };


    }


}
