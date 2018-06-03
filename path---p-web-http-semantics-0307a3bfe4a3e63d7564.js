webpackJsonp([67469710283091],{504:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HTTP is a "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"stateless"}]},{type:"text",value:" protocol used to transfer informations in a server-client model.\nIt defines a set of methods for CRUD operations and additional methods\nand is the main protocol that powers the web."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Methods"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"GET: Retrieve the current rappresentation of a resource"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"HEAD: Same as get but without body"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"POST: Perform resource-specific processing on the request payload."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"OPTIONS: used to request communications options for the target source"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"PUT: Replace all reppresentation of the resource with the content of body"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"DELETE: Remove all reppresentation of the resource on the server"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"TRACE: Request a loop-back of the request message."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"PATCH: (defined in RFC 5789 not in  RFC 7231) Partial modification of a\nremote resource."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"All general-purpose servers MUST support the methods GET and HEAD."}]},{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"All other methods are OPTIONAL."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Safe Methods"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Methods that are read-only: GET, HEAD, OPTIONS and TRACE.\nreasonable use of a safe method is not expected to cause any harm, loss of\nproperty, or unusual burden on the origin server."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Idempotent Methods"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Multiple request using an idempotent  method should have the same effect for a single request."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Idempotent methods: Safe methods, DELETE and PUT."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Cacheable methods"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Request methods that can be stored for future use."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"GET, HEAD and POST."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Note: Most implementation do not support caching of POST."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Request Header Fields"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"HOST"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Provides the host and port from the server's uri.\nA Client "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"MUST"}]},{type:"text",value:" send a Host header field in "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"all"}]},{type:"text",value:" HTTP/1.1 request messages."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"http"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-http"]},children:[{type:"element",tagName:"code",properties:{className:["language-http"]},children:[{type:"text",value:"GET /api/resource/2 HTTP/1.1\n"},{type:"element",tagName:"span",properties:{className:["token","header-name","keyword"]},children:[{type:"text",value:"Host:"}]},{type:"text",value:" api-domain.com"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"ACCEPT"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Header field used to notify of the acceptable media types for the client"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"ACCEPT-CHARSET"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The acceptable charset of the textual response body for the client, generally set by user agents."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"ACCEPT-ENCODING"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The acceptable encoding to use in the response, generally set by user agents.\nA request without an Accept-Encoding header field implies that the\nuser agent has no preferences regarding content-codings."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"ACCEPT-LANGUAGE"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"specifies the preferred language for the response."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"REFERRER"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Set by user agents to specify the URI resource from which the request was made(used generally in ajax)."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"USER-AGENT"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Program that on behalf of the user request the data."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://tools.ietf.org/html/rfc7231"},children:[{type:"text",value:"RFC"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},excerpt:"HTTP is a  stateless  protocol used to transfer informations in a server-client model.\nIt defines a set of methods for CRUD operations and additional…",frontmatter:{date:"May 27, 2018",path:"/p/web/http-semantics",title:"Http Semantics",section:"web",slug:"http-semantics"}}},pathContext:{}}}});
//# sourceMappingURL=path---p-web-http-semantics-0307a3bfe4a3e63d7564.js.map