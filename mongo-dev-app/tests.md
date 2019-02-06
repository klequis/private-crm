# Setting up Tests

## Test Frameworks & Utilities used
- Jest - Jest is testing framework (by Facebook). Jest also provides assertion library.
- Enzyme - Javascript testing utility for React (by Airbnb).
- raf - requestAnimationFrame polyfill for node and the browser.
- Sinon: Standalone test spies, stubs and mocks for JavaScript.

## Install Test Frameworks & Tools

## Install Jest
yarn add jest --dev

### Install specific version
yarn add jest@x.x.x --dev

## Configure Jest

- Add the following to scripts in package.json
```
"scripts": {
  "test": "jest"
}
```

- Add the directories where source files are located
(without this, you'll hit "Cannot find module from test file error)

```
"jest": {
  "moduleDirectories": [
    "src",
    "test"
  ],
}
```
-- To address the following error
Erro: React testing error: It looks like you called `mount()` without a global document being loaded
Since enzyme's mount API requires a DOM, JSDOM is required in order to use mount if you are not
already in a browser environment (ie, a Node environment).

"jest": {
  "testEnvironment": "jsdom"
}

## Create Tests
- Create a tests directory under src directory
- Create a file named xxx.test.js

### Sample Test
~~~~
  const add = (a, b) => a + b;

  test ('should add two numbers', () => {
	  const result = add(3, 4);
    expect(result).toBe(7);
  }
~~~~

## Run Tests
yarn run test

(or)

yarn test

## Run tests in watch mode - runs the tests immediately when changes are made
yarn test -- --watch

Or, it can be configured in package-json under scripts (Not recommended)
"test": "jest --watch"

## For UI Testing

## Install Enzyme
yarn add enzyme@3.3.0 enzyme-adapter-react-16@1.1.1

## Install raf
yarn add raf@3.4.0

## Config Enzyme to support v16 of React

- Create setupTests.js in tests directory

```
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
})
```
## Config Jest to work with Enzyme

There are two ways, we could configure Jest to use enzyme

Method 1:
- Add the following to package.json

```
  "jest": {
    "setupFiles": [
      "raf/polyfill",
      "<rootDir>/src/tests/setupTests.js"
    ]
```
Method 2:
- Add jest.config.json at the root level

```
 {
    "setupFiles": [
      "raf/polyfill",
      "<rootDir>/src/tests/setupTests.js"
    ]
 }
```
- Change package.json -> under scripts
```
"scrpts": {
  "test": "jest --config=jest.config.json"
}
```

## Install enyzme-to-json
yarn add enzyme-to-json

## Configure Jest for enzyme-to-json

Method 1: Add the following to package.json

  "jest": {
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],
  }

Method 2: Add the following to jest.config.json at the root level

{
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],
}

## Setup test for components



