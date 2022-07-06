// https://stackabuse.com/introduction-to-phaser-3-building-breakout/
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Project, Path, Point, Raster, Layer, Color} from 'paper';
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

        const layer2: any = new Layer();
        layer2.name = 'secondLayer';
        // layer2.style.fillColor = 'blue';
        layer2.style = {
            fillColor: new Color('gray'),
            strokeColor: new Color('red')
        };

        console.log('layer2 >>>> ', layer2);


        const raster1 = new Raster('/assets/images/fruit2-m.png');
        raster1.onLoad = function(){
            raster1.position = project.view.center;
            raster1.size = project.view.size;
    	};

        layer1.addChild(raster1);
        layer1.visible = false;


        const ball1: any = new Path.Circle(new Point(this.getReal(80), this.getReal(50)), this.getReal(30));
        ball1.fillColor = 'red';
        ball1.onMouseUp = function() {
        	alert("ball 1!");
        };

        // layer2.addChild(ball1);
        // layer2.visible = false;

        const ball2: any = new Path.Circle(new Point(this.getReal(160), this.getReal(100)), this.getReal(60));
        ball2.fillColor = 'blue';
        layer1.addChild(ball2);

        const ball3: any = new Path.Circle(new Point(this.getReal(400), this.getReal(60)), this.getReal(40));
        ball3.strokeColor = 'yellow';
        ball3.strokeWidth = 20;
        // ball3.fillColor = 'yellow';

        const ball4: any = new Path.Circle(new Point(this.getReal(800), this.getReal(600)), this.getReal(25));
        ball4.fillColor = 'green';
        console.log(project.view);
        project.view.onResize = function(event: any) {
            console.log(event);
        //     project.view.setViewSize(new Size(this.getReal(800), this.getReal(600)));
        //     const scale = this.getScale();
    	// 	ball1.position = new Point(this.getReal(80), this.getReal(50));
        //     ball1.scale(scale);
        //
        //     ball2.position = new Point(this.getReal(160), this.getReal(100));
        //     ball2.scale(scale);
        //
        //     ball3.position = new Point(this.getReal(400), this.getReal(60));
        //     ball3.scale(scale);
        //
        //     ball4.position = new Point(this.getReal(800), this.getReal(600));
        //     ball4.scale(scale);
        //
        //     raster1.scale(scale);
        //     raster1.position = project.view.center;
        };

    }

    private getReal(val: number) {
        console.log('getReal');
       const actual_ratio = this.canvas1.nativeElement.offsetWidth / this.canvasSize.width;
       console.log('val: ' + val + ', actual_ratio:' + actual_ratio);
       return val * actual_ratio;
   }

   private getScale() {

       // const scale = $('#canvas').innerWidth()/last_width;
       // last_width = $('#canvas').innerWidth();
       // return scale;
   }


}
