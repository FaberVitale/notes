---
path: /p/web/http-semantics
section: web
date: 2018-05-27T21:27:55.477Z
title: Http Semantics
slug: http-semantics
---

HTTP is a *stateless* protocol used to transfer informations in a server-client model.
It defines a set of methods for CRUD operations and additional methods
and is the main protocol that powers the web.

## Methods

 - GET: Retrieve the current rappresentation of a resource
 - HEAD: Same as get but without body
 - POST: Perform resource-specific processing on the request payload.
 - OPTIONS: used to request communications options for the target source
 - PUT: Replace all reppresentation of the resource with the content of body
 - DELETE: Remove all reppresentation of the resource on the server
 - TRACE: Request a loop-back of the request message.
 - PATCH: (defined in RFC 5789 not in  RFC 7231) Partial modification of a
 remote resource.

**All general-purpose servers MUST support the methods GET and HEAD.** 

**All other methods are OPTIONAL.**

### Safe Methods

Methods that are read-only: GET, HEAD, OPTIONS and TRACE.
reasonable use of a safe method is not expected to cause any harm, loss of
property, or unusual burden on the origin server.

### Idempotent Methods

Multiple request using an idempotent  method should have the same effect for a single request.

Idempotent methods: Safe methods, DELETE and PUT.

### Cacheable methods

Request methods that can be stored for future use.

GET, HEAD and POST.

Note: Most implementation do not support caching of POST.


## Request Header Fields

### HOST

Provides the host and port from the server's uri.
A Client **MUST** send a Host header field in **all** HTTP/1.1 request messages.

```http
GET /api/resource/2 HTTP/1.1
Host: api-domain.com
```

### ACCEPT

Header field used to notify of the acceptable media types for the client

###  ACCEPT-CHARSET

The acceptable charset of the textual response body for the client, generally set by user agents.

### ACCEPT-ENCODING

The acceptable encoding to use in the response, generally set by user agents.
A request without an Accept-Encoding header field implies that the
user agent has no preferences regarding content-codings.

### ACCEPT-LANGUAGE
specifies the preferred language for the response.

### REFERRER

Set by user agents to specify the URI resource from which the request was made(used generally in ajax).

### USER-AGENT

Program that on behalf of the user request the data.

## Reference

*  [RFC](https://tools.ietf.org/html/rfc7231)
