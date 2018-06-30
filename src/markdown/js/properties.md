---
path: /p/js/object-and-types
section: js
date: 2018-05-27T21:27:55.477Z
title: Object and Types
slug: object-and-types
---

Js is an object-oriented language where objects can be connect and share properties.
Objects can be constructed using *constructor* functions.

A *constructor* is a function that, if invoked with *new* keyword, returns an instance.

Technically every function but lambdas can be a constructor.

Each *constructor* has a property named *prototype* that is used to implement prototype-based inheritance.

An object has an internal property that links  to the prototype chain and property look-ups
are done going-up the prototype chain.

### Primitive Types

  The language defines the following primitive types:

  * string
  * number
  * boolean
  * null
  * undefined
  * object
  * Symbol

  Note that *string, number, boolean, null and undefined* are not themselves objects.
  string, number, boolean have Boxed types for ease of use.

  null and undefined have no wrapper form.

  undefined is a property of the global object that cannot be modified(in es6).
  any reference that has not been assigned has value undefined.

  Null:
  * is not a property of the global object
  * is not an object even tho ```typeof null === "object"``` (its a well known bug) 
  * it is the last node of the prototype chain of every descendant of Object.

### Property Descriptors

Introduced in ES5, these attrbutes describe the   

| Attribute name | Type | Description |
| -------------- | ---- | ----------------- |
| ```[[Value]]```| any  | the value retrieved by this property
| ```[[Writable]]```| bool | if false the ```[[Value]]``` cant be changed
| ```[[Enumerable]]```| bool | if false property wont show up in for.. in loops 
| ```[[Configurable]]```| bool | if false prop cant be deleted nor its property descriptors mutated

Attempts at forbidden modification given configurable and/or  writable are silently ignored in lazy mode
and cause errors in strict.

A prop declared ```[[Configurable]]``` false cant be changed to true later.
It is a one-way operation.

### Accessor properties

```[[Get]]``` ```[[Set]]``` are functions that are called as accessors, mutators.

#### Default values

| Property Descriptor | default value |
| ------------------- | ------------- |
| ```[[Value]]```| undfined
| ```[[Get]]```| undefined
| ```[[Set]]```| undefined
| ```[[Writable]]```| false
| ```[[Enumerable]]```| false 
| ```[[Configurable]]```| false 

### Object.defineProperty

`Object.defineProperty<T>(obj: T, prop: string, descr: descrObject): T`

  ```javascript
    const obj = {};

    Object.defineProperty(
      obj, 
      "meaningOfLife", 
      { 
        value: 42, 
        writable: false, 
        configurable: false, 
        enumerable: true
      }
    );
  ```

## Seal, Freeze, PreventExtensions

1. ```Object.preventExtensions(obj);```: it is not possible to add new properties to obj
2. ```Object.seal(obj)```: like 1. but every existing prop has configurable set to false
3. ```Object.freeze(obj)```: like 2. but every prop has writable set to false

## Prototype

Objects in js hae an internal property ```[[Prototype]]``` that links them to another object.

Whenever a property is looked-up in an object, if it not present it is looked up recursively in the prototype chain and if present it is returned otherwise undefined is the reuslt of the look up.

Similarly in a for..in iteration all the prop in the chain are returned.

At the top of most chains is Object.prototype, this object includes most common util methods.

### Shadowing

Whenever a prop that is already defined on the prototype chain is defined on an object the following occurs:

1. If that prop is marked as ```writable: false``` an error is thrown is strict or is silently ignored.
2. If that prop is a mutator (set) the function is **always** callled no shadowing occurs.

3. if the previous conditions are not met, the object is successfully added to the object and it **shadows** the prop defined in the prototype chain.
