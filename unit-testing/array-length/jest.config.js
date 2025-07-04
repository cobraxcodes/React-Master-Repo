module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // if you use aliases like @/components in vite.config.js, map them here
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};
