### Escape?
- Escaping / sanitizing in a React app?


- clean store on logout
  - one suggestion is to set state to 'undefined' in some global reducer

- refresh tokens? Idea is to not let any one token live for too long

- should we set HttpOnly in the cookie?

- Keep cookie's expiration low to help protect against XSS (so what is low?)

## React Specific
- React has automatic escaping built-in but it is limited says [Avoiding XSS in React is Still Hard](https://medium.com/javascript-security/avoiding-xss-in-react-is-still-hard-d2b5c7ad9412)



