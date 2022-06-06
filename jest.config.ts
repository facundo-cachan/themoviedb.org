import nextJest from 'next/jest'
import { defaults } from 'jest-config'
import type { Config } from '@jest/types'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig: Config.InitialOptions = {
  verbose: true,
  rootDir: '.',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/$1',
    '^components': '<rootDir>/components/',
    '^context/(.*)$': '<rootDir>/context/$1',
    '^lib/(.*)$': '<rootDir>/lib/$1',
    '^pages/(.*)$': '<rootDir>/pages/$1',
    '^utils/(.*)$': '<rootDir>/utils/$1',
    '^styles/(.*)$': '<rootDir>/styles/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.ts?'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/jest.setup.js',
    '/jest.config.ts',
  ],
  modulePathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [
    '<rootDir>/[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/cypress/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
    './pages/': {
      branches: 40,
      statements: 40,
    },
  },
}

export default createJestConfig(customJestConfig)
