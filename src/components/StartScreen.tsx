import { useState } from 'react';

interface StartScreenProps {
  onStartGame: (player1Name: string, player2Name: string, targetScore: number) => void;
}

export default function StartScreen({ onStartGame }: StartScreenProps) {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [targetScore, setTargetScore] = useState(50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (player1Name.trim() && player2Name.trim() && targetScore > 0) {
      onStartGame(player1Name.trim(), player2Name.trim(), targetScore);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Gioco dei Dadi
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="player1" className="block text-sm font-medium text-gray-700 mb-2">
              Nome Giocatore 1
            </label>
            <input
              type="text"
              id="player1"
              value={player1Name}
              onChange={(e) => setPlayer1Name(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Inserisci nome"
              required
            />
          </div>
          
          <div>
            <label htmlFor="player2" className="block text-sm font-medium text-gray-700 mb-2">
              Nome Giocatore 2
            </label>
            <input
              type="text"
              id="player2"
              value={player2Name}
              onChange={(e) => setPlayer2Name(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Inserisci nome"
              required
            />
          </div>
          
          <div>
            <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-2">
              Punteggio Obiettivo
            </label>
            <input
              type="number"
              id="target"
              value={targetScore}
              onChange={(e) => setTargetScore(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="1"
              max="200"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
          >
            Gioca
          </button>
        </form>
      </div>
    </div>
  );
}