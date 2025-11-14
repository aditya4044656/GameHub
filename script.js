function createGameCard(game) {
    const card = document.createElement("div");
    card.className = "game-card";

    const rank = document.createElement("div");
    rank.className = "rank-badge";
    rank.textContent = `#${game.rank}`;

    const img = document.createElement("img");
    img.className = "game-img";
    img.src = game.image;
    img.alt = game.name;

    const info = document.createElement("div");
    info.className = "game-info";

    const title = document.createElement("h2");
    title.className = "game-title";
    title.textContent = game.name;

    const ratingSection = document.createElement("div");
    ratingSection.className = "rating-section";

    const rating = document.createElement("span");
    rating.className = "rating";
    rating.textContent = `⭐ ${game.rating}`;

    const ratingCount = document.createElement("span");
    ratingCount.className = "rating-count";
    ratingCount.textContent = `(${game.ratingCount})`;

    ratingSection.appendChild(rating);
    ratingSection.appendChild(ratingCount);

    info.appendChild(title);
    info.appendChild(ratingSection);

    card.appendChild(rank);
    card.appendChild(img);
    card.appendChild(info);

    return card;
}
async function loadGames() {
    const API_KEY = "470639f9f1f24cb5ad61996201c28586";
    const url = `https://api.rawg.io/api/games?key=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    
    data.results.forEach((game, index) => {
        const card = createGameCard({
            rank: index + 1,
            image: game.background_image,
            name: game.name,
            rating: game.rating,
            ratingCount: game.ratings_count
        });

        document.getElementsByClassName("TrendingCards_container")[0].appendChild(card);
    });
}

loadGames();