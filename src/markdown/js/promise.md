---
path: /p/js/promise
section: js
date: 2018-05-27T21:27:55.477Z
title: Promise
slug: promise
---

  A promise is an object that is a placeholder of a deferred computation.

## Invariants
  1. a promise is in one of 3 **mutually** exclusive states: *fulfilled, rejected or pending*
  2. a promise *pending* can become either *fulfilled or rejected*.
  3. if a Promise p is fulfilled ```p.then(f, r)``` will immediatly enqueue a Job to call the function **f**
  4. if a Promise p is rejected ```p.then(f, r)``` will immediatly enqueue a Job to call the function **r**
  5. r of f are executed even if an error occurs.
A promise is said to be settled if it is not pending.

A promise it is resolved if it settled or if it has been *locked-in* to match the state of another promise.

Attempts to superficially mutate a resolved promise have no effect.

## API

### Constructor
  Argument passed to the constructor is called Executor and must be a function.
  the executor will define here some computation (sync or async)
  and when done it will pass the result to resolve() if success
  or the errror or whatever is used to signal it a failure to reject()
  in case of error.

  *Example:*
 ```js
  new Promise ( (resolve, reject) => {
    const computation = maybeAsync(...);

    computation.onsuccess = resolve;
    computation.onerror = reject;
  })
  ```

### Promise.resolve|reject
  * ```Promise.resolve(val)```: Returns a new promise immediatly fulfilled with value val
  * ```Promise.reject(err)```: returns a new promise immediatly rejected with error err 

### p.then(onfulfill, onrejection)
  If p is resolved a PromiseJob is scheduled that executes the function onfulfill or onrejection, not both.

### p.catch(onrejection)
  Equivalent to p.then(undefined, onrekection);

### Promise.all(iterable&lt;Promise&lt;any&gt;&gt;)

  Given an iterable of promises returns a promise that is fulfilled, if all the promises are resolved,
  or rejection otherwise.
  the argument passed to onfulfill cb is an array of values the promises resolve to.

### Promise.race(iterable&lt;Promise&lt;any&gt;&gt;)

  Given an iterable of promises returns the a new promise that is resolved
  with the same outcome as the first promise that is resolved inside this iterable.

  **Note:** if an empty array is passed this promise will never *resolve*

### Thenable

  A promise-like object is called thenable and has  prop named *then* that is a function.

## Reference

* [MDN Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
* [Specification](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)