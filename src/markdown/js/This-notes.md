---
path: /p/js/this
section: js
date: 2018-05-27T21:27:55.477Z
title: What's This?
slug: this
---

This is a keyword that class-based object oriented languages(e.g. Java)
use to get a reference of current object instantiated from a class.
In javascript, it is used to emulate this behavior and
it is an additional argument that every function invocation, implicitly or not, adds.

### Execution context
  a record created during function invocation.
  it holds information about where and how the function was invoked,
  arguments passed, a reference to this etc...

### Call-stack
  stack of function called at a specific instant during execution of a program
  On top is the function running at *that* instant. elements of the stack are called 
  stack frames.


### Call-site
  where a function is called. 
  it is not be always transparent where's located without a debugger.

## How it works?
  This is dynamically bound at the call-site of a function, using the following rules.

### Default Binding
  In a function
  * in *lazy mode* this refers to the global object, 
  * in *strict mode* this refers to undefined.

  Only the global object is elegible to the default binding,
  **not** the this of the execution context if it isnt the global object. 

  ```js
    //lazy mode
    const logThis = function () { 
      console.log(this);
    }

    const func = function () { 
      logThis(); 
    };

    func(); // prints the global object
    func.call({}); // prints the global object
  ```

### Implicit Binding
  if an object ```a``` holds a reference to a function ```b``` and the call-site is  ```a.b()```.

  ```a``` is said to *own* b.
  In this case this points to the object ```a```

  ```js
    // global scope
    var c = 0;
    const exec = (func) => {
      if(typeof func === "function") {
        func();
      }
    }

    const foo = function(){ 
      console.log(this.c);
    };

    const a = {
      c: 1,
      b: foo
    };

    a.b(); // logs 1
    (a.b)(); // logs 1

    // Implicit Lost due to reference copy

    let d;
    exec(a.b) // logs 0 call-site is func()
    (d = a.b)(); // logs 0 equivalent to d = foo; d();
  ```

### Explicit Binding
  * call: *Function.prototype.call(thisArg: any, ...args: Array&lt;any&gt;)*
  * apply *Function.prototype.apply(thisArgs: any, args: Array&lt;any&gt;)*

  are a way to explicitly set the context at the call-site.

  Another tool to hard bind a context, bypassing the call-site problem is a helper
  method called *bind* that is In the prototype of Function.
  It is used to partially apply this and the other arguments of a function.
  A bounded function will ignore this from the call-site and use the bounded one. 

### new Binding

  a function invoked using the new keyword will always have this pointing at the new object.
  Technically a constructor in js is just a function that is preceded by a *new* keyword.

  Whenever a function is invoked with a *new* keyword the following steps occur:

  1. a brand-new object is created.
  2. this object is ```[[Prototype]]``` linked.
  3. this object is the context of the constructor function.
  4. the body of the function is executed.
  5. unless the function returns another object this new object is returned.

  Technically new creates a binding.

### Order of Precedence

  determining *this* reference given the call-site.

  1. in precence of a **new binding** this will point to the newly created object
  2. if an explicit bound is present this will point to the specified   object.        bounded functions using *bind()* have higher precedence over *call()/apply()*
  3. function called with an *implicit binding*  ```e.g. a.b()``` where a owns a reference to the function whose b is pointing to, will have the this pointing to the owner oject.
  4. **default binding** this will point to the global object in lazy mode and undefined in strict mode.

### Exceptions
  Passing null or undefined to ```call()/bind()/apply()``` will makes the functions use the default binding rule.
  it was useful before es6 introduced spreading operator.

## Arrow functions and context

  capture the value of this from the execution context
  its value **cannot be rebinded in any way**(not  even with *new*).
  As consequence arrow functions cannot be constructors (it throws an error)
  and explicit binidings (call/bind/apply) ae silently ignored

  ```js
    function logDelayed() {
      setTimeout( () => {console.log(this);}, 50);
    }

    const a = { b: logDelayed};

    a.b(); // logs a obj
    logDelayed.call({}); // logs {}
    logDelayed(); // logs undefined in strict global object in lazy
    (() => {console.log(this)}).bind("hi!")(); // bind is ignored
  ```