# css 

- 概念
- css选择器/权重
- 可/（不可）继承属性
- 隐藏元素的方法
- 媒体查询
- transform和position的区别
- css3
- 物理像素/逻辑像素
- 移动端适配
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

PPI：是屏幕对角线的物理像素的个数除以对角线英寸数。

若DPR = 1，图片能清晰显示，如果若DPR > 1 一倍图显示会有问题

- 1px 边框问题 transform: scale(1/DPR),媒体查询适配不同DPR

## 移动端适配
在不同移动端设备上内容都能合理展示
- 0 适配 flex布局+微调 （缺点：小屏幕显大，大屏幕显小）
- 基于一个尺寸缩放

### 1. viewpoint 缩放
基于设计稿1:1 px开发，高度30就写30px，通过<meta />标签设置为设计稿宽度，在获取设备逻辑像素，缩放回来
```js
const UIWIDTH = 750;
const scale = window.screen.width/UIWIDTH;
const content = `width=${UIWIDTH},initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}`
const meta = document.createElement('meta')

meta[name] = 'viewpoint'
meta[content] = content
document.appendChild(meta)
```
缺点
- 首页白屏问题，需要动态计算。head 里面执行js会阻塞html渲染
- 1px 大小问题

### 2. 动态rem
1rem === 1逻
```js
<meta name="viewport" content="width=device-width, 
    initial-scale=1, maximum-scale=1, minimum-scale=1">
const UIWIDTH = 750;
const setView = () => {
  document.documentElement.style.fontSize = (screen.width/UIWIDTH)*100+ 'px'
}
```
设计稿width=750px，一个div宽度375px
100px = 1rem;
750px = 7.5rem = 7.5*(screen.width/UIWIDTH)*100
screen.width/UIWIDTH 把屏幕分成750份，
设置html的font-size 为 100份
那么设计稿上的 宽度 xpx = x/100 + 'rem'
不需要缩放的用px
div{
  width: 3.75rem;
}

### 3. vw适配
此方案，是根据css单位vw进行适配，100vw == 屏幕宽度，假设设计稿的宽度为750px，一个字体大小为，75px，那么字体大小用vw表示  font-size = 75/750*100vw = 10vw;这样不管屏幕的物理像素/逻辑像素，是多少，也不用js动态适配，
缺点： 在书写css时，不容易看出设计稿的px值，可以使用less/sass增加一个function 
eg： @function px2vw（px){
  return px/750*100vw
}
.foo{
  width: px2vw(40)
}


## margin 融合
相邻或者嵌套的盒子之间没有非空内容，边框，会发生margin融合
解决办法： 
- 内容不为空
- bfc
- 增加边框属性

## css 优化提高性能方法
体积：定义公共变量，方法，常用显示类名封装，
效率：开发者开发之前，熟悉公共类库，避免重复
工程化：抽离公共css，加载必须css，压缩css，使用lint工具检测出为使用的css，给出警告，提示开发人员删除

## 左右居中/上下居中/上下左右居中
- 左右居中
margin,text-align,table-cell,transform,position,flex,grid
- 上下居中
position, flex,grid,line-height,transform
- 上下左右居中
flex,position+margin,grid,transform

## 什么是盒模型
网页html语言中，每个标签类比一个个盒子，大大小小，相互包裹的盒子组成了网页结构
box-sizing: border-box/content-box
标准盒模型/怪异盒模型

## transition/animation区别
- transition
多个属性的简写，指定一个/多个属性css变化的过度动画，关注属性
- animation
定义一个元素动画的效果，需要配合@keyframes使用，关注元素本身

## line-height的理解和赋值
设置元素每一行高度，对于块级元素设置想想到与设置最小高度，inline元素，设置inline盒子高度
line-height: px/em/%/num/normal

## 伪元素/伪类
- 伪元素 before/after/first-line/first-letter
- 伪类 :first-child/active/hover/visited/link/lang 选定特定元素的类
伪类作用于真个元素，伪元素作用于元素的一部分（相当于伪造一个元素，修改样式），伪类只是修改样式

## 单行/多行文本溢出
{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  <!-- 多行 -->
  display: -webkit-box;
  -webkit-line-clamp:2; (两行文字);
-webkit-box-orient:vertical;
}

## 为什么会出现less/sass
less/sass css编译器，增强css语法，打下工程化基础

## css工程化
less/sass prefix 公共css抽离 类名冲突
bem/css module / css in js/

## css单位：px/em/rem/vw/vh/百分比
