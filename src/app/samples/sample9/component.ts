// https://stackabuse.com/introduction-to-phaser-3-building-breakout/
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Project, Path, Point, Raster, Layer, PointText} from 'paper';
@Component({
  selector: 'app-root',
  template:`<canvas #canvas1 (mousewheel)="onMouseWheel($event)"></canvas>`,
  styles: [
      'canvas {width: 100%; height: 100%; border: 1px solid blue;}',
      // 'canvas {width: 800px; height: 800px; border: 1px solid blue;}',
  ]
})

export class Sample9Component implements OnInit {
    @ViewChild('canvas1', {static: true}) canvas1: ElementRef<HTMLCanvasElement> = {} as ElementRef;

    private canvasSize = {width: 0, height: 0};
    private project: any;
    private ZOOM_FACTOR = 1.1;
    constructor() {
    }

    ngOnInit() {
        this.canvasSize.width = this.canvas1.nativeElement.offsetWidth;
        this.canvasSize.height = this.canvas1.nativeElement.offsetWidth;
        this.draw();
    }

    private draw() {
        this.project = new Project(this.canvas1.nativeElement);

        const awesometext: any = new PointText(new Point(100, 100));
        awesometext.content='awesome';

        awesometext.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 1,
            fontSize: 50
        };

    }

    // On mouse drag...
    public onMouseDrag(e: any) {
        // ...update view center.
        this.project.center = e.downPoint.subtract(e.point).add(this.project.center);
    };

    public onMouseWheel(e: any) {
        const oldZoom = this.project.view.zoom;
        const oldCenter: any = new Point(this.project.view.center.x, this.project.view.center.y);

        // Get mouse position.
        // It needs to be converted into project coordinates system.
        const mousePosition = this.project.view.viewToProject(new Point(e.offsetX, e.offsetY));

        // Update view zoom.
        const newZoom = e.deltaY > 0
            ? oldZoom * this.ZOOM_FACTOR
            : oldZoom / this.ZOOM_FACTOR;
        this.project.view.zoom = newZoom;
        // Update view position.
        // this.project.view.center += (mousePosition - oldCenter) * (1 - (oldZoom / newZoom));
        this.project.view.center.x += (mousePosition.x - oldCenter.x) * (1 - (oldZoom / newZoom))
        this.project.view.center.y += (mousePosition.y - oldCenter.y) * (1 - (oldZoom / newZoom))

        // this.project.view.center.x = e.offsetX;
        // this.project.view.center.y = e.offsetY;
    }




}
