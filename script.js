function loadGame(filename) {
  const frame = document.getElementById('game-frame');
  frame.src = filename;
  frame.scrollIntoView({ behavior: 'smooth' });
}

// Optional: preload game list or handle error if needed
const games = [
  'rock-paper.html',
  'memory.html',
  'snake.html',
  'wordle.html',
  'tic-tac-toe.html',
  '2048.html',
  'flappy-bird.html',
  'pong.html',
  'brick-breaker.html',
  'quiz.html'
];
