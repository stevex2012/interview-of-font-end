# css 

- 概念
- css选择器/权重
- 可/（不可）继承属性
- 隐藏元素的方法
- 媒体查询
- transform和position的区别
- css3
- 物理像素/逻辑像素
- 适配
- margin 融合
- css 优化提高性能方法
- 左右居中/上下居中/上下左右居中
- 什么是盒模型
- transition/animation区别
- line-height的理解和赋值
- 伪元素/伪类
- 单行/多行文本溢出
- 为什么会出现less/sass
- css工程化
- css单位：px/em/rem/vw/vh/百分比

概念-》选择器-》优先-》

盒子=》width、height/border/bgcolor/fontcolor/line-height/font-size/padding/margin/position/box-shadow/box-sizing

盒子数值单位

层级/流动/

```js
class Box{
  constructor(){

  }
  width: '',
  height: '',
}
```

## 概念
层叠样式表（后面的可覆盖前面的）

## css选择器/权重
id/类/属性/标签/父子/相邻/通配符/伪类/后代

important > 行内样式 > 样式列表

| 选择器 | 格式 ｜ 权重 |
| id    |#vip |  100 |
| 类选择  |.vip |  50 |
| 属性  | a[href] |  50 |
| 标签  | a |  10 |
| 父子  | ul>li |  10 |
| 相邻  | div+p |  10 |
| 通配符  | * |  0 |
| 伪类  | a:before |  10 |
| 后代  | div span |  0 |


## 可/（不可）继承属性
font-size/color/line-height
<!-- todo -->

## 隐藏元素的方法
1. display: none 不会渲染/重排重绘
2. visible: hidden 会渲染
3. position: != static; z-index: -1
4. 盒子上覆盖一层
5. opacity: 0
6. transform: scale(0,0)
7. clip/clip-path ：使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。








## 媒体查询
根据设备屏幕特性来显示不同的css效果
@media screen/print (限制条件) {}

## transform和position的区别
1. transform GPU 控制，可以使用硬件加速
2. 做动画的时候，position 位置的改动会不断触发relayout、rerender（性能问题）， transform属性有GPU渲染，浏览器把动画信息发送给Gpu，之后不会在触发relayout、rerender。

## css3
- transform
- transition
- box-shadow
- flex
- grid
- border-img/border-shadow/border-radius
- background-(img/size/origin/clip)
- 渐变background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
- text-shadow
- @keyframes/animation
- column
- @media

## 物理像素/逻辑像素
物理像素: 一部手机屏幕上所有的物理像素点，例如ip5 宽度方向有750个像素点，长度方向有1334个像素点，那么它的物理像素就是750*1334

逻辑像素: 设备独立像素（device independent pixel DIP），可以理解为反映在CSS/JS程序里面的像素点，也就是说css像素是逻辑像素的一种。screen.width screen.height

css像素: 1px 2px

设备像素比: (device pixel ratio DPR) = 物理像素/逻辑像素（window.devicePixelRatio）

若DPR = 1，图片能清晰显示，如果若DPR > 1 一倍图显示会有问题

- 1px 边框问题 transform: scale(1/DPR),媒体查询适配不同DPR