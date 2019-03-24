module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js}?(x)',
    '!<rootDir>/test/**/*.{ts,js}?(x)'
  ],
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  }
};
