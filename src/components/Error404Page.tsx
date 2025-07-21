import React, { useState, useEffect, useRef } from 'react';
import { Home, RotateCcw, Trophy, Car, Zap } from 'lucide-react';

interface Error404PageProps {
  onNavigateHome: () => void;
}

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  speed?: number;
}

interface GameState {
  level: number;
  score: number;
  lives: number;
  speed: number;
  distance: number;
  isPlaying: boolean;
  isPaused: boolean;
  selectedCar: string;
  gameOver: boolean;
}

const Error404Page: React.FC<Error404PageProps> = ({ onNavigateHome }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>({
    level: 1,
    score: 0,
    lives: 3,
    speed: 2,
    distance: 0,
    isPlaying: false,
    isPaused: false,
    selectedCar: 'red',
    gameOver: false
  });

  const [player, setPlayer] = useState<GameObject>({ x: 200, y: 350, width: 40, height: 60 });
  const [obstacles, setObstacles] = useState<GameObject[]>([]);
  const [powerUps, setPowerUps] = useState<GameObject[]>([]);
  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});

  const carColors = {
    red: '#ef4444',
    blue: '#3b82f6',
    green: '#10b981',
    yellow: '#f59e0b',
    purple: '#8b5cf6'
  };

  // Game initialization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = 400;
    canvas.height = 600;

    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys(prev => ({ ...prev, [e.key]: true }));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys(prev => ({ ...prev, [e.key]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Game loop
  useEffect(() => {
    if (!gameState.isPlaying || gameState.isPaused) return;

    const gameLoop = setInterval(() => {
      updateGame();
      drawGame();
    }, 1000 / 60); // 60 FPS

    return () => clearInterval(gameLoop);
  }, [gameState.isPlaying, gameState.isPaused, player, obstacles, powerUps, keys]);

  const updateGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Update player position
    setPlayer(prev => {
      let newX = prev.x;
      if (keys['ArrowLeft'] && newX > 0) newX -= 5;
      if (keys['ArrowRight'] && newX < canvas.width - prev.width) newX += 5;
      return { ...prev, x: newX };
    });

    // Update obstacles
    setObstacles(prev => {
      let newObstacles = prev.map(obstacle => ({
        ...obstacle,
        y: obstacle.y + gameState.speed
      })).filter(obstacle => obstacle.y < canvas.height);

      // Add new obstacles
      if (Math.random() < 0.02 + gameState.level * 0.005) {
        newObstacles.push({
          x: Math.random() * (canvas.width - 40),
          y: -60,
          width: 40,
          height: 60,
          speed: gameState.speed
        });
      }

      return newObstacles;
    });

    // Update power-ups
    setPowerUps(prev => {
      let newPowerUps = prev.map(powerUp => ({
        ...powerUp,
        y: powerUp.y + gameState.speed
      })).filter(powerUp => powerUp.y < canvas.height);

      // Add new power-ups
      if (Math.random() < 0.005) {
        newPowerUps.push({
          x: Math.random() * (canvas.width - 20),
          y: -20,
          width: 20,
          height: 20,
          speed: gameState.speed
        });
      }

      return newPowerUps;
    });

    // Check collisions
    checkCollisions();

    // Update game state
    setGameState(prev => {
      const newDistance = prev.distance + 1;
      const newLevel = Math.floor(newDistance / 1000) + 1;
      const newSpeed = Math.min(2 + newLevel * 0.5, 8);
      
      return {
        ...prev,
        distance: newDistance,
        level: newLevel,
        speed: newSpeed,
        score: prev.score + 1
      };
    });
  };

  const checkCollisions = () => {
    // Check obstacle collisions
    obstacles.forEach(obstacle => {
      if (isColliding(player, obstacle)) {
        setGameState(prev => {
          const newLives = prev.lives - 1;
          if (newLives <= 0) {
            return { ...prev, lives: 0, isPlaying: false, gameOver: true };
          }
          return { ...prev, lives: newLives };
        });
        setObstacles(prev => prev.filter(obs => obs !== obstacle));
      }
    });

    // Check power-up collisions
    powerUps.forEach(powerUp => {
      if (isColliding(player, powerUp)) {
        setGameState(prev => ({ ...prev, score: prev.score + 50 }));
        setPowerUps(prev => prev.filter(pu => pu !== powerUp));
      }
    });
  };

  const isColliding = (obj1: GameObject, obj2: GameObject): boolean => {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
  };

  const drawGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#1f2937';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw road
    ctx.fillStyle = '#374151';
    ctx.fillRect(50, 0, canvas.width - 100, canvas.height);

    // Draw road lines
    ctx.fillStyle = '#fbbf24';
    for (let i = 0; i < canvas.height; i += 40) {
      ctx.fillRect(canvas.width / 2 - 2, i, 4, 20);
    }

    // Draw road edges
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(50, 0, 4, canvas.height);
    ctx.fillRect(canvas.width - 54, 0, 4, canvas.height);

    // Draw player car
    ctx.fillStyle = carColors[gameState.selectedCar as keyof typeof carColors];
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(player.x + 5, player.y + 10, 10, 15);
    ctx.fillRect(player.x + 25, player.y + 10, 10, 15);

    // Draw obstacles
    ctx.fillStyle = '#dc2626';
    obstacles.forEach(obstacle => {
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      ctx.fillStyle = '#000000';
      ctx.fillRect(obstacle.x + 5, obstacle.y + 10, 10, 15);
      ctx.fillRect(obstacle.x + 25, obstacle.y + 10, 10, 15);
      ctx.fillStyle = '#dc2626';
    });

    // Draw power-ups
    ctx.fillStyle = '#fbbf24';
    powerUps.forEach(powerUp => {
      ctx.beginPath();
      ctx.arc(powerUp.x + powerUp.width / 2, powerUp.y + powerUp.height / 2, powerUp.width / 2, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const startGame = () => {
    setGameState(prev => ({
      ...prev,
      isPlaying: true,
      gameOver: false,
      score: 0,
      lives: 3,
      level: 1,
      speed: 2,
      distance: 0
    }));
    setObstacles([]);
    setPowerUps([]);
    setPlayer({ x: 200, y: 350, width: 40, height: 60 });
  };

  const resetGame = () => {
    setGameState(prev => ({
      ...prev,
      isPlaying: false,
      gameOver: false,
      score: 0,
      lives: 3,
      level: 1,
      speed: 2,
      distance: 0
    }));
    setObstacles([]);
    setPowerUps([]);
    setPlayer({ x: 200, y: 350, width: 40, height: 60 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-white mb-2">Road Not Found</h2>
          <p className="text-xl text-gray-300 mb-6">
            Looks like you've taken a wrong turn! Play our road game while we get you back on track.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Game Area */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">Highway Escape</h3>
              <p className="text-gray-300">Navigate through traffic and collect power-ups!</p>
            </div>

            {/* Game Stats */}
            <div className="grid grid-cols-4 gap-4 mb-4 text-center">
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="text-yellow-400 font-bold">Level</div>
                <div className="text-white text-xl">{gameState.level}</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="text-green-400 font-bold">Score</div>
                <div className="text-white text-xl">{gameState.score}</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="text-red-400 font-bold">Lives</div>
                <div className="text-white text-xl">{'❤️'.repeat(gameState.lives)}</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="text-blue-400 font-bold">Distance</div>
                <div className="text-white text-xl">{Math.floor(gameState.distance / 10)}m</div>
              </div>
            </div>

            {/* Car Selection */}
            {!gameState.isPlaying && (
              <div className="mb-4">
                <h4 className="text-white font-bold mb-2">Choose Your Car:</h4>
                <div className="flex justify-center space-x-2">
                  {Object.entries(carColors).map(([color, hex]) => (
                    <button
                      key={color}
                      onClick={() => setGameState(prev => ({ ...prev, selectedCar: color }))}
                      className={`w-8 h-8 rounded border-2 ${
                        gameState.selectedCar === color ? 'border-white' : 'border-gray-600'
                      }`}
                      style={{ backgroundColor: hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Game Canvas */}
            <div className="flex justify-center mb-4">
              <canvas
                ref={canvasRef}
                className="border-2 border-gray-600 rounded-lg bg-gray-800"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Game Controls */}
            <div className="text-center space-y-4">
              {!gameState.isPlaying && !gameState.gameOver && (
                <button
                  onClick={startGame}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
                >
                  <Car className="w-5 h-5" />
                  <span>Start Engine</span>
                </button>
              )}

              {gameState.isPlaying && (
                <button
                  onClick={() => setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }))}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold py-2 px-4 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
                >
                  {gameState.isPaused ? 'Resume' : 'Pause'}
                </button>
              )}

              {gameState.gameOver && (
                <div className="space-y-4">
                  <div className="bg-red-500/20 border border-red-500 rounded-lg p-4">
                    <h4 className="text-red-400 font-bold text-xl mb-2">Game Over!</h4>
                    <p className="text-white">Final Score: {gameState.score}</p>
                    <p className="text-white">Level Reached: {gameState.level}</p>
                  </div>
                  <button
                    onClick={resetGame}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>Try Again</span>
                  </button>
                </div>
              )}

              <div className="text-gray-400 text-sm">
                Use ← → arrow keys to steer
              </div>
            </div>
          </div>

          {/* Instructions & Navigation */}
          <div className="space-y-6">
            {/* Game Instructions */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                How to Play
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                  Use arrow keys to steer your car
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                  Avoid red obstacle cars
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                  Collect yellow power-ups for bonus points
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                  Survive as long as possible to reach higher levels
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                  Speed increases with each level
                </li>
              </ul>
            </div>

            {/* Level Rewards */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Level Rewards</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Level 1-2:</span>
                  <span className="text-yellow-400">Rookie Driver</span>
                </div>
                <div className="flex justify-between">
                  <span>Level 3-5:</span>
                  <span className="text-yellow-400">Street Racer</span>
                </div>
                <div className="flex justify-between">
                  <span>Level 6-8:</span>
                  <span className="text-yellow-400">Speed Demon</span>
                </div>
                <div className="flex justify-between">
                  <span>Level 9+:</span>
                  <span className="text-yellow-400">Highway Legend</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Ready to Continue?</h3>
              <p className="text-gray-300 mb-6">
                Once you've had your fill of highway action, head back to explore our amazing car collection!
              </p>
              <button
                onClick={onNavigateHome}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Back to AutoVault</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;