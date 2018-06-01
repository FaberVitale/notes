webpackJsonp([0x5e17ed478e75],{498:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  A promise is an object that is a placeholder of a deferred computation."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Invariants"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"a promise is in one of 3 "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"mutually"}]},{type:"text",value:" exclusive states: "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"fulfilled, rejected or pending"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"a promise "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"pending"}]},{type:"text",value:" can become either "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"fulfilled or rejected"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"if a Promise p is fulfilled "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"p.then(f, r)"}]},{type:"text",value:" will immediatly enqueue a Job to call the function "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"f"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"if a Promise p is rejected "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"p.then(f, r)"}]},{type:"text",value:" will immediatly enqueue a Job to call the function "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"r"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"r of f are executed even if an error occurs.\nA promise is said to be settled if it is not pending."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A promise it is resolved if it settled or if it has been "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"locked-in"}]},{type:"text",value:" to match the state of another promise."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Attempts to superficially mutate a resolved promise have no effect."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"API"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Constructor"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  Argument passed to the constructor is called Executor and must be a function.\nthe executor will define here some computation (sync or async)\nand when done it will pass the result to resolve() if success\nor the errror or whatever is used to signal it a failure to reject()\nin case of error."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"Example:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"new"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","class-name"]},children:[{type:"text",value:"Promise"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"resolve"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" reject"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"=>"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n   "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" computation "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"maybeAsync"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"..."}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n\n   computation"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"onsuccess "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" resolve"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n   computation"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"onerror "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" reject"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Promise.resolve|reject"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Promise.resolve(val)"}]},{type:"text",value:": Returns a new promise immediatly fulfilled with value val"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Promise.reject(err)"}]},{type:"text",value:": returns a new promise immediatly rejected with error err "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"p.then(onfulfill, onrejection)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  If p is resolved a PromiseJob is scheduled that executes the function onfulfill or onrejection, not both."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"p.catch(onrejection)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  Equivalent to p.then(undefined, onrekection);"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Promise.all(iterable<Promise<any>>)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  Given an iterable of promises returns a promise that is fulfilled, if all the promises are resolved,\nor rejection otherwise.\nthe argument passed to onfulfill cb is an array of values the promises resolve to."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Promise.race(iterable<Promise<any>>)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  Given an iterable of promises returns the a new promise that is resolved\nwith the same outcome as the first promise that is resolved inside this iterable."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Note:"}]},{type:"text",value:" if an empty array is passed this promise will never "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"resolve"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Thenable"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  A promise-like object is called thenable and has  prop named "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"then"}]},{type:"text",value:" that is a function."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},children:[{type:"text",value:"MDN Article"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},children:[{type:"text",value:"Specification"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},excerpt:"  A promise is an object that is a placeholder of a deferred computation. Invariants a promise is in one of 3  mutually  exclusive states:  fulfilled…",frontmatter:{date:"May 27, 2018",path:"/p/js/promise",title:"Promise",section:"js",slug:"promise"}}},pathContext:{}}}});
//# sourceMappingURL=path---p-js-promise-dcc8ab868ffd3f3a75c1.js.map