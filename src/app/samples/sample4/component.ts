// https://stackabuse.com/introduction-to-phaser-3-building-breakout/
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Project, PointText, Point } from 'paper';
@Component({
  selector: 'app-root',
  template:`<canvas #canvas1></canvas>`,
  styles: [
      'canvas {width: 100%; height: 100%; border: 1px solid blue;}',
  ]
})

export class Sample4Component implements OnInit {
    @ViewChild('canvas1', {static: true}) canvas1: ElementRef<HTMLCanvasElement> = {} as ElementRef;
    constructor() {
    }

    ngOnInit() {
        this.draw();
    }

    private draw() {
        const project = new Project(this.canvas1.nativeElement);
        console.log(project);
        const text: any = new PointText(new Point(100, 50));
        text.content='viewSize.width: ' + project.view.viewSize.width;
        text.fontSize = 30;

        const text1: any = new PointText(new Point(100, 80));
        text1.content='viewSize.height: ' + project.view.viewSize.height;
        text1.fontSize = 30;

        const text2: any = new PointText(new Point(100, 110));
        text2.content='zoom: ' + project.view.zoom;
        text2.fontSize = 30;

        const text3: any = new PointText(new Point(100, 140));
        text3.content='center: ' + project.view.center;
        text3.fontSize = 30;

    }

    private init() {
        console.log('init');
    }
}
