# Coding Standards

## General

###Trailing commas for objects
**no**
```js
const person = {
  first = 'Jo',
  last = 'Plum'
}
```
**yes**
```js
const person = {
  first = 'Jo',
  last = 'Plum',
}
```
### Use arrow functions unless have a reason for doing otherwise
**yes*8
```js
const handleChange = (event) => {
  props.handleChange = event.target.value
}
```

### No semicolons
**no**
```js
const x = 3;
```
**yes**
```js
const x = 3
```

### Signle Quotes
**no**
```js
const x = "some text"
```
**yes**
```js
const x = 'some text'
```

### Concantenation with backtick
**no**
```js
const first = 'Jo'
const last = 'Plum'
const fullName = first + ' ' + last
```
**yes**
```js
const first = 'Jo'
const last = 'Plum'
const fullName = `${first} ${last}`
```

## Variables
### Declaring variables
- Never use <code>var</code>
- Use <code>const</code> whenever possible or if in doubt
- Use <code>let</code> when needed
### Variable names
- useCamelCase
- Constants are upper case EDIT_MODE and if they have a string value the string is the camelCase of the constant name
```js
const EDIT_MODE = 'editMode
```
- Descriptive and kind of long is better than short and confusing
- Don't use abbreviations
```js
// evt is bad
const evt = event
```
- Unless they are very well known
```js
// ret for return
const ret = result
// bg for background if it is part of a compound word
const bgColor = 'green'
```
- Short variable names are ok in isolated cases if they are inside a single function. E.g., you are doing a multistep tranform
```js
const transform = (obj) => {
  const t0 = obj
  const t1 = t0 // some transformation of t0
  const t2 = t1 // some transformation of t1
  return t2
}
```
- Never pass non-descriptive variable names
- Constants that that are closely associated with a given module are declared in that module

## Default values
- <code>undefined</code> is the preferred default value

## Redux
### Action/Action Creator Names
Should try to follow the pattern
```js
[subject][Verb]Key
```
If it is a thunk/api request
```js
[subject][Verb][Request][Key]
```

E.g.,
- request action: userLoginRequest
- request action key: userLoginRequestKey
- action: userLogin
- action key: userLoginKey
- Actions that are the primary action called by a request success have the same name as the thunk without the 'request' postfix

### Selectors
- generally start with the prefix 'get'
- must explicitly return a default value


## imports - not being followed
Imports are organized as follows (in order)
- React imports ('react' * 'prop-types')
- Redux, Recompose, react-redux
- all other external libraries
under the comment /* User */
- All project internal imports
under the comment /* Dev */
- Imports that should/can be removed for production build / post-active development

## React Specific

> Use PropTypes to check for props. Do not write tests for them
> const styles = { ... } goes just above:
  > export default
  > mapStateToProps if present

# Database
> database names use camelCase just like JavaScript variables & functions



