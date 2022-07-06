// https://stackabuse.com/introduction-to-phaser-3-building-breakout/
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Project, Path, Point, Raster, Layer, Color, PointText} from 'paper';
@Component({
  selector: 'app-root',
  template:`<canvas #canvas1></canvas>`,
  styles: [
      'canvas {width: 100%; height: 100%; border: 1px solid blue;}',
      // 'canvas {width: 800px; height: 800px; border: 1px solid blue;}',
  ]
})

export class Sample6Component implements OnInit {
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



        const project: any = new Project(this.canvas1.nativeElement);



        const layer1 = new Layer();
        layer1.name = 'firstLayer';

        layer1.onMouseDrag = (e: any) => {
            layer1.position = layer1.position.add(e.delta);
        };




        const ball1: any = new Path.Circle(new Point(100, 100), 30);
        ball1.fillColor = 'red';
        ball1.onMouseUp = function() {
        };

        // layer2.addChild(ball1);
        // layer2.visible = false;

        const ball2: any = new Path.Circle(new Point(100, 200), 30);
        ball2.fillColor = 'blue';
        // layer1.addChild(ball2);

        const layer2: any = new Layer();
        layer2.name = 'secondLayer';
        // layer2.style.fillColor = 'blue';
        layer2.style = {
            fillColor: new Color('gray'),
            strokeColor: new Color('red')
        };

        layer2.onMouseDrag = (e: any) => {
            layer2.position = layer2.position.add(e.delta);
        };

        console.log('layer2 >>>> ', layer2);

        const ball3: any = new Path.Circle(new Point(200, 100), 30);
        ball3.strokeColor = 'yellow';
        ball3.strokeWidth = 20;
        // ball3.fillColor = 'yellow';

        const ball4: any = new Path.Circle(new Point(200, 200), 30);
        ball4.fillColor = 'green';
        ball4.selected = true;
        console.log(project.view);

        const layer3: any = new Layer();
        layer3.name = 'controlerLayer';
        const text1: any = new PointText(new Point(100, 30));
        text1.content='hide layer 1';

        text1.onMouseDown = () => {
            if (text1.content === 'hide layer 1') {
                text1.content='show layer 1';
                layer1.visible = false;
            } else {
                text1.content='hide layer 1';
                layer1.visible = true;
            }
        };

        const text2: any = new PointText(new Point(300, 30));
        text2.content='move yellow layer 1';

        text2.onMouseDown = () => {
            if (text2.content === 'move yellow layer 1') {
                text2.content='move yellow layer 2';
                layer1.addChild(ball3);
            } else {
                text2.content='move yellow layer 1';
                layer2.addChild(ball3);
            }
        };

        // 레이어를 통해 레이어에 있는 모든 item의 속성을 한번에 변경할 수 있다.
        layer3.style = { // 이곳에 있어야 레이어에 있는 모든 item들에 적용된다. 만약 text1 아래에 있으면 text1 만 적용된다.
            fillColor: 'blue',
            fontSize: 20
        };

        // layer2.activate();
        //
        //
        layer2.selected = true;
        layer1.selected = false;

    }




}
