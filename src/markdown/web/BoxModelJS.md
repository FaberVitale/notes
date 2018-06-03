---
path: /p/web/dom-api-dimensions
section: web
date: 2018-05-27T21:27:55.477Z
title: Box Model
slug: box-model
---

A collection of links and brief descriptions of API used to query the dimensions
of DOM elements using the javascript DOM api.

* [border-box vs content-box](https://codepen.io/fabervitale/pen/MGQpja)
* [box model visualized](http://jsfiddle.net/y8Y32/25/)

### Element properties:

[clientHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight):<br>
&nbsp;&nbsp;content width + padding - horizontal scrollbar, if present, (0 for inline or if not specified).

[clientWidth](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth):<br>
&nbsp;&nbsp;content height + padding - vertical scrollbar, if present.

[scrollHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight):<br> 
&nbsp;&nbsp;clientHeight + overflow, if present.

[scrollWidth](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth):<br> 
&nbsp;&nbsp;clientWidth + overflow if present.

[clientTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientTop):<br>
&nbsp;&nbsp;equals to elem.style.borderTopWidth

[scrollTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop):<br>
&nbsp;&nbsp;number of pixels scrolled horizontally.

[scrollLeft](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft):<br>
&nbsp;&nbsp;number of pixels scrolled vertically.

### Element Methods

[getClientBoundingRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect):<br>
&nbsp;&nbsp;x: left edges horizontal position (poor support do not use)

&nbsp;&nbsp;y: top edges vertical position (poor support do not use)

&nbsp;&nbsp;top: height > 0 ? y : y + height

&nbsp;&nbsp;bottom: height > 0 ? y + height : y

&nbsp;&nbsp;left: width > 0 ? x : x + width

&nbsp;&nbsp;right: width > 0 ? x + width : x

&nbsp;&nbsp;width: border-box width

&nbsp;&nbsp;height: border-box height

### HTMLElement properties
[offsetHeight](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight):<br>
&nbsp;&nbsp;content height + padding + border

[offsetWidth](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth):<br>
&nbsp;&nbsp;content width + padding + border

[offsetParent](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent):<br>
&nbsp;&nbsp;closest positioned anchestor

### CSS values
[htmlElement.style[camelCaseRule]](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style):<br>
&nbsp;&nbsp;returns only inline rules

[getComputedStyle(element,[psudoElement])](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle):<br>
&nbsp;&nbsp;returns computed styles, example:

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        .paragraph {
          height: 300px;
        }
      </style>
    </head>
    <body>
      <p class="paragraph">words words words...</p>  
      <script> 
        const paragraph = document.querySelector(".paragraph"); 
        const computedStyles = getComputedStyle(paragraph);
        const computedHeight = computedStyles.getPropertyValue("height");
        /* prints 300px */
        console.log(computedHeight);
      </script>
      </body>
  </html>
  ```

### Window properties
  * [scrollY | pageYOffset](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY): amount scrolled on Y axis.
  * [scrollX | pageXOffset](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX): amount scrolled on X axis.
  * [innerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight): viewport height, hor scrollbar included, if present.
  * [innerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth): viewport width, vert scrollbar included, if present.
  * [outerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/outerHeight): browser window height.
  * [outerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth): browser window width.
  * [screenX](https://developer.mozilla.org/en-US/docs/Web/API/Window/screenX): distance between browser window and top of the screen.
  * [screenY](https://developer.mozilla.org/en-US/docs/Web/API/Window/screenY): distance between browser window and top of the screen.
  * [screen](https://developer.mozilla.org/en-US/docs/Web/API/Screen): interface that displays useful screen informations, screen.width, screen.height...

### Html element Properties
 on a standard html pages [document.documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement) returns  <html> as an HTMLElement hence we can use 
 Element properties and HTMLELement properties(see above).
 
 For instance document.documentElement.scrollTop is equal to window.scrollY.
