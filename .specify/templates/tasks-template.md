# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 3.1: Setup
- [ ] T001 Create React TypeScript project structure per implementation plan
- [ ] T002 Initialize project with Vite, React, TypeScript dependencies
- [ ] T003 [P] Configure ESLint, Prettier, and TypeScript strict mode
- [ ] T004 [P] Setup accessibility testing tools (axe-core, jest-axe)
- [ ] T005 [P] Configure performance monitoring (Web Vitals, bundle analyzer)

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [ ] T006 [P] Behavior test for user interactions using React Testing Library
- [ ] T007 [P] Accessibility tests for keyboard navigation and screen readers
- [ ] T008 [P] Visual regression tests for UI components
- [ ] T009 [P] Performance tests for Core Web Vitals compliance
- [ ] T010 [P] Mobile responsiveness tests for touch interactions

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [ ] T011 [P] React components with TypeScript interfaces in src/components/
- [ ] T012 [P] Accessible form components with ARIA labels and validation
- [ ] T013 [P] Mobile-first responsive layouts with CSS-in-JS/CSS Modules
- [ ] T014 [P] State management with Context API or Redux Toolkit
- [ ] T015 API integration with proper error handling and loading states
- [ ] T016 Input validation with user-friendly error messages
- [ ] T017 Semantic HTML structure for screen reader compatibility

## Phase 3.4: Integration
- [ ] T018 Connect components to state management
- [ ] T019 Implement routing with React Router
- [ ] T020 Add error boundaries for graceful error handling
- [ ] T021 Integrate performance monitoring and analytics
- [ ] T022 Setup progressive web app features (if applicable)

## Phase 3.5: Polish
- [ ] T023 [P] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] T024 [P] Mobile device testing (iOS Safari, Android Chrome)
- [ ] T025 Performance optimization (code splitting, lazy loading)
- [ ] T026 [P] Accessibility audit with automated and manual testing
- [ ] T027 [P] Update documentation with component usage examples
- [ ] T028 Bundle size optimization and analysis
- [ ] T029 Final UX review and usability testing

## Dependencies
- Setup (T001-T005) before tests (T006-T010)
- Tests (T006-T010) before implementation (T011-T017)
- Core implementation (T011-T017) before integration (T018-T022)
- Integration before polish (T023-T029)
- T014 (state management) blocks T018 (component integration)

## Parallel Example
```
# Launch T006-T010 together:
Task: "Behavior test for user interactions using React Testing Library"
Task: "Accessibility tests for keyboard navigation and screen readers"
Task: "Visual regression tests for UI components"
Task: "Performance tests for Core Web Vitals compliance"
Task: "Mobile responsiveness tests for touch interactions"
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each task
- Avoid: vague tasks, same file conflicts

## Task Generation Rules
*Applied during main() execution*

1. **From Contracts**:
   - Each contract file → contract test task [P]
   - Each endpoint → implementation task
   
2. **From Data Model**:
   - Each entity → model creation task [P]
   - Relationships → service layer tasks
   
3. **From User Stories**:
   - Each story → integration test [P]
   - Quickstart scenarios → validation tasks

4. **Ordering**:
   - Setup → Tests → Models → Services → Endpoints → Polish
   - Dependencies block parallel execution

## Validation Checklist
*GATE: Checked by main() before returning*

- [ ] All contracts have corresponding tests
- [ ] All entities have model tasks
- [ ] All tests come before implementation
- [ ] Parallel tasks truly independent
- [ ] Each task specifies exact file path
- [ ] No task modifies same file as another [P] task