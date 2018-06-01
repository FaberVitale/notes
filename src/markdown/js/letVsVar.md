---
path: /p/js/let-vs-var
section: js
date: 2018-06-01T07:53:31.675Z
title: Let vs Var
slug: let-vs-var
---

|    |  `let`  |  `var` |
|---|---|---|
| scope | block | execution context  |
| visibility | after declaration | hoisted |
| can add property to global object | no | yes |
| redeclaration | SyntaxError | works
| use before init (R-Value lookup) | Error(Temporal Dead zone) | undefined (declaration is hoisted)
| typeof before decl (L-Value lookup) | Reference Error(Temporal Dead zone) | undefined(declaration is hoisted) 

## Reference

* [MDN Article: Let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)