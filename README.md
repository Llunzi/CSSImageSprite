# CSSImageSprite简介
* CSSSprites在国内很多人叫css精 灵，是一种网页图片应用处理方式。
* 加速的关键，减少HTTP请求次数。客户端每显示一张图片都会向服务器发送请求。所以，图片越多请求次数越多，造成延迟的可能性也就越大。

# CSS Sprites原理
* CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，
* 再利用CSS的”background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字精确的定位出背景图片的位置。
* CODE
```javascript
.comment {
    background-image: url(images/sprite.png);
    background-position: 0px 0px;
    background-size: 192px 192px;
}

.bubble {
    background-image: url(images/sprite.png);
    background-position: -64px 0px;
    background-size: 192px 192px;
}

span {
    display: inline-block;
    width: 64px;
    height: 64px;
    border: 3px solid #ccc;
    background-repeat: no-repeat;
    margin: 5px;
}
```

# CSS Sprites优缺点
## 优点
* 利用CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能
* CSS Sprites能减少图片的字节

## 缺点
* CSS Sprites在维护的时候比较麻烦，如果页面背景有少许改动，一般就要改这张合并的图片，无需改的地方最好不要动，这样避免改动更多的css
* 在图片合并的时候，你要把多张图片有序的合理的合并成一张图片，还要留好足够的空间，防止板块内出现不必要的背景
