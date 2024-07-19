// jest.config.js
// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(css|scss|sass)$": "jest-transform-stub",
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(svg|png|jpg|jpeg|gif)$": "<rootDir>/fileMock.js",
  },
};
