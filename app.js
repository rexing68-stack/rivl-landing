const games = [
    {
        id: 1,
        title: "Cyber Heist: Data Extraction",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        category: "Puzzle",
        players: "12.5k",
        prize: "$5,000",
        live: true
    },
    {
        id: 2,
        title: "Neon Racer: Midnight Run",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
        category: "Racing",
        players: "8.2k",
        prize: "$2,500",
        live: true
    },
    {
        id: 3,
        title: "Quantum Chess Arena",
        image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop",
        category: "Strategy",
        players: "24k",
        prize: "$10,000",
        live: true
    },
    {
        id: 4,
        title: "Drone Defense Protocol",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop",
        category: "Action",
        players: "5.1k",
        prize: "$1,200",
        live: false
    },
    {
        id: 5,
        title: "Crypto Trader Sim 2077",
        image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop",
        category: "Simulation",
        players: "18k",
        prize: "$8,000",
        live: true
    },
    {
        id: 6,
        title: "Neural Network Breaker",
        image: "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=1974&auto=format&fit=crop",
        category: "Puzzle",
        players: "3.4k",
        prize: "$500",
        live: false
    }
];

function renderGames() {
    const grid = document.getElementById('game-grid');
    grid.innerHTML = games.map(game => `
    <div class="game-card">
      <div class="card-image" style="background-image: url('${game.image}')">
        ${game.live ? '<span class="card-badge">LIVE</span>' : ''}
      </div>
      <div class="card-body">
        <h3 class="card-title">${game.title}</h3>
        <div class="card-meta">
          <div class="meta-item">
            <span class="meta-label">Pool:</span>
            <span class="meta-value green-text">${game.prize}</span>
          </div>
          <div class="meta-item">
            <span class="meta-value">${game.players}</span>
            <span class="meta-label">Players</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderGames();
});
