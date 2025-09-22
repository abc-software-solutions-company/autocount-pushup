# Tasks: Push-Up Auto-Counter Webapp

**Input**: Design documents from `/specs/001-i-want-to/`
**Prerequisites**: plan.md, research.md, data-model.md, contracts/, quickstart.md

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Single project**: `src/`, `tests/` at repository root
- React SPA structure with TypeScript

## Phase 3.1: Setup
- [ ] T001 Create React TypeScript project structure with Vite
- [ ] T002 Initialize project with React 18+, TypeScript 5.0+, Vite dependencies
- [ ] T003 [P] Configure ESLint, Prettier, and TypeScript strict mode
- [ ] T004 [P] Setup accessibility testing tools (axe-core, jest-axe)
- [ ] T005 [P] Configure performance monitoring (Web Vitals, bundle analyzer)
- [ ] T006 [P] Setup PWA configuration with service worker
- [ ] T007 [P] Configure TensorFlow.js and pose detection dependencies

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [ ] T008 [P] Contract test for WorkoutSession interface in tests/contracts/workout-session.test.ts
- [ ] T009 [P] Contract test for CameraDetection interface in tests/contracts/camera-detection.test.ts
- [ ] T010 [P] Contract test for UserPreferences interface in tests/contracts/user-preferences.test.ts
- [ ] T011 [P] Integration test for first-time user onboarding in tests/integration/onboarding.test.ts
- [ ] T012 [P] Integration test for workout session flow in tests/integration/workout-session.test.ts
- [ ] T013 [P] Integration test for manual count adjustment in tests/integration/manual-adjustment.test.ts
- [ ] T014 [P] Integration test for workout completion and history in tests/integration/workout-history.test.ts
- [ ] T015 [P] Accessibility tests for keyboard navigation in tests/accessibility/keyboard-navigation.test.ts
- [ ] T016 [P] Performance tests for Core Web Vitals compliance in tests/performance/web-vitals.test.ts
- [ ] T017 [P] Visual regression tests for UI components in tests/visual/component-snapshots.test.ts

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [ ] T018 [P] WorkoutSession model with validation in src/models/WorkoutSession.ts
- [ ] T019 [P] PushUpEvent model with timestamp handling in src/models/PushUpEvent.ts
- [ ] T020 [P] UserPreferences model with defaults in src/models/UserPreferences.ts
- [ ] T021 [P] ProgressStatistics model with calculations in src/models/ProgressStatistics.ts
- [ ] T022 [P] Achievement model with unlock logic in src/models/Achievement.ts
- [ ] T023 [P] IndexedDB storage service in src/services/StorageService.ts
- [ ] T024 [P] Camera detection service with TensorFlow.js in src/services/CameraDetectionService.ts
- [ ] T025 [P] Audio feedback service with Web Audio API in src/services/AudioService.ts
- [ ] T026 [P] Workout session manager service in src/services/WorkoutSessionService.ts
- [ ] T027 [P] User preferences service in src/services/UserPreferencesService.ts

## Phase 3.4: React Components
- [ ] T028 [P] Main App component with routing in src/components/App.tsx
- [ ] T029 [P] Landing page component with tutorial in src/components/pages/LandingPage.tsx
- [ ] T030 [P] Workout page component with camera feed in src/components/pages/WorkoutPage.tsx
- [ ] T031 [P] History page component with session list in src/components/pages/HistoryPage.tsx
- [ ] T032 [P] Settings page component with preferences in src/components/pages/SettingsPage.tsx
- [ ] T033 [P] Camera component with pose detection overlay in src/components/Camera.tsx
- [ ] T034 [P] Counter component with manual adjustment in src/components/Counter.tsx
- [ ] T035 [P] Timer component with duration display in src/components/Timer.tsx
- [ ] T036 [P] Session summary component in src/components/SessionSummary.tsx
- [ ] T037 [P] Progress chart component with statistics in src/components/ProgressChart.tsx

## Phase 3.5: UI Components and Styling
- [ ] T038 [P] Button component with accessibility in src/components/ui/Button.tsx
- [ ] T039 [P] Modal component with focus management in src/components/ui/Modal.tsx
- [ ] T040 [P] Loading spinner component in src/components/ui/LoadingSpinner.tsx
- [ ] T041 [P] Error boundary component in src/components/ui/ErrorBoundary.tsx
- [ ] T042 [P] Toast notification component in src/components/ui/Toast.tsx
- [ ] T043 [P] Mobile-first CSS styles with CSS Modules in src/styles/
- [ ] T044 [P] Dark/light theme implementation in src/styles/themes.ts
- [ ] T045 [P] Responsive layout components in src/components/layout/

