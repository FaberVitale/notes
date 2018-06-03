webpackJsonp([0xc50ab8b56c2f],{505:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Http is a "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"stateless"}]},{type:"text",value:' application level protocol that uses a request-response model.\nIt operates by\nexchanging messages across a reliable transport(TCP) or\nsession-layer "connection".  '}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"HTTP Client"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"a program that establishes a connection to a server for the purpose of\nsending one or more HTTP requests.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"HTTP Server"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"a program that accepts connections in order to service HTTP requests by sending\nHTTP responses."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Intermediaries"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HTTP enables the use of intermediaries to satisfy requests through a\nchain of connections.  There are three common forms of HTTP\nintermediary: proxy, gateway, and tunnel."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"proxy"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:'A "proxy" is a message-forwarding agent that is selected by the\nclient, usually via local configuration rules, to receive requests\nfor some type(s) of absolute URI and attempt to satisfy those\nrequests via translation through the HTTP interface.'}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"reverse-proxy or gateway"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"An intermediary server that acts as server for the client forwarding requests to\nanother server not known to the client.\nUsed for perfomance, encapsulation."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"tunnel"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"a blind relay between two connections without\nchanging the messages.  Once active, a tunnel is not considered a\nparty to the HTTP communication."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Message format"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"  HTTP-message   = start-line\n                  *( header-field CRLF )\n                  CRLF\n                  [ message-body ]"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Start Line"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"request-line: if it a request"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"status-line: if it is a response."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Request Line"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"request-line   = method SP request-target SP HTTP-version CRLF"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"method: a valid http method,"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"SP: a single white space "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"\\\\u0020"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"request-target: relative, absolute url, asterick or, authority part of url "}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"HTTP-version: example: HTTP/1.1"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Status Line"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"status-line = HTTP-version SP status-code SP reason-phrase CRLF"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"status-code: 3 digits"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"reason-phrase  = *( HTAB / SP / VCHAR / obs-text )"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Reason phrase is used to provide a description  to the status code.\nexamples: 200 Ok, 403 Forbidden, 429 Too many Requests..."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Header-field"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:'Each header field consists of a case-insensitive field name followed\nby a colon (":"), optional leading whitespace, the field value, and\noptional trailing whitespace.'}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:' field-name ":" *(x20) field-value *(x20)'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There's no set field order and the new field names can be defined."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:" HTTP does not place a predefined limit on the length of each header\nfield or on the length of the header section as a whole Various ad hoc limitations on individual header\nfield length are found in practice."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A server that receives a request header field, or set of fields,\nlarger than it wishes to process MUST respond with an appropriate 4xx\n(Client Error) status code.  Ignoring such header fields would\nincrease the server's vulnerability to request smuggling attacks."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Message-body"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The message body (if any) of an HTTP message is used to carry the\npayload body of that request or response.  The message body is\nidentical to the payload body unless a transfer coding has been\napplied."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Request:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:" The presence of a message body in a request is signaled by a\n"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Content-Length"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Transfer-Encoding"}]},{type:"text",value:" header field."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Response:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:" The presence of a message body in a response depends on both the\nrequest method to which it is responding and the response status code.\nHEAD responses do not have body"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Common Header Fields"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Transfer-Encoding"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The Transfer-Encoding header field lists the transfer coding names\ncorresponding to the sequence of transfer codings that have been (or\nwill be) applied to the payload body in order to form the message\nbody. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"example: gzip, chunked"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"indicates that the payload body has been compressed using the gzip\ncoding and then chunked using the chunked coding while forming the\nmessage body."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Content Length"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When a message does not have a Transfer-Encoding header field, a\nContent-Length header field can provide the anticipated size, as a\ndecimal number of octet."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://tools.ietf.org/html/rfc7230"},children:[{type:"text",value:"specification"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},excerpt:"Http is a  stateless  application level protocol that uses a request-response model.\nIt operates by\nexchanging messages across a reliable transport…",frontmatter:{date:"May 27, 2018",path:"/p/web/http-syntax",title:"Http Syntax",section:"web",slug:"http-syntax"}}},pathContext:{}}}});
//# sourceMappingURL=path---p-web-http-syntax-5415e38299c1ee137180.js.map