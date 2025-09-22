# Data Model: Push-Up Auto-Counter Webapp

## Core Entities

### WorkoutSession
Represents a complete push-up workout session from start to finish.

**Fields**:
- `id`: string (UUID) - Unique identifier
- `startTime`: Date - When the workout began
- `endTime`: Date - When the workout ended
- `pushUpCount`: number - Total push-ups completed
- `duration`: number - Workout duration in seconds
- `detectionAccuracy`: number - Percentage of auto-detected vs manual adjustments (0-1)
- `manualAdjustments`: number - Number of manual count corrections
- `cameraUsed`: boolean - Whether camera detection was used
- `notes`: string (optional) - User notes about the session

**Validation Rules**:
- `pushUpCount` must be >= 0
- `duration` must be > 0
- `endTime` must be after `startTime`
- `detectionAccuracy` must be between 0 and 1
- `manualAdjustments` must be >= 0

**State Transitions**:
- Created → Active (when workout starts)
- Active → Paused (when user pauses)
- Paused → Active (when user resumes)
- Active → Completed (when workout ends)

### PushUpEvent
Individual push-up detection event during a workout session.

**Fields**:
- `id`: string (UUID) - Unique identifier
- `sessionId`: string - Reference to WorkoutSession
- `timestamp`: Date - When the push-up was detected
- `detectionMethod`: 'auto' | 'manual' - How the push-up was counted
- `confidence`: number - ML model confidence score (0-1, only for auto)
- `keypoints`: PoseKeypoint[] (optional) - Pose detection data for debugging

**Validation Rules**:
- `confidence` required only when `detectionMethod` is 'auto'
- `confidence` must be between 0 and 1
- `timestamp` must be within session start/end time

### UserPreferences
User settings and preferences for the application.

**Fields**:
- `audioEnabled`: boolean - Whether to play audio feedback
- `audioVolume`: number - Volume level (0-1)
- `cameraPreference`: 'front' | 'back' | 'auto' - Preferred camera
- `detectionSensitivity`: 'low' | 'medium' | 'high' - ML detection threshold
- `theme`: 'light' | 'dark' | 'auto' - UI theme preference
- `showTutorial`: boolean - Whether to show onboarding tutorial
- `privacyConsent`: boolean - User consent for camera usage
- `lastUpdated`: Date - When preferences were last modified

**Validation Rules**:
- `audioVolume` must be between 0 and 1
- `detectionSensitivity` affects ML confidence thresholds
- `privacyConsent` must be true to use camera features

### ProgressStatistics
Aggregated statistics and achievements for user motivation.

**Fields**:
- `totalWorkouts`: number - Total number of completed sessions
- `totalPushUps`: number - Lifetime push-up count
- `totalDuration`: number - Total workout time in seconds
- `averagePerSession`: number - Average push-ups per session
- `personalRecord`: number - Highest push-ups in single session
- `currentStreak`: number - Consecutive days with workouts
- `longestStreak`: number - Longest consecutive day streak
- `weeklyGoal`: number - User-set weekly push-up target
- `monthlyGoal`: number - User-set monthly push-up target
- `achievements`: Achievement[] - Unlocked achievements
- `lastCalculated`: Date - When stats were last updated

**Validation Rules**:
- All count fields must be >= 0
- `personalRecord` must be <= max single session count
- Goals must be > 0 if set

### Achievement
Gamification elements to encourage user engagement.

**Fields**:
- `id`: string - Achievement identifier
- `name`: string - Display name
- `description`: string - Achievement description
- `icon`: string - Icon identifier
- `unlockedAt`: Date (optional) - When achievement was earned
- `progress`: number - Current progress toward achievement (0-1)
- `target`: number - Target value to unlock achievement

**Achievement Types**:
- Milestone achievements (10, 50, 100, 500, 1000 push-ups)
- Streak achievements (3, 7, 30, 100 consecutive days)
- Session achievements (25, 50, 100 push-ups in one session)
- Accuracy achievements (95%, 98%, 99% detection accuracy)

## Relationships

```
UserPreferences (1) ←→ (many) WorkoutSession
WorkoutSession (1) ←→ (many) PushUpEvent
ProgressStatistics (1) ←→ (many) Achievement
WorkoutSession (many) → (1) ProgressStatistics (calculated)
```

## Storage Strategy

### IndexedDB Schema
```typescript
// Object stores
const STORES = {
  workoutSessions: 'workoutSessions',
  pushUpEvents: 'pushUpEvents',
  userPreferences: 'userPreferences',
  progressStatistics: 'progressStatistics',
  achievements: 'achievements'
};

// Indexes for efficient querying
const INDEXES = {
  workoutSessions: ['startTime', 'endTime', 'pushUpCount'],
  pushUpEvents: ['sessionId', 'timestamp'],
  achievements: ['unlockedAt', 'progress']
};
```

### LocalStorage Fallback
For browsers with limited IndexedDB support:
- Store only essential data (current session, basic preferences)
- Limit workout history to last 10 sessions
- Simplified statistics calculation

## Data Migration Strategy

### Version 1.0.0 (Initial)
- Create all object stores and indexes
- Initialize default user preferences
- Set up achievement definitions

### Future Versions
- Backward-compatible schema changes
- Data migration scripts for breaking changes
- Export/import functionality for data portability

## Privacy and Security

### Data Handling
- All data stored locally on device
- No server transmission of personal data
- Camera feed processed in real-time, not stored
- User can delete all data at any time

### Consent Management
- Clear privacy policy for camera usage
- Explicit consent before camera access
- Option to use app without camera (manual mode)
- Data deletion confirmation dialogs
