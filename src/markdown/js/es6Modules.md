---
path: /p/js/es6-modules
section: js
date: 2018-05-27T21:27:55.477Z
title: Es6 Modules
slug: es6-modules
---


The api of an es6 module is static: 
  * imports/exports can only be defined at the top level
  * once defined these bindings cannot be changed.
  * they are singleton, one instance per module.
The modules are loaded using a default loader or a custom one.

## General Features

 * Code inside a module is always run in strict-mode.
 * imports/ exports are statically defined, cant be conditional.
 * Modules have still access to the global object of the environment and its properties.


## Imports

To import a module an import statement is required.

the module specifier (the string after from) has to be a **string literal**.


In (only chrome so far) browsers modules can be inlined using the syntax:
  ```html
    <script type="module"> export default 42;</script>
  ```

