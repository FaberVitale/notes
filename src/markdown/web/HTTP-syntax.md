---
path: /p/web/http-syntax
section: web
date: 2018-05-27T21:27:55.477Z
title: Http Syntax
slug: http-syntax
---

Http is a **stateless** application level protocol that uses a request-response model.
It operates by
exchanging messages across a reliable transport(TCP) or
session-layer "connection".  

### HTTP Client
a program that establishes a connection to a server for the purpose of
sending one or more HTTP requests.  

### HTTP Server
a program that accepts connections in order to service HTTP requests by sending
HTTP responses.

### Intermediaries

HTTP enables the use of intermediaries to satisfy requests through a
chain of connections.  There are three common forms of HTTP
intermediary: proxy, gateway, and tunnel.

### proxy

A "proxy" is a message-forwarding agent that is selected by the
client, usually via local configuration rules, to receive requests
for some type(s) of absolute URI and attempt to satisfy those
requests via translation through the HTTP interface.

### reverse-proxy or gateway

An intermediary server that acts as server for the client forwarding requests to
another server not known to the client.
Used for perfomance, encapsulation.

### tunnel
a blind relay between two connections without
changing the messages.  Once active, a tunnel is not considered a
party to the HTTP communication.

## Message format

```
  HTTP-message   = start-line
                  *( header-field CRLF )
                  CRLF
                  [ message-body ]
```

### Start Line
  - request-line: if it a request
 - status-line: if it is a response.

#### Request Line

```
request-line   = method SP request-target SP HTTP-version CRLF
```

 - method: a valid http method,
 - SP: a single white space `\\u0020`
 - request-target: relative, absolute url, asterick or, authority part of url 
 - HTTP-version: example: HTTP/1.1

#### Status Line

```
status-line = HTTP-version SP status-code SP reason-phrase CRLF
```
 - status-code: 3 digits
 - reason-phrase  = *( HTAB / SP / VCHAR / obs-text )

Reason phrase is used to provide a description  to the status code.
examples: 200 Ok, 403 Forbidden, 429 Too many Requests...

### Header-field
Each header field consists of a case-insensitive field name followed
by a colon (":"), optional leading whitespace, the field value, and
optional trailing whitespace.

```
 field-name ":" *(x20) field-value *(x20)
```

There's no set field order and the new field names can be defined.

 HTTP does not place a predefined limit on the length of each header
field or on the length of the header section as a whole Various ad hoc limitations on individual header
field length are found in practice.

A server that receives a request header field, or set of fields,
larger than it wishes to process MUST respond with an appropriate 4xx
(Client Error) status code.  Ignoring such header fields would
increase the server's vulnerability to request smuggling attacks.

## Message-body

The message body (if any) of an HTTP message is used to carry the
payload body of that request or response.  The message body is
identical to the payload body unless a transfer coding has been
applied.

 - Request:

     The presence of a message body in a request is signaled by a
  ```Content-Length``` or ```Transfer-Encoding``` header field.

 - Response:

     The presence of a message body in a response depends on both the
     request method to which it is responding and the response status code.
     HEAD responses do not have body

## Common Header Fields

### Transfer-Encoding
The Transfer-Encoding header field lists the transfer coding names
corresponding to the sequence of transfer codings that have been (or
will be) applied to the payload body in order to form the message
body. 

example: gzip, chunked

indicates that the payload body has been compressed using the gzip
coding and then chunked using the chunked coding while forming the
message body.

### Content Length

When a message does not have a Transfer-Encoding header field, a
Content-Length header field can provide the anticipated size, as a
decimal number of octet.

## Reference
* [specification](https://tools.ietf.org/html/rfc7230)