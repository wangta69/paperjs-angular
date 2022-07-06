// https://stackabuse.com/introduction-to-phaser-3-building-breakout/
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Project } from 'paper';
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

        // const circle1: any = new Path.Circle({
        //     center: [80, 50],
        //     radius: 30,
        //     strokeColor: 'black'
        // });
        // circle1.fillColor = 'red';
        // circle1.selected = true;

        console.log(project);
        console.log( 'project.view.viewSize :', project.view.viewSize);

    }

    private init() {
        console.log('init');
    }
}
