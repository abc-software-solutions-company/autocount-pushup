/**
 * User Preferences API Contract
 * Defines the interface for user settings and preferences
 */

export interface UserPreferencesContract {
  // Get preferences
  getPreferences(): Promise<UserPreferencesResponse>;
  getPreference<K extends keyof UserPreferences>(key: K): Promise<UserPreferences[K]>;
  
  // Update preferences
  updatePreferences(preferences: Partial<UserPreferences>): Promise<UserPreferencesResponse>;
  updatePreference<K extends keyof UserPreferences>(
    key: K, 
    value: UserPreferences[K]
  ): Promise<UserPreferences[K]>;
  
  // Reset preferences
  resetPreferences(): Promise<UserPreferencesResponse>;
  resetPreference<K extends keyof UserPreferences>(key: K): Promise<UserPreferences[K]>;
}

export interface UserPreferences {
  // Audio settings
  audioEnabled: boolean;
  audioVolume: number; // 0-1
  
  // Camera settings
  cameraPreference: 'front' | 'back' | 'auto';
  detectionSensitivity: 'low' | 'medium' | 'high';
  
  // UI settings
  theme: 'light' | 'dark' | 'auto';
  showTutorial: boolean;
  
  // Privacy settings
  privacyConsent: boolean;
  
  // Goals and targets
  weeklyGoal?: number;
  monthlyGoal?: number;
  
  // Accessibility settings
  highContrast: boolean;
  reduceMotion: boolean;
  announceCount: boolean; // screen reader announcements
  
  // Metadata
  lastUpdated: string; // ISO date string
}

export interface UserPreferencesResponse {
  preferences: UserPreferences;
  success: boolean;
  error?: PreferencesError;
}

export interface PreferencesError {
  code: 'STORAGE_ERROR' | 'VALIDATION_ERROR' | 'PREFERENCE_NOT_FOUND';
  message: string;
  field?: keyof UserPreferences;
  details?: any;
}

// Default preferences
export const DEFAULT_PREFERENCES: UserPreferences = {
  audioEnabled: true,
  audioVolume: 0.7,
  cameraPreference: 'auto',
  detectionSensitivity: 'medium',
  theme: 'auto',
  showTutorial: true,
  privacyConsent: false,
  highContrast: false,
  reduceMotion: false,
  announceCount: true,
  lastUpdated: new Date().toISOString()
};
