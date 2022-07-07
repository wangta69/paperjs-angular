// https://stackabuse.com/introduction-to-phaser-3-building-breakout/
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Project, Path, Point, Raster, Layer, PointText, Tool, Color} from 'paper';
@Component({
  selector: 'app-root',
  template:`<canvas #canvas1></canvas>`,
  styles: [
      'canvas {width: 100%; height: 800px; border: 1px solid blue;}',
      // 'canvas {width: 800px; height: 800px; border: 1px solid blue;}',
  ]
})

export class Sample10Component implements OnInit {
    @ViewChild('canvas1', {static: true}) canvas1: ElementRef<HTMLCanvasElement> = {} as ElementRef;

    private canvasSize = {width: 0, height: 0};
    private project: any;
    private ball1: any;
    private ball2: any;
    private text1: any;
    private text2: any;
    constructor() {
    }

    ngOnInit() {
        this.canvasSize.width = this.canvas1.nativeElement.offsetWidth;
        this.canvasSize.height = this.canvas1.nativeElement.offsetWidth;

        this.project = new Project(this.canvas1.nativeElement);
        this.draw();
        this.hitTest();
    }

    private draw() {


        this.text1 = new PointText(new Point(100, 50));
        this.text1.content='Drag Circle';
        this.text1.fontSize = 50;


        this.ball1 = new Path.Circle(new Point(100, 100), 30);
        this.ball1.fillColor = 'red';
        this.ball1.strokeWidth = 5;
        this.ball1.onMouseDrag = (e: any) => {
            // ball2.sendToBack();
            this.ball1.bringToFront();
            this.ball1.position = this.ball1.position.add(e.delta);
            this.getIntersections();
        };



        // layer2.addChild(ball1);
        // layer2.visible = false;

        this.ball2 = new Path.Circle(new Point(200, 100), 30);
        this.ball2.fillColor = 'blue';

        this.ball2.onMouseDrag = (e: any) => {
            // ball1.sendToBack();
            this.ball2.bringToFront();
            this.ball2.position = this.ball2.position.add(e.delta);
            this.getIntersections();
        };


    }

    private getIntersections() {
        console.log('thisTest');
        if (this.ball1.hitTest(this.ball2)) {
            alert('circle 1 clicked');
        }

        if (this.project.hitTest(this.ball2)) {
            alert('circle 1 clicked');
        }

        var intersections = this.ball1.getIntersections(this.ball2);
        if (intersections.length) {

            this.text1.content = 'Hitted';
        } else {
            this.text1.content = 'Drag Circle';
        }
    }

    private hitTest() {
        this.text2 = new PointText(new Point(50, 250));
        this.text2.content='Mouse HitTest';
        this.text2.fontSize = 50;

        const circle = new Path.Circle({
            center: new Point(200, 100),
            radius: 10,
            fillColor: 'green'
        });
        circle.visible = false;

        const ball: any = new Path.Circle(new Point(100, 300), 30);
        // ball.fillColor = 'red';
        ball.strokeWidth = 2;
        ball.strokeColor = new Color('black');


        const tool = new Tool();
        tool.onMouseMove = (event: any) => {
          var p = event.point;
          var np= ball.getNearestLocation(p);

          // text.content=Math.floor(np.point.x)+','+Math.floor(np.point.y);
          // circle.position=np.point;
          circle.position=np.point;
          if(np.distance < 10) {
            ball.strokeColor = new Color('blue');
            circle.visible=true;
          } else {
            circle.visible=false;
            ball.strokeColor = new Color('black');
          }
        }
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
