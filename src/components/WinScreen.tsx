import { Player } from '@/types/game';

interface WinScreenProps {
  winner: Player;
  onRestart: () => void;
}

export default function WinScreen({ winner, onRestart }: WinScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Complimenti!
          </h1>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {winner.name} hai vinto!
          </h2>
          <p className="text-gray-600">
            Punteggio finale: {winner.score} punti
          </p>
        </div>
        
        <button
          onClick={onRestart}
          className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 transform hover:scale-105"
        >
          Gioca Ancora
        </button>
      </div>
    </div>
  );
}