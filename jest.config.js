module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  resetMocks: true,
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};