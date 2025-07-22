import { GameState, GameAction } from '@/types/game';

interface GameScreenProps {
  gameState: GameState;
  onAction: (action: GameAction) => void;
}

export default function GameScreen({ gameState, onAction }: GameScreenProps) {
  const currentPlayer = gameState.players[gameState.currentPlayerIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-blue-600 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with scores */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`text-center p-4 rounded-lg ${gameState.currentPlayerIndex === 0 ? 'bg-yellow-200 border-2 border-yellow-400' : 'bg-gray-100'}`}>
              <h2 className="text-xl font-bold text-gray-800">{gameState.players[0].name}</h2>
              <div className="text-3xl font-bold text-blue-600 mt-2">{gameState.players[0].score}</div>
            </div>
            <div className={`text-center p-4 rounded-lg ${gameState.currentPlayerIndex === 1 ? 'bg-yellow-200 border-2 border-yellow-400' : 'bg-gray-100'}`}>
              <h2 className="text-xl font-bold text-gray-800">{gameState.players[1].name}</h2>
              <div className="text-3xl font-bold text-blue-600 mt-2">{gameState.players[1].score}</div>
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="text-sm text-gray-600">Obiettivo: {gameState.targetScore} punti</div>
          </div>
        </div>

        {/* Current turn indicator */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            {currentPlayer.name} è il tuo turno
          </h2>
          
          {/* Dice result */}
          {gameState.lastRoll && (
            <div className="text-center mb-6">
              <div className="inline-block bg-red-500 text-white rounded-lg p-6 shadow-lg">
                <div className="text-4xl font-bold">{gameState.lastRoll}</div>
              </div>
              <p className="text-gray-600 mt-2">Ultimo lancio</p>
            </div>
          )}
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onAction('add')}
              className="bg-green-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-green-700 transition-colors duration-200 transform hover:scale-105 text-lg"
            >
              Aggiungi al tuo punteggio
            </button>
            <button
              onClick={() => onAction('remove')}
              className="bg-red-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-red-700 transition-colors duration-200 transform hover:scale-105 text-lg"
            >
              Rimuovi dall&apos;avversario
            </button>
          </div>
        </div>

        {/* Game instructions */}
        <div className="bg-white rounded-lg shadow-xl p-4">
          <div className="text-sm text-gray-600 text-center">
            <p>Scegli se aggiungere punti al tuo punteggio o rimuoverli dall&apos;avversario.</p>
            <p>Il dado determinerà quanti punti verranno aggiunti o rimossi.</p>
          </div>
        </div>
      </div>
    </div>
  );
}