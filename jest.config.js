module.exports = {
  collectCoverage: true,
  coverageReporters: ["html", "json", "lcov", "text"],
  moduleFileExtensions: ["ts", "js"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
  },
  testEnvironment: "node",
  testRegex: "/tests/.*.spec.ts",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
}
