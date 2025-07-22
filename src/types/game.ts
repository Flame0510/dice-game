export interface Player {
  name: string;
  score: number;
}

export interface GameState {
  players: [Player, Player];
  currentPlayerIndex: 0 | 1;
  targetScore: number;
  gamePhase: 'setup' | 'playing' | 'finished';
  winner: Player | null;
  lastRoll: number | null;
}

export type GameAction = 'add' | 'remove';