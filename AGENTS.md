# AGENTS.md - Guidelines for Agentic Coding Agents

This file provides instructions for AI coding agents operating in this repository.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Development Commands](#development-commands)
3. [Code Style Guidelines](#code-style-guidelines)
4. [Best Practices](#best-practices)
5. [Testing Guidelines](#testing-guidelines)

## Project Overview
This is a web development project located in the TATU directory. The project appears to be in its initial stages with no existing codebase.

## Development Commands

### Installation
```bash
# Install dependencies (adjust based on project type)
npm install        # For Node.js projects
pip install -r requirements.txt  # For Python projects
```

### Build Commands
```bash
# For web projects
npm run build      # Common build command for JS/TS projects
npm run dev        # Development server
```

### Linting Commands
```bash
# Common linting commands
npm run lint       # Run linter
npm run lint:fix   # Auto-fix linting issues
```

### Testing Commands
```bash
# Run all tests
npm test
npm run test

# Run a single test (Jest example)
npm test -- --testNamePattern="specific test name"
npm test -- -t "specific test name"

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# For other testing frameworks
# Vitest: nvitest run --reporter=verbose
# Mocha: npm test -- --grep "specific test"
```

### Type Checking
```bash
npm run typecheck  # TypeScript type checking
npm run flow       # Flow type checking
```

## Code Style Guidelines

### General Principles
- Write clear, readable code
- Follow existing patterns in the codebase
- Prioritize maintainability over cleverness
- Comment complex logic, not obvious code

### Imports
- Group imports: external libraries first, then internal modules
- Sort imports alphabetically within each group
- Use absolute paths for internal modules when configured
- Avoid wildcard imports; import only what's needed

### Formatting
- Use 2 spaces for indentation (not tabs)
- Limit line length to 80-100 characters
- Add trailing commas in multi-line objects/arrays
- Use consistent quote style (prefer single quotes)
- No unused variables or imports
- Remove commented-out code before committing

### Types (TypeScript/Flow)
- Define explicit types for function parameters and return values
- Use interfaces for object shapes, types for unions/complex types
- Avoid `any` type; use `unknown` when type is uncertain
- Use `readonly` for immutable arrays/objects
- Prefer type inference when types are obvious

### Naming Conventions
- **Files**: kebab-case (e.g., `user-profile.component.ts`)
- **Components/Classes**: PascalCase (e.g., `UserProfileComponent`)
- **Functions/Variables**: camelCase (e.g., `getUserProfile`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_USERS`)
- **Private members**: `_prefix` (if language supports privacy)
- **Boolean variables**: Use `is`, `has`, `should` prefixes (e.g., `isLoading`)

### Error Handling
- Handle promises with `.catch()` or try/catch for async/await
- Don't swallow errors; log them appropriately
- Throw meaningful error messages
- Validate inputs at function boundaries
- Use custom error types for domain-specific errors

### Comments
- Explain why, not what
- Keep comments up-to-date when code changes
- Use TODO comments with GitHub usernames: `// TODO(@username): description`
- Avoid commented-out code; use version control instead

### Git Practices
- Write clear, descriptive commit messages
- Reference issues in commit messages when applicable
- Keep commits atomic and focused
- Pull before pushing to avoid conflicts

## Best Practices

### Security
- Never hardcode secrets or API keys
- Validate and sanitize user inputs
- Use environment variables for configuration
- Implement proper authentication and authorization

### Performance
- Lazy-load non-critical resources
- Optimize images and assets
- Minimize re-renders in frontend frameworks
- Use efficient algorithms and data structures

### Accessibility
- Follow WCAG guidelines
- Use semantic HTML elements
- Ensure proper color contrast
- Add alt text to images
- Ensure keyboard navigability

### Testing
- Write unit tests for business logic
- Test edge cases and error conditions
- Mock external dependencies
- Aim for meaningful test coverage, not just line coverage
- Tests should be independent and deterministic

## Language-Specific Guidelines

### JavaScript/TypeScript
- Use `const` and `let`; avoid `var`
- Prefer arrow functions for callbacks
- Use template literals for string concatenation
- Destructure objects and arrays when appropriate
- Use optional chaining (`?.`) and nullish coalescing (`??`)

### HTML/CSS
- Use semantic HTML5 elements
- Follow BEM or similar CSS methodology
- Use CSS custom properties for theming
- Avoid !important unless absolutely necessary
- Mobile-first responsive design

### Python (if applicable)
- Follow PEP 8 style guide
- Use docstrings for public functions and classes
- Prefer list comprehensions over map/filter
- Use virtual environments for dependencies
- Follow the Zen of Python

## Troubleshooting
- Check console/logs for errors
- Verify environment variables are set correctly
- Ensure dependencies are installed and up to date
- Check for browser compatibility issues
- Validate API endpoints and responses

## When in Doubt
1. Look at existing code for patterns
2. Ask for clarification if guidelines are unclear
3. Prioritize simplicity and readability
4. Ensure changes are well-tested
5. Follow the principle of least surprise