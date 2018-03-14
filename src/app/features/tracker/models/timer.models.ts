export interface TimerInfo {
  game: string;
  platform: string;
  active: boolean;
  startDate: string;
}

export interface AddTimerInfo {
  game: string;
  platform: string;
  startDate: Date;
  endDate: Date;
}
