async function fetchPopularGamesThisMonth() {
    const apiKey = "470639f9f1f24cb5ad61996201c28586"; 

    // Get first & last date of current month
    const now = new Date();
    const firstDay = `${now.getFullYear()}-${(now.getMonth()+1)
        .toString().padStart(2, '0')}-01`;
    const lastDay = `${now.getFullYear()}-${(now.getMonth()+1)
        .toString().padStart(2, '0')}-${new Date(
            now.getFullYear(),
            now.getMonth()+1,
            0
        ).getDate()}`;

    const url = `https://api.rawg.io/api/games?key=${apiKey}&dates=${firstDay},${lastDay}&ordering=-rating&page_size=10`;

    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}
async function displayPopularGames() {
    const games = await fetchPopularGamesThisMonth();
    const container = document.getElementById("popular-games-container");

    container.innerHTML = games
        .map(
            (game) => `
        <div class="pop-card">
            <img class="pop-img" src="${game.background_image}" alt="${game.name}">
            <h3 class="pop-title">${game.name}</h3>
            <p class="pop-rating">⭐ Rating: ${game.rating}</p>
            <p class="pop-release">🎮 Released: ${game.released}</p>
        </div>
    `
        )
        .join("");
}

displayPopularGames();
