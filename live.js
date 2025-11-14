const API_KEY_streams = "AIzaSyA1UKUlf-oedVO8Q00SWCmvAKqAcsQxj00";

// Fetch trending live gaming streams
async function fetchLiveGamingStreams() {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&videoCategoryId=20&maxResults=20&key=${API_KEY_streams}`;

  const response = await fetch(url);
  const data = await response.json();
   
  console.log(data)
  const streams = data.items.map(item => ({
    id: item.id.videoId,
    title: item.snippet.title,
    channel: item.snippet.channelTitle,
    thumbnail: item.snippet.thumbnails.medium.url
  }));

  displayStreams(streams);
}

function displayStreams(streams) {
  const container = document.getElementById("streams-container");
  container.innerHTML = "";

  streams.forEach(stream => {
    const card = document.createElement("a");
    card.href = `https://www.youtube.com/watch?v=${stream.id}`;
    card.target = "_blank";
    card.classList.add("stream-card");

    card.innerHTML = `
      <img src="${stream.thumbnail}" alt="${stream.title}" />
      <div class="stream-info">
        <h3>${stream.title}</h3>
        <p>${stream.channel}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

fetchLiveGamingStreams();