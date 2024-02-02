- https://callstack.github.io/react-native-testing-library/docs/getting-started
- https://docs.expo.dev/get-started/create-a-project/
- https://dev.to/steveruizok/jest-and-esm-cannot-use-import-statement-outside-a-module-4mmj
- https://docs.expo.dev/develop/unit-testing/

Steps:
1. `npx create-expo-app operator-client-native-poc`
2. `cd operator-client-native-poc`
3. `npx expo install react-native-web react-dom @expo/metro-runtime`
4. `npm install --save-dev @testing-library/jest-native @testing-library/react-native babel-jest  jest-expo`
5. Added setup-jest.js
```
import '@testing-library/react-native/extend-expect';
```
6. Added jest config to package.json
```JSON
{
    "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-redux)"
    ],
    "transform": {
      "^.+\\.(js|jsx|ts|tsx|mjs)$": "babel-jest"
    },
    "setupFilesAfterEnv": [
      "./setup-jest.js"
    ]
  }
}
```
7. `npm install @reduxjs/toolkit react-redux`
8. Added React Native components
9. Added test files