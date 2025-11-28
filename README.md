# LeetCode Problems

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-green.svg)](https://nodejs.org/)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

A comprehensive collection of high-performance solutions to LeetCode algorithmic problems. This repository demonstrates mastery of data structures, algorithms, and software engineering best practices through clean, well-documented TypeScript implementations.

## Purpose

This repository serves as both a learning resource and a showcase of problem-solving skills for technical interviews. Each solution exemplifies:

- **Production-Quality Code**: Clean, readable implementations following industry standards
- **Multiple Approaches**: Various solutions with detailed complexity trade-off analysis
- **Comprehensive Documentation**: Clear problem descriptions, constraints, and solution explanations
- **Test-Driven Development**: Full test coverage using Node.js native test runner
- **Performance Optimization**: Focus on optimal time and space complexity

## Problem Statistics

- **Total Problems Solved**: 4
- **Easy**: 3 | **Medium**: 1 | **Hard**: 0

For a complete list of problems, see the [Problems Index](./problems/README.md).

## Features

- **TypeScript Implementation** - Full type safety and modern ECMAScript features
- **Multiple Solution Approaches** - Compare different algorithms and their trade-offs
- **Complexity Analysis** - Detailed time and space complexity for each approach
- **Comprehensive Test Coverage** - Edge cases, boundary conditions, and performance tests
- **Code Quality Tools** - ESLint and Prettier for consistent, maintainable code
- **Professional Documentation** - Clear explanations suitable for technical interviews

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Yarn](https://yarnpkg.com/) or npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SamehElalfi/leetcode-problems.git
   cd leetcode-problems
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Run all tests**
   ```bash
   yarn test
   # or
   npm test
   ```

4. **Run linting and formatting checks**
   ```bash
   yarn eslint
   yarn prettier
   # or
   npm run eslint
   npm run prettier
   ```

### Running Individual Problem Tests

To test a specific problem, use the test name pattern:

```bash
yarn test --test-name-pattern="1480"
# or
npm test -- --test-name-pattern="1480"
```

## Repository Structure

```
leetcode-problems/
├── problems/               # All problem solutions
│   ├── README.md          # Problems index and categorization
│   └── [number]-[name]/   # Individual problem directory
│       ├── README.md      # Problem description and analysis
│       ├── solution.ts    # Implementation(s)
│       └── solution.test.ts  # Test cases
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── eslint.config.mts      # ESLint configuration
└── README.md             # This file
```

## Problem Template

Each problem follows a consistent structure:

- **Problem Statement**: Clear description with constraints and examples
- **Multiple Approaches**: Different solutions with complexity analysis
- **Implementation**: Clean, well-documented TypeScript code
- **Test Suite**: Comprehensive test cases covering edge cases
- **Complexity Table**: Visual comparison of time/space trade-offs
- **Performance Metrics**: Real LeetCode submission results

See [Problem #1480 - Running Sum of 1d Array](./problems/1480-running-sum-of-1d-array/) for a complete example.

## Available Scripts

| Script | Description |
|--------|-------------|
| `yarn test` | Run all test suites |
| `yarn eslint` | Check code for linting issues |
| `yarn eslint:fix` | Automatically fix linting issues |
| `yarn prettier` | Check code formatting |
| `yarn prettier:fix` | Automatically format code |
| `yarn release` | Create a new release version |

## Contributing

This is primarily a personal learning project, but suggestions and feedback are welcome! If you notice an optimization or alternative approach, feel free to open an issue for discussion.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Author

**Sameh A. Elalfi**
- Email: sameh.elalfi.mail@gmail.com
- GitHub: [@SamehElalfi](https://github.com/SamehElalfi)

---

If you find this repository helpful, please consider giving it a star!