## Phase 3.6: Integration and State Management
- [ ] T046 React Context for global state management in src/context/AppContext.tsx
- [ ] T047 Custom hooks for workout session management in src/hooks/useWorkoutSession.ts
- [ ] T048 Custom hooks for camera detection in src/hooks/useCameraDetection.ts
- [ ] T049 Custom hooks for user preferences in src/hooks/useUserPreferences.ts
- [ ] T050 Custom hooks for storage operations in src/hooks/useStorage.ts
- [ ] T051 Error handling and user feedback integration
- [ ] T052 Performance optimization with React.memo and useMemo
- [ ] T053 Service worker integration for offline functionality

## Phase 3.7: Polish and Optimization
- [ ] T054 [P] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] T055 [P] Mobile device testing (iOS Safari, Android Chrome)
- [ ] T056 [P] Accessibility audit with automated and manual testing
- [ ] T057 [P] Performance optimization (code splitting, lazy loading)
- [ ] T058 [P] Bundle size optimization and analysis
- [ ] T059 [P] PWA features testing (offline, installable)
- [ ] T060 [P] Update documentation with component usage examples
- [ ] T061 Final UX review and usability testing

## Dependencies
- Setup (T001-T007) before tests (T008-T017)
- Tests (T008-T017) before models (T018-T022)
- Models (T018-T022) before services (T023-T027)
- Services (T023-T027) before components (T028-T037)
- Core components (T028-T037) before UI components (T038-T045)
- Components before integration (T046-T053)
- Integration before polish (T054-T061)
- T023 (StorageService) blocks T026 (WorkoutSessionService)
- T024 (CameraDetectionService) blocks T048 (useCameraDetection hook)
- T046 (AppContext) blocks T047-T050 (custom hooks)

## Parallel Example
```
# Launch T008-T017 together (Contract and Integration Tests):
Task: "Contract test for WorkoutSession interface in tests/contracts/workout-session.test.ts"
Task: "Contract test for CameraDetection interface in tests/contracts/camera-detection.test.ts"
Task: "Contract test for UserPreferences interface in tests/contracts/user-preferences.test.ts"
Task: "Integration test for first-time user onboarding in tests/integration/onboarding.test.ts"
Task: "Integration test for workout session flow in tests/integration/workout-session.test.ts"
```

```
# Launch T018-T022 together (Model Creation):
Task: "WorkoutSession model with validation in src/models/WorkoutSession.ts"
Task: "PushUpEvent model with timestamp handling in src/models/PushUpEvent.ts"
Task: "UserPreferences model with defaults in src/models/UserPreferences.ts"
Task: "ProgressStatistics model with calculations in src/models/ProgressStatistics.ts"
Task: "Achievement model with unlock logic in src/models/Achievement.ts"
```

```
# Launch T023-T027 together (Service Layer):
Task: "IndexedDB storage service in src/services/StorageService.ts"
Task: "Camera detection service with TensorFlow.js in src/services/CameraDetectionService.ts"
Task: "Audio feedback service with Web Audio API in src/services/AudioService.ts"
Task: "Workout session manager service in src/services/WorkoutSessionService.ts"
Task: "User preferences service in src/services/UserPreferencesService.ts"
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each task
- Follow React Testing Library best practices (behavior over implementation)
- Maintain TypeScript strict mode throughout
- Ensure all components are accessible via keyboard
- Test camera permissions and fallback to manual mode
- Optimize for mobile-first experience

## Task Generation Rules Applied

1. **From Contracts**:
   - workout-session.ts → T008 contract test [P]
   - camera-detection.ts → T009 contract test [P]
   - user-preferences.ts → T010 contract test [P]

2. **From Data Model**:
   - WorkoutSession → T018 model creation [P]
   - PushUpEvent → T019 model creation [P]
   - UserPreferences → T020 model creation [P]
   - ProgressStatistics → T021 model creation [P]
   - Achievement → T022 model creation [P]

3. **From Quickstart Scenarios**:
   - First-time user onboarding → T011 integration test [P]
   - Workout session flow → T012 integration test [P]
   - Manual count adjustment → T013 integration test [P]
   - Workout completion and history → T014 integration test [P]
   - Accessibility testing → T015 integration test [P]

4. **Ordering**:
   - Setup → Tests → Models → Services → Components → Integration → Polish
   - TDD enforced: All tests before implementation
   - Dependencies clearly mapped

## Validation Checklist

- [x] All contracts have corresponding tests
- [x] All entities have model tasks
- [x] All tests come before implementation
- [x] Parallel tasks truly independent
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task
- [x] React/TypeScript specific tasks included
- [x] Mobile-first and accessibility requirements covered
- [x] Performance and PWA features included
