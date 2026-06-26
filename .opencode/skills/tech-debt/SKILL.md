---
name: tech-debt
description: Identify and prioritize technical debt across the codebase
license: MIT
---

## What this skill does

Analyzes source code to identify technical debt, classify its severity, and suggest actionable remediation steps.

## When to use

Use this when the task involves:

- Code review focused on maintainability
- Sprint planning for refactoring
- Pre-release quality assessment
- Onboarding to an unfamiliar module

## Debt categories

### 1. Dead code

- Unused functions, classes, or variables
- Commented-out code blocks
- Unreachable branches
- Orphaned exports/imports

### 2. Duplication

- Copy-pasted logic across files or modules
- Repeated constants or magic values
- Similar validation patterns not extracted

### 3. Architecture violations (🔴)

- Domain layer importing infrastructure (violates Dependency Rule)
- Module importing another module's infrastructure directly
- Business logic leaking into controllers or UI components

### 4. Type & safety issues

- `any` types used instead of explicit types
- Missing null/undefined checks
- Unsafe type assertions (`as Type`)
- `try/catch` with empty catch blocks

### 5. Test debt

- Missing tests for new code
- Tests that test implementation instead of behavior
- Flaky or non-deterministic tests
- Tests with insufficient mocking (hitting real DB/network)

### 6. Documentation debt

- Public APIs without JSDoc or type documentation
- Outdated comments that contradict the code
- Missing README updates after feature changes

## Severity classification

| Level     | Label        | Action                  |
| --------- | ------------ | ----------------------- |
| 🔴 High   | Blocking     | Fix before next release |
| 🟡 Medium | Should fix   | Schedule in next sprint |
| 🔵 Low    | Nice to have | Add to backlog          |

## Output format

For each item found, provide:

1. **Category** and **severity**
2. **File** and **line** reference
3. **Description** of the issue
4. **Suggested fix** (1-2 sentences)
5. **Estimated effort** (minutes/hours)

End with a summary table grouped by severity.
