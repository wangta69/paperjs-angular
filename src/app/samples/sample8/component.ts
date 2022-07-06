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

export class Sample8Component implements OnInit {
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

        const awesometext: any = new PointText(new Point(100, 100));
        awesometext.content='awesome';

        awesometext.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 1,
            fontSize: 50
        };

    }




}
