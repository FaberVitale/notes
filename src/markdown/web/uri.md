---
path: /p/web/uri
section: web
date: 2018-05-27T21:27:55.477Z
title: URI (Uniform resource identifier)
slug: uri
--- 

A string that identifies a resource according to a schema.
super-type of:
 - URL: defines the means to access a resource(e.g webisite page).
 - URN: defines a unique resource in a namespace(e.g. isbn)

## Syntax
```
ALPHA = a-z / A-Z
DIGIT = 0-9

```
### Reserved Characters:
```
  reserved    = gen-delims / sub-delims

  gen-delims  = ":" / "/" / "?" / "#" / "[" / "]" / "@"

  sub-delims  = "!" / "$" / "&" / "'" / "(" / ")"
              / "*" / "+" / "," / ";" / "="
```

Characters used to delimit parts of a URI and shouldnt be encoded,
if used as delimiters.
Application should (percent)-encode these characters, unless allowed by the uri scheme.

### Unreserved Characters:
```
unreserved = a-z / A-Z / 0-9 / "-" / "." / "_" / "~"
```

Characters allowed in an uri that do not have a special purpose

### URI Parts

```
  foo://example.com:8042/over/there?name=ferret#nose
  \_/   \______________/\_________/ \_________/ \__/
  |           |            |            |        |
  scheme     authority       path        query   fragment
```

### Scheme

```
scheme      = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
```

defines the specification of the uri, schemes should be registerd to IANA.

### Authority

```
authority = [ userinfo "@" ] host [ ":" port ]
```
the authority component is preceded by a double slash ("//") and is
terminated by the next slash ("/"), question mark ("?"), or number
sign ("#") character, or by the end of the URI.

#### userinfo

The userinfo subcomponent may consist of a user name and, optionally,
scheme-specific information about how to gain authorization to access the resource.
The user information, if present, is followed by a commercial at-sign ("@") that delimits it from the host.

#### host
```
host = IP-literal / IPv4address / reg-name
```
Name registered for DNS
```
reg-name    = *( unreserved / pct-encoded / sub-delims )
```

#### port

```
port = DIGIT
```
a sequence of digits that defines the socket port

### Path
The path component contains data, usually organized in hierarchical
form, that, along with data in the non-hierarchical query component, 
serves to identify a resource within the scope of the
URI's scheme and naming authority (if any).  The path is terminated
by the first question mark ("?") or number sign ("#") character, or
by the end of the URI.

```
  path          = path-abempty    ; begins with "/" or is empty
                / path-absolute   ; begins with "/" but not "//"
                / path-noscheme   ; begins with a non-colon segment
                / path-rootless   ; begins with a segment
                / path-empty      ; zero characters

  path-abempty  = *( "/" segment )
  path-absolute = "/" [ segment-nz *( "/" segment ) ]
  path-noscheme = segment-nz-nc *( "/" segment )
  path-rootless = segment-nz *( "/" segment )
  path-empty    = 0<pchar>

  segment       = *pchar
  segment-nz    = 1*pchar
  segment-nz-nc = 1*( unreserved / pct-encoded / sub-delims / "@" )
                ; non-zero-length segment without any colon ":"

  pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
```

A path consists of a sequence of path segments separated by a slash
("/") character.  A path is always defined for a URI, though the
defined path may be empty (zero length).  Use of the slash character
to indicate hierarchy is only required when a URI will be used as the
context for relative references.

###  Query

The query component contains non-hierarchical data that, along with
data in the path component, serves to identify a
resource within the scope of the URI's scheme and naming authority
(if any).  The query component is indicated by the first question
mark ("?") character and terminated by a number sign ("#") character
or by the end of the URI.

```
 query = *( pchar / "/" / "?" )
```

### Fragment

The fragment identifier component of a URI allows indirect
identification of a secondary resource by reference to a primary
resource and additional identifying information. 
Follows the path or query,separated by the ```"#"``` sign.

```
fragment = *( pchar / "/" / "?" )
```

## Reference

* [RFC](https://tools.ietf.org/html/rfc3986)