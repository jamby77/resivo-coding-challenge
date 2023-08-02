const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  restoreMocks: true,
};

const esModules = ['lodash-es'].join('|');

module.exports = async () => ({
  // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules})`,
    '^.+\\.module\\.(css|sass|scss)$',
  ],
});
