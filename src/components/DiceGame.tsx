'use client';

import { useState, useCallback } from 'react';
import { GameState, GameAction } from '@/types/game';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
import WinScreen from './WinScreen';

export default function DiceGame() {
  const [gameState, setGameState] = useState<GameState>({
    players: [
      { name: '', score: 0 },
      { name: '', score: 0 }
    ],
    currentPlayerIndex: 0,
    targetScore: 50,
    gamePhase: 'setup',
    winner: null,
    lastRoll: null
  });

  const rollDice = useCallback((): number => {
    return Math.floor(Math.random() * 6) + 1;
  }, []);

  const startGame = useCallback((player1Name: string, player2Name: string, targetScore: number) => {
    setGameState({
      players: [
        { name: player1Name, score: 0 },
        { name: player2Name, score: 0 }
      ],
      currentPlayerIndex: 0,
      targetScore,
      gamePhase: 'playing',
      winner: null,
      lastRoll: null
    });
  }, []);

  const handleAction = useCallback((action: GameAction) => {
    const roll = rollDice();
    
    setGameState(prevState => {
      const newState = { ...prevState };
      newState.lastRoll = roll;

      if (action === 'add') {
        // Add to current player's score
        newState.players[newState.currentPlayerIndex].score += roll;
      } else if (action === 'remove') {
        // Remove from opponent's score
        const opponentIndex = newState.currentPlayerIndex === 0 ? 1 : 0;
        newState.players[opponentIndex].score -= roll;
      }

      // Check for win condition
      const currentPlayer = newState.players[newState.currentPlayerIndex];
      if (currentPlayer.score >= newState.targetScore) {
        newState.gamePhase = 'finished';
        newState.winner = currentPlayer;
      } else {
        // Switch to next player
        newState.currentPlayerIndex = newState.currentPlayerIndex === 0 ? 1 : 0;
      }

      return newState;
    });
  }, [rollDice]);

  const restartGame = useCallback(() => {
    setGameState(prevState => ({
      ...prevState,
      players: [
        { name: '', score: 0 },
        { name: '', score: 0 }
      ],
      currentPlayerIndex: 0,
      gamePhase: 'setup',
      winner: null,
      lastRoll: null
    }));
  }, []);

  if (gameState.gamePhase === 'setup') {
    return <StartScreen onStartGame={startGame} />;
  }

  if (gameState.gamePhase === 'finished' && gameState.winner) {
    return <WinScreen winner={gameState.winner} onRestart={restartGame} />;
  }

  return <GameScreen gameState={gameState} onAction={handleAction} />;
}