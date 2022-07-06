// https://stackabuse.com/introduction-to-phaser-3-building-breakout/
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Project, Path, Point, Rectangle, Size} from 'paper';
@Component({
  selector: 'app-root',
  template:`<canvas #canvas1></canvas>`,
  styles: [
      'canvas {width: 100%; height: 100%; border: 1px solid blue;}',
  ]
})

export class Sample3Component implements OnInit {
    @ViewChild('canvas1', {static: true}) canvas1: ElementRef<HTMLCanvasElement> = {} as ElementRef;
    constructor() {
    }

    ngOnInit() {
        this.draw();
    }

    private draw() {
        new Project(this.canvas1.nativeElement);

        const circle1: any = new Path.Circle({
            center: [80, 50],
            radius: 30,
            strokeColor: 'black'
        });
        circle1.fillColor = 'red';
        circle1.selected = true;

        new Path.Circle({
            center: new Point(100, 70),
            radius: 50,
            strokeColor: 'blue'
        });

        // 시작점(좌상), 끝점(우하)
        const rectangle1 = new Rectangle(new Point(150, 100), new Point(300, 150));
        const pathRectangle1: any = new Path.Rectangle(rectangle1);
        pathRectangle1.fillColor = '#e9e9ff';
        pathRectangle1.selected = true;

        // Rectangular Shaped Paths with Rounded Corners
        const rectangle2 = new Rectangle(new Point(350, 50), new Point(450, 100));
        const radius2 = new Size(20, 20);
        const pathRectangle2: any = new Path.Rectangle(rectangle2, radius2);
        pathRectangle2.fillColor = 'black';



        // Create a triangle shaped path
        const triangle: any = new Path.RegularPolygon(new Point(80, 200), 3, 50);
        triangle.fillColor = '#e9e9ff';
        triangle.selected = true;

        // Create a decagon shaped path
        const decagon: any = new Path.RegularPolygon(new Point(200, 200), 10, 50);
        decagon.fillColor = '#e9e9ff';
        decagon.selected = true;
    }
}
