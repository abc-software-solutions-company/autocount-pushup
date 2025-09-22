# Research: Push-Up Auto-Counter Webapp

## Computer Vision for Push-Up Detection

### Decision: TensorFlow.js with PoseNet/MoveNet
**Rationale**: 
- Browser-native ML inference without server dependency
- Real-time pose estimation optimized for mobile devices
- Pre-trained models available for human pose detection
- Good performance on mobile browsers (30fps achievable)

**Alternatives considered**:
- MediaPipe (Google): Excellent accuracy but larger bundle size
- Custom CNN: Too complex for MVP, requires training data
- OpenCV.js: Overkill for pose detection, larger bundle

### Implementation Approach:
- Use MoveNet Lightning for speed (17 keypoints, optimized for mobile)
- Track shoulder, elbow, wrist keypoints to detect push-up motion
- Implement state machine: up position → down position → up position = 1 rep
- Add confidence thresholds to reduce false positives

## Camera Access and Permissions

### Decision: getUserMedia API with graceful fallback
**Rationale**:
- Standard web API with broad browser support
- Handles permission requests automatically
- Can specify camera constraints (resolution, frame rate)

**Implementation**:
- Request camera permission on first use
- Provide clear explanation of why camera is needed
- Fallback to manual counter if camera denied/unavailable
- Handle camera switching (front/back) for better positioning

## Real-time Performance Optimization

### Decision: Web Workers + OffscreenCanvas
**Rationale**:
- Offload ML inference to background thread
- Prevent UI blocking during pose detection
- Maintain 30fps camera feed while processing

**Alternatives considered**:
- Main thread processing: Would block UI, poor UX
- Service Worker: Not suitable for real-time processing
- WebAssembly: Overkill for this use case

## Data Storage Strategy

### Decision: IndexedDB with LocalStorage fallback
**Rationale**:
- IndexedDB for workout sessions (structured data, larger capacity)
- LocalStorage for user preferences (simple key-value)
- No server dependency, works offline
- Can store workout history indefinitely

**Data Structure**:
```typescript
interface WorkoutSession {
  id: string;
  startTime: Date;
  endTime: Date;
  pushUpCount: number;
  duration: number; // seconds
  detectionAccuracy: number; // 0-1
  manualAdjustments: number;
}
```

## Audio Feedback Implementation

### Decision: Web Audio API with user preference toggle
**Rationale**:
- Low-latency audio for immediate feedback
- Can generate simple tones without audio files
- Respects user preference for silent workouts
- Works offline once loaded

**Implementation**:
- Generate short beep/click sound for each rep
- Volume control and mute option
- Different tones for milestones (every 10 reps)

## Progressive Web App Features

### Decision: Service Worker with cache-first strategy
**Rationale**:
- Works offline after initial load
- Fast startup time on repeat visits
- Can cache ML models for offline use
- Installable on mobile devices

**Caching Strategy**:
- Cache app shell (HTML, CSS, JS)
- Cache ML models after first load
- Network-first for workout data sync (future feature)

## Accessibility Considerations

### Decision: Comprehensive keyboard and screen reader support
**Implementation**:
- Spacebar to start/stop workouts
- Arrow keys for manual count adjustment
- Live regions for count announcements
- High contrast mode support
- Voice announcements for milestones

## Browser Compatibility

### Minimum Requirements:
- Chrome 90+ (getUserMedia, Web Workers, IndexedDB)
- Safari 14+ (iOS 14+ for camera access)
- Firefox 88+ (full feature support)
- Edge 90+ (Chromium-based)

### Fallback Strategy:
- Feature detection for all APIs
- Graceful degradation to manual counter
- Clear messaging when features unavailable

## Performance Benchmarks

### Target Metrics:
- Initial load: <3 seconds on 3G
- Camera initialization: <2 seconds
- Detection latency: <100ms per frame
- Bundle size: <5MB total
- Memory usage: <100MB during workout

### Optimization Techniques:
- Lazy load ML models
- Code splitting by feature
- Image/video compression
- Tree shaking unused dependencies
