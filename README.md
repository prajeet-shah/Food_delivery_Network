# Namaste React

# parcel

- Dev build
- Local server
- HMR(Hot Module Replacement)
- using File watching Algorithm written in C++
- caching - Faster build
- Image Optimization
- minification of files
- Buldling
- compressing
- consistent Hashing
- code spilting
- Differential bundling (support older browsers)
- Diagonistic
- Error Handling
- HTTPs
- Tree shaking -> remove unused code
- Different dev and prod build


# Food ordering App Layout

/**
 * Header
 * -Logo
 * -NavItems
 *
 * Body
 * -Search
 * -Restaurant-container
 *  -Restaurantcard
 *   -Name , price , cuisine ,delivery time , rating
 * Footer
 * -copyright
 * -Links
 * -Address
 *
 *
 */


 # React Hooks
 - (Normal Js utility function)
 - UseState
 - UseEffect




# types of testings(developer)
- unit Testing
- Integration Testing
- End to End Testing - e2e Testings


# Setting up Testing in our app
- Install React Testing library
- install Jest
- Install babel dependencies
- configure babel (babel.config.js is created)
- configure parcel config file to disable default babel transpilation(.parcel is created)
- Jest configuration  => npx jest --init (jest.config.js is created)
- Install jsdom library
- install @babel/preset-react
- add @babel/preset-react to babel.config.js to make jsx work in test cases.
- install @testing-library/jest-dom

# toBeInTheDocument expects a single HTMLElement 
- if expects contains more than one element then it should be iterate using
- map or forEach method to each element

# Testing in Header component
- 1. Error with direct image
- because JavaScript and Babel don't know how to process image files (like .png) directly
- solution: add this file to the root of the project __mocks__/fileMock.js (fileMock.js is created)
- include module.exports = 'test-file-stub'; int the fileMock.js
- update the jest.config.js file with 
-  moduleNameMapper: {
-    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
-  },

