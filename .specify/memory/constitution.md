<!--
Sync Impact Report:
- Version change: Template → 1.0.0
- New constitution created for AutoCount website project
- Principles focused on UX-first development, performance, accessibility, and modern web standards
- Templates requiring updates: ✅ updated plan-template.md, spec-template.md, tasks-template.md
- Follow-up TODOs: None - all placeholders filled
-->

# AutoCount Website Constitution

## Core Principles

### I. User Experience First (NON-NEGOTIABLE)
Every feature MUST prioritize user experience over technical convenience. All UI components MUST be intuitive, accessible, and responsive across devices. User testing and feedback MUST inform design decisions. No feature ships without UX validation.

**Rationale**: A website's success depends entirely on user satisfaction and engagement. Technical excellence means nothing if users cannot effectively accomplish their goals.

### II. Performance by Design
Website MUST load in under 3 seconds on 3G connections. Core Web Vitals MUST meet Google's "Good" thresholds (LCP < 2.5s, FID < 100ms, CLS < 0.1). Performance budgets MUST be established and enforced. Every feature MUST consider performance impact.

**Rationale**: Performance directly impacts user experience, SEO rankings, and conversion rates. Poor performance drives users away regardless of functionality quality.

### III. Accessibility as Standard
All features MUST meet WCAG 2.1 AA standards. Keyboard navigation MUST be fully functional. Screen reader compatibility MUST be verified. Color contrast ratios MUST exceed 4.5:1 for normal text. Semantic HTML MUST be used throughout.

**Rationale**: Accessibility ensures the website serves all users, improves SEO, and is often legally required. It's easier to build accessible from the start than retrofit.

### IV. Mobile-First Development
All features MUST be designed and developed mobile-first. Touch targets MUST be minimum 44px. Content MUST be readable without zooming. Navigation MUST work with thumbs. Progressive enhancement MUST guide desktop features.

**Rationale**: Mobile traffic dominates web usage. Mobile-first ensures core functionality works on the most constrained devices, then enhances for larger screens.

### V. Test-Driven Quality
Behavior-driven tests MUST be written before implementation using React Testing Library. Tests MUST focus on user interactions, not implementation details. Visual regression tests MUST catch UI changes. End-to-end tests MUST verify critical user journeys.

**Rationale**: Testing ensures reliability and prevents regressions. Behavior-focused testing aligns with user-centric development and maintains backwards compatibility.

## Technical Standards

### Modern JavaScript Stack
- **Framework**: React with TypeScript for type safety and developer experience
- **Styling**: CSS-in-JS or CSS Modules for component-scoped styles
- **State Management**: Context API for simple state, Redux Toolkit for complex state
- **Build Tool**: Vite for fast development and optimized production builds
- **Package Manager**: npm with exact versions for reproducible builds

### Code Quality Requirements
- **Linting**: ESLint with strict rules, Prettier for formatting
- **Type Safety**: TypeScript strict mode enabled, no `any` types allowed
- **Bundle Analysis**: Bundle size monitoring with alerts for size increases
- **Security**: Regular dependency audits, CSP headers, input sanitization

## Development Workflow

### Feature Development Process
1. **Specification**: Every feature starts with a user-focused specification
2. **Design Review**: UI/UX mockups reviewed for accessibility and usability
3. **Test-First**: Behavior tests written and approved before implementation
4. **Implementation**: Code written to pass tests, following style guidelines
5. **Performance Check**: Core Web Vitals measured and validated
6. **Accessibility Audit**: WCAG compliance verified with automated and manual testing
7. **Cross-Browser Testing**: Functionality verified on major browsers and devices

### Quality Gates
- All tests MUST pass (unit, integration, e2e, visual regression)
- Performance budgets MUST not be exceeded
- Accessibility standards MUST be met
- Code coverage MUST be above 80% for critical paths
- Bundle size MUST not increase without justification

## Governance

This constitution supersedes all other development practices and guidelines. All pull requests MUST verify compliance with these principles. Any deviation MUST be documented with clear justification and mitigation plan.

**Amendment Process**: Changes require documentation of impact, stakeholder approval, and migration plan for existing code. Breaking changes require major version increment.

**Compliance Review**: Weekly reviews of metrics (performance, accessibility, test coverage) with corrective action plans for any violations.

**Version**: 1.0.0 | **Ratified**: 2025-09-22 | **Last Amended**: 2025-09-22