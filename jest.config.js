export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};