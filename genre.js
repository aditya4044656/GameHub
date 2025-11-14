async function fetchGenreData() {
    const res = await fetch(
        `https://api.rawg.io/api/games?key=b3b1e29da73242248292a71d1fffd81f&page_size=40`
    );

    const data = await res.json();

    return data.results;
}
function calculateGenreCounts(games) {
    const genreMap = {};

    games.forEach(game => {
        game.genres.forEach(genre => {
            if (!genreMap[genre.name]) {
                genreMap[genre.name] = 0;
            }
            genreMap[genre.name]++;
        });
    });

    return genreMap;
}
function renderGenreChart(genreCounts) {
    const labels = Object.keys(genreCounts);
    const values = Object.values(genreCounts);

    new Chart(document.getElementById("genreChart"), {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Genre Popularity",
                data: values,
                backgroundColor: "rgba(54, 162, 235, 0.7)",
                borderColor: "rgb(54, 162, 235)",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: "#ffffff" }
                },
                x: {
                    ticks: { color: "#ffffff" }
                }
            }
        }
    });
}
async function displayGenreChart() {
    const games = await fetchGenreData();
    const genreCounts = calculateGenreCounts(games);
    renderGenreChart(genreCounts);
}

displayGenreChart();