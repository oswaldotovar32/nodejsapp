import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/src/test/",
        "<rootDir>/dist/"
    ],
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
};

export default config;