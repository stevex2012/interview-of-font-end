# html 考点

- <meta /> 标签
- 语意化
- seo
- dns 预解析
- <link /> prelod 属性，用法 
- <script /> 异步/同步
- 行内元素/块元素
- <!DOCTYPE html> 作用
- iframe
- b/strong
- i/em 
- alt/title 属性
- src/href 属性


## <meta /> 标签
1. 定义网页元数据 <meta charset="utf-8" />
2. 定义视图大小 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
3. 关键词seo <meta name="keywords" content="vip">
4. <!-- 设置文档的字符编码 -->
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- 以上 3 个 meta 标签 *必须* 放在 head 的最前面；其他任何的 head 内容必须在这些标签的 *后面* -->
 
<!-- 对外部资源加载的限制（允许控制从哪里加载资源） -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
<!-- 尽早地放置在文档中 -->
<!-- 仅应用于该标签下的内容 -->
 
<!-- Web 应用的名称（仅当网站被用作为一个应用时才使用）-->
<meta name="application-name" content="应用名称">
 
<!-- 针对页面的简短描述（限制 150 字符）-->
<!-- 在*某些*情况下，该描述是被用作搜索结果展示片段的一部分 -->
<meta name="description" content="一个页面描述">
 
<!-- 控制搜索引擎的抓取和索引行为 -->
<meta name="robots" content="index,follow"><!-- 所有搜索引擎 -->
<meta name="googlebot" content="index,follow"><!-- 仅对 Google 有效 -->
 
<!-- 告诉 Google 不显示网站链接的搜索框 -->
<meta name="google" content="nositelinkssearchbox">
 
<!-- 告诉 Google 不提供此页面的翻译 -->
<meta name="google" content="notranslate">
 
<!-- 验证 Google 搜索控制台的所有权 -->
<meta name="google-site-verification" content="verification_token">
 
<!-- 验证 Yandex 网站管理员的所有权 -->
<meta name="yandex-verification" content="verification_token">
 
<!-- 验证 Bing 网站管理员中心的所有权 -->
<meta name="msvalidate.01" content="verification_token">
 
<!-- 验证 Alexa 控制台的所有权 -->
<meta name="alexaVerifyID" content="verification_token">
 
<!-- 验证 Pinterest 控制台的所有权 -->
<meta name="p:domain_verify" content="code from pinterest">
 
<!-- 验证 Norton 安全站点的所有权 -->
<meta name="norton-safeweb-site-verification" content="norton code">
 
<!-- 用来命名软件或用于构建网页（如 - WordPress、Dreamweaver）-->
<meta name="generator" content="program">
 
<!-- 关于你的网站主题的简短描述 -->
<meta name="subject" content="你的网站主题">
 
<!-- 基于网站内容给出一般的年龄分级 -->
<meta name="rating" content="General">
 
<!-- 允许控制 referrer 信息如何传递 -->
<meta name="referrer" content="no-referrer">
 
<!-- 禁用自动检测和格式化可能的电话号码 -->
<meta name="format-detection" content="telephone=no">
 
<!-- 通过设置为 “off” 完全退出 DNS 预取 -->
<meta http-equiv="x-dns-prefetch-control" content="off">
 
<!-- 在客户端存储 cookie，web 浏览器的客户端识别 -->
<meta http-equiv="set-cookie" content="name=value; expires=date; path=url">
 
<!-- 指定要显示在一个特定框架中的页面 -->
<meta http-equiv="Window-Target" content="_value">
 
<!-- 地理标签 -->
<meta name="ICBM" content="latitude, longitude">
<meta name="geo.position" content="latitude;longitude">
<meta name="geo.region" content="country[-state]"><!-- 国家代码 (ISO 3166-1): 强制性, 州代码 (ISO 3166-2): 可选; 如 content="US" / content="US-NY" -->
<meta name="geo.placename" content="city/town"><!-- 如 content="New York City" -->

## 语意化
h5 提供了新的标签，例如nav、header、footer、article、aside、。。。开发在编写html的时候，根据显示内容选择合适的html标签，不建议div一把梭

## seo
为了搜索引擎能够，爬取关键词，在用户搜索关键词的时候，提供展示相关网页，起到引流的作用，做法，使用<meta> 添加name/content 属性 <meta name="keywords" content="nbscript"/>, 还可以在img上添加alt属性

## dns 预解析
一个网站的资源可能放在不同的域名下面，这样能提高网页资源的加载速度，一般浏览器同一个域名有tcp链接数量限制，一般最多6个。
为了提高响应速度，会请求域名之前，先进行域名解析，
仅对外域资源有效
<link rel="dns-prefetch" href="https://fonts.googleapis.com/"> 执行dns查找
建议和一起使用，减少跨域请求的感知
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>

## <link /> prelod 属性，用法 
预先加载js/css 网页需要这些资源的时候，可以直接使用，避免等待
<link ref="preload" href="https://www.aa.js" as="script">
<link ref="preload" href="https://www.aa.css" as="style">

## <script /> 异步/同步
1. <script async />异步加载js，下载完成后执行，会阻塞渲染
2. <script defer />异步加载js，等html渲染完成，再执行
2. <script  /> 同步模式，下载->执行，页面会被阻塞，渲染进程和js进程互斥，一般吧js放在<body> 后面

## 行内元素/块元素
1. 行内元素: span strong, em,i, 
2. 块元素: h,p,div,header,nav,footer,main,
3. 行内替换元素: img,input,textarea,select

## <!DOCTYPE html> 作用
标记语言的文档声明，告诉浏览器用什么标记语言解析器

## iframe
- 优点：
  - 一个标签就能把网页全部显示出来
- 缺点：
  - 两个网页之间通信复杂
  - 需要设置高度，不能自动撑满

## b/strong i/em 
浏览器上的变现都一样，b为了加粗而加粗，strong为了强调而加粗

## alt/title 属性
- alt: img加载失败后的提示
- title: 鼠标移上去显示的文字

## src/href 属性
- src: 下载资源，使用
- href: 链接资源，指向