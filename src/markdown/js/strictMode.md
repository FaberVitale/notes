---
path: /p/js/strict-mode
section: js
date: 2018-05-27T21:27:55.477Z
title: Strict Mode
slug: strict-mode
---


## Description
 Opt-in using the pragma ```"use strict";```

Applied to the top of a function makes the whole function run in strict mode.
Applied to the top of a script makes the whole script run in strict mode.
es6 modules run implicitly in strict mode.


|   | Sloppy Mode  | Strict Mode |
|---|---|--- |
| *this default binding* | global Object |  undefined |
| *accidental global variable* ```car = 42;``` | applies property to global object |  throws Reference error |
| *delete read-only prop* | fails silently |  throws TypeError |
| *add prop to a non-extendible object* | fails silently |  throws TypeError |
| *change property descriptor if configurable is false* | fails silently |  throws TypeError |
| *with* | works normally | throws Error |
| *octal notation:* ```let a = 05;``` | works |  forbidden throws SyntaxError only ```let a = 0o5;``` works |
| *assign properties to primitives* ```(2).a = 3; window.undefined = true; "a".a = "a";``` | fails silently |  throws TypeError |
| *eval and arguments used as variable/property names* | works |  throws TypeError |
| *delete plainNames* ```delete that;``` | works |  throws SyntaxError |
| *addings variables to scope using eval* ```eval("var r = 3;")``` | adds variable to scope | doesnt not add a variable |

## References   

 * [MDN Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
 * [Closures](https://github.com/getify/You-Dont-Know-JS/blob/1efb94d9a98d873461e3416de625e398ddce31fd/scope%20%26%20closures/ch2.md)
 * [Prototype](https://github.com/getify/You-Dont-Know-JS/blob/31e1d4ff600d88cc2ce243903ab8a3a9d15cce15/this%20%26%20object%20prototypes/ch2.md)