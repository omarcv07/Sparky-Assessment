module.exports = {
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
    ],
    moduleNameMapper: {
      // Handle absolute imports in Remix
      '~/(.*)': `${__dirname}/app/$1`,
    },
    setupFilesAfterEnv: [`${__dirname}/jest.setup.js`],
    testPathIgnorePatterns: [
      `${__dirname}/node_modules/`,
      `${__dirname}/.cache/`,
      `${__dirname}/build/`,
    ],
    testEnvironment: 'jsdom',
    transform: {
      // Use @swc/jest to transpile tests
      // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
      '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest',
      '^.+\\.(css|scss|sass|less)$': 'jest-preview/transforms/css',
      '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
        'jest-preview/transforms/file',
    },
    transformIgnorePatterns: ['/node_modules/'],
  };