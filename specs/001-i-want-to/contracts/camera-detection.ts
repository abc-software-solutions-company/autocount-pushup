/**
 * Camera Detection API Contract
 * Defines the interface for push-up detection using camera
 */

export interface CameraDetectionContract {
  // Camera initialization
  initializeCamera(constraints?: CameraConstraints): Promise<CameraInitResponse>;
  switchCamera(deviceId: string): Promise<CameraInitResponse>;
  stopCamera(): Promise<void>;
  
  // Detection control
  startDetection(sessionId: string): Promise<DetectionStartResponse>;
  stopDetection(): Promise<void>;
  pauseDetection(): Promise<void>;
  resumeDetection(): Promise<void>;
  
  // Detection events (event-based)
  onPushUpDetected(callback: (event: PushUpDetectionEvent) => void): void;
  onDetectionError(callback: (error: DetectionError) => void): void;
  onCameraError(callback: (error: CameraError) => void): void;
  
  // Detection settings
  updateSensitivity(level: 'low' | 'medium' | 'high'): Promise<void>;
  getDetectionStats(): Promise<DetectionStats>;
}

export interface CameraConstraints {
  deviceId?: string;
  width?: number;
  height?: number;
  frameRate?: number;
  facingMode?: 'user' | 'environment';
}

export interface CameraInitResponse {
  success: boolean;
  deviceId: string;
  deviceLabel: string;
  resolution: {
    width: number;
    height: number;
  };
  frameRate: number;
  error?: CameraError;
}

export interface DetectionStartResponse {
  success: boolean;
  sessionId: string;
  modelLoaded: boolean;
  detectionActive: boolean;
  error?: DetectionError;
}

export interface PushUpDetectionEvent {
  sessionId: string;
  timestamp: string; // ISO date string
  confidence: number; // 0-1
  keypoints: PoseKeypoint[];
  phase: 'up' | 'down' | 'transition';
  countIncremented: boolean;
}

export interface PoseKeypoint {
  name: string;
  x: number; // normalized 0-1
  y: number; // normalized 0-1
  confidence: number; // 0-1
}

export interface DetectionStats {
  totalDetections: number;
  averageConfidence: number;
  falsePositiveRate: number;
  processingLatency: number; // milliseconds
  frameRate: number;
  modelVersion: string;
}

export interface CameraError {
  code: 'PERMISSION_DENIED' | 'DEVICE_NOT_FOUND' | 'DEVICE_IN_USE' | 'INITIALIZATION_FAILED';
  message: string;
  details?: any;
}

export interface DetectionError {
  code: 'MODEL_LOAD_FAILED' | 'PROCESSING_ERROR' | 'INVALID_FRAME' | 'PERFORMANCE_DEGRADED';
  message: string;
  details?: any;
}
