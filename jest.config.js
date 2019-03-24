module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,js}?(x)',
    '!<rootDir>/src/**/*.{spec,test}.{ts,js}?(x)'
  ],
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  }
};
