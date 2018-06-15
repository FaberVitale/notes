webpackJsonp([0x9c9bc1f92fd7],{507:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Notes"}},markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Js is a object-oriented language where objects can be connect and share properties.\nObjects can be constructed using "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"constructor"}]},{type:"text",value:" functions."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"constructor"}]},{type:"text",value:" is a function that, if invoked with "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"new"}]},{type:"text",value:" keyword, returns an instance."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Technically every function but lambdas can be a constructor."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Each "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"constructor"}]},{type:"text",value:" has a property named "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"prototype"}]},{type:"text",value:" that is used to implement prototype-based inheritance."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"An object has an internal property that links  to the prototype chain and property look-ups\nare done going-up the prototype chain."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Primitive Types"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  The language defines the following primitive types:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"string"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"number"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"boolean"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"null"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"undefined"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"object"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Symbol"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  Note that "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"string, number, boolean, null and undefined"}]},{type:"text",value:" are not themselves objects.\nstring, number, boolean have Boxed types for ease of use."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  null and undefined have no wrapper form."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  undefined is a property of the global object that cannot be modified(in es6).\nany reference that has not been assigned has value undefined."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  Null:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"is not a property of the global object"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"is not an object even tho "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'typeof null === "object"'}]},{type:"text",value:" (its a well known bug) "}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"it is the last node of the prototype chain of every descendant of Object."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Property Descriptors"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Introduced in ES5, these attrbutes describe the   "}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Attribute name"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Type"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Value]]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"any"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"the value retrieved by this property"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Writable]]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"bool"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"if false the \n"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Value]]"}]},{type:"text",value:"\n cant be changed"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Enumerable]]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"bool"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"if false property wont show up in for.. in loops"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Configurable]]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"bool"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"if false prop cant be deleted nor its property descriptors mutated"}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Attempts at forbidden modification given configurable and/or  writable are silently ignored in lazy mode\nand cause errors in strict."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A prop declared "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Configurable]]"}]},{type:"text",value:" false cant be changed to true later.\nIt is a one-way operation."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Accessor properties"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Get]]"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Set]]"}]},{type:"text",value:" are functions that are called as accessors, mutators."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Default values"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Property Descriptor"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"default value"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Value]]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"undfined"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Get]]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"undefined"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Set]]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"undefined"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Writable]]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"false"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Enumerable]]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"false"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Configurable]]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"false"}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Object.defineProperty"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Object.defineProperty<T>(obj: T, prop: string, descr: descrObject): T"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"text",value:"  "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" obj "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n\n  Object"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"defineProperty"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"\n    obj"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" \n    "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"meaningOfLife"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" \n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:" \n      value"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"42"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" \n      writable"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","boolean"]},children:[{type:"text",value:"false"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" \n      configurable"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","boolean"]},children:[{type:"text",value:"false"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" \n      enumerable"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","boolean"]},children:[{type:"text",value:"true"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Seal, Freeze, PreventExtensions"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Object.preventExtensions(obj);"}]},{type:"text",value:": it is not possible to add new properties to obj"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Object.seal(obj)"}]},{type:"text",value:": like 1. but every existing prop has configurable set to false"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Object.freeze(obj)"}]},{type:"text",value:": like 2. but every prop has writable set to false"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Prototype"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Objects in js hae an internal property "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"[[Prototype]]"}]},{type:"text",value:" that links them to another object."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Whenever a property is looked-up in an object, if it not present it is looked up recursively in the prototype chain and if present it is returned otherwise undefined is the reuslt of the look up."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Similarly in a for..in iteration all the prop in the chain are returned."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"At the top of most chains is Object.prototype, this object includes most common util methods."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Shadowing"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Whenever a prop that is already defined on the prototype chain is defined on an object the following occurs:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If that prop is marked as "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"writable: false"}]},{type:"text",value:" an error is thrown is strict or is silently ignored."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If that prop is a mutator (set) the function is "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"always"}]},{type:"text",value:" callled no shadowing occurs."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"if the previous conditions are not met, the object is successfully added to the object and it "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"shadows"}]},{type:"text",value:" the prop defined in the prototype chain."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},excerpt:"Js is a object-oriented language where objects can be connect and share properties.\nObjects can be constructed using  constructor  functions. A…",frontmatter:{date:"2018-05-27T21:27:55.477Z",path:"/p/js/object-and-types",title:"Object and Types",section:"js",slug:"object-and-types"}}},pathContext:{}}}});
//# sourceMappingURL=path---p-js-object-and-types-28f450c26a561201bbf4.js.map