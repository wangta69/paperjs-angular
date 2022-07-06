# Paperjs Angular
https://peaku.co/questions/40717-instale-paperjs-y-el-archivo-de-escritura-en-angular-2
```
npm i paper
npm install --save-dev @types/paper
```

## draw circle
project를 생성하면 이후는 project에 별도의 선언이 없어도 그려진다. 이 부분이 가장 이해가 되지 않지만.
또한 canvas의 크기를 보면 모바일에서와 웹에서의 사이즈가 달라진다. 이 부분도 어떻게 이해해야 하는지.(pixelRatio로 별도로 계산하는듯)
```
import { Project, Path, Point} from 'paper';
@Component({
  ...................
  template:`<canvas #canvas1></canvas>`,
})

export class Sample1Component implements OnInit {
    @ViewChild('canvas1', {static: true}) canvas1: ElementRef<HTMLCanvasElement> = {} as ElementRef;

    constructor() {
    }

    ngOnInit() {
        this.draw();
    }

    private draw() {
        new Project(this.canvas1.nativeElement);

        new Path.Circle({
            center: [80, 50],
            radius: 30,
            strokeColor: 'black'
        });
    }
}
```

## Multiple canvas
```
@Component({
  selector: 'app-root',
  template:`<canvas id="canvas1" #canvas1></canvas><canvas id="canvas2" #canvas2></canvas>`,
  styles: [
      '#canvas1 {width: 100%; height: 100%; border: 1px solid blue;}',
      '#canvas2 {width:300px; height: 200px; border: 1px solid red;}'
  ]
})

export class Sample2Component implements OnInit {
    @ViewChild('canvas1', {static: true}) canvas1: ElementRef<HTMLCanvasElement> = {} as ElementRef;
    @ViewChild('canvas2', {static: true}) canvas2: ElementRef<HTMLCanvasElement> = {} as ElementRef;
    constructor() {
    }

    ngOnInit() {
        this.draw();
    }

    private draw() {
        new Project(this.canvas1.nativeElement);

        new Path.Circle({
            center: [80, 50],
            radius: 30,
            strokeColor: 'black'
        });
        new Project(this.canvas2.nativeElement);
        new Path.Circle({
            center: new Point(100, 70),
            radius: 50,
            strokeColor: 'blue'
        });
    }
}
```


## 다양한 Shape 다루기


## Layer
layer 도 별도의 정의가 되지 않은 이상은 가장 최근에 만들어진 레이어로 이후 생성되는 path 나 이미지들이 들어간다.
```
const layer1 = new Layer();
layer1.name = 'firstLayer';
const circle1 = new Path.Circle()

const layer2 = new Layer();
layer2.name = 'secondLayer';


const circle2 = new Path.Circle()
const circle3 = new Path.Circle()


```

이럴경우 circle1은 layer1에 circle2, 3 은 layer2에 자동으로 들어간다.

```
this.layer1.addChild(this.circle2);
circle2는 layer 1로 이동된다.
```
