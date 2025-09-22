/**
 * Workout Session API Contract
 * Defines the interface for workout session management
 */

export interface WorkoutSessionContract {
  // Create new workout session
  startWorkout(): Promise<WorkoutSessionResponse>;
  
  // End current workout session
  endWorkout(sessionId: string): Promise<WorkoutSessionResponse>;
  
  // Pause/resume workout session
  pauseWorkout(sessionId: string): Promise<WorkoutSessionResponse>;
  resumeWorkout(sessionId: string): Promise<WorkoutSessionResponse>;
  
  // Update push-up count
  incrementCount(sessionId: string, method: 'auto' | 'manual'): Promise<CountUpdateResponse>;
  decrementCount(sessionId: string): Promise<CountUpdateResponse>;
  setCount(sessionId: string, count: number): Promise<CountUpdateResponse>;
  
  // Get session data
  getCurrentSession(): Promise<WorkoutSessionResponse | null>;
  getSessionHistory(limit?: number, offset?: number): Promise<WorkoutSessionResponse[]>;
  getSessionById(sessionId: string): Promise<WorkoutSessionResponse | null>;
  
  // Delete session
  deleteSession(sessionId: string): Promise<void>;
}

export interface WorkoutSessionResponse {
  id: string;
  startTime: string; // ISO date string
  endTime?: string; // ISO date string
  pushUpCount: number;
  duration: number; // seconds
  status: 'active' | 'paused' | 'completed';
  detectionAccuracy: number; // 0-1
  manualAdjustments: number;
  cameraUsed: boolean;
  notes?: string;
}

export interface CountUpdateResponse {
  sessionId: string;
  newCount: number;
  timestamp: string; // ISO date string
  method: 'auto' | 'manual';
  success: boolean;
}

export interface WorkoutSessionError {
  code: 'SESSION_NOT_FOUND' | 'SESSION_ALREADY_ACTIVE' | 'INVALID_COUNT' | 'STORAGE_ERROR';
  message: string;
  details?: any;
}
