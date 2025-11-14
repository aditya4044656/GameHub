// Replace with your RAWG API key
const API_KEY = "b3b1e29da73242248292a71d1fffd81f";

const searchInput = document.getElementById("exploreSearchInput");
const searchButton = document.getElementById("exploreSearchButton");
const resultsContainer = document.getElementById("explore-results");

// Function to create game cards (reuse your trending card style)
function createSearchGameCard(game) {
    const card = document.createElement("div");
    card.className = "game-card";

    const img = document.createElement("img");
    img.className = "game-img";
    img.src = game.background_image;
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
    ratingCount.textContent = `(${game.ratings_count})`;

    ratingSection.appendChild(rating);
    ratingSection.appendChild(ratingCount);

    info.appendChild(title);
    info.appendChild(ratingSection);

    card.appendChild(img);
    card.appendChild(info);

    return card;
}

// Search games from RAWG
async function searchGames(query) {
    resultsContainer.innerHTML = "<p style='color:white'>Searching...</p>";
    try {
        const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(query)}&page_size=20`);
        const data = await res.json();
        resultsContainer.innerHTML = "";

        if (!data.results || data.results.length === 0) {
            resultsContainer.innerHTML = "<p style='color:white'>No results found.</p>";
            return;
        }

        data.results.forEach(game => {
            const card = createSearchGameCard(game);
            resultsContainer.appendChild(card);
        });
    } catch (err) {
        resultsContainer.innerHTML = `<p style='color:red'>Error: ${err.message}</p>`;
    }
}

// Event listeners
searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) searchGames(query);
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) searchGames(query);
    }
});
