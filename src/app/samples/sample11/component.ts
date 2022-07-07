// https://stackabuse.com/introduction-to-phaser-3-building-breakout/
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Project, Path, Point, PointText, Tool} from 'paper';
@Component({
  selector: 'app-root',
  template:`<canvas #canvas1></canvas>`,
  styles: [
      'canvas {width: 100%; height: 800px; border: 1px solid blue;}',
      // 'canvas {width: 800px; height: 800px; border: 1px solid blue;}',
  ]
})

export class Sample11Component implements OnInit {
    @ViewChild('canvas1', {static: true}) canvas1: ElementRef<HTMLCanvasElement> = {} as ElementRef;

    private canvasSize = {width: 0, height: 0};
    private project: any;
    private ball1: any;
    private ball2: any;
    private text1: any;
    constructor() {
    }

    ngOnInit() {
        this.canvasSize.width = this.canvas1.nativeElement.offsetWidth;
        this.canvasSize.height = this.canvas1.nativeElement.offsetWidth;

        this.project = new Project(this.canvas1.nativeElement);
        this.getHitItem();
    }

    private getHitItem() {


        this.text1 = new PointText(new Point(100, 50));
        this.text1.content='Move Mouse';
        this.text1.fontSize = 50;


        this.ball1 = new Path.Circle(new Point(100, 100), 30);
        this.ball1.fillColor = 'red';
        this.ball1.strokeWidth = 5;
        this.ball1.name = 'Red Ball';



        // layer2.addChild(ball1);
        // layer2.visible = false;

        this.ball2 = new Path.Circle(new Point(200, 100), 30);
        this.ball2.fillColor = 'blue';
        this.ball2.name = 'Blue Ball';


        const hitOptions: any = {
            segments: true,
            stroke: true,
            fill: true,
            tolerance: 5,
        };


        const tool = new Tool();
        tool.onMouseMove = (event: any) => {
            var hitResult = this.project.hitTest(event.point, hitOptions);
             if (hitResult) {
                 this.text1.content= hitResult.item.name + ' Hit';
             } else {
                 this.text1.content='Move Mouse';
             }
        }

        // var hitOptions = {
        //     segments: true,
        //     stroke: true,
        //     fill: true,
        //     tolerance: 5,
        //     match: hitMatchFilter,
        // };

    }


    // hitTool = new paper.Tool();
    // hitTool.activate();
    // hitTool.onMouseDown = function (event) {
    // 	hitResult = paper.project.hitTest(event.point, hitOptions);
    // 	if (hitResult) {
    // 		// we have a hit, do something here
    // 		hitResult.item.selected = true;
    // 	}
    // }

    // https://stackoverflow.com/questions/17754059/paper-js-hittest-for-obstructed-items-with-mouse-event
}
