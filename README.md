🎮 EsportsHub

EsportsHub is a dynamic Single Page Application (SPA) designed to be the ultimate aggregation point for trending data in the gaming and esports world. Built using Vanilla JavaScript, HTML5, and modern CSS, it provides users with real-time insights into popular games, trending esports teams, genre popularity, and live streaming content.

✨ Features

EsportsHub is structured into a fluid, multi-page layout (managed entirely client-side) and includes the following key features:

Feature

Description

Data Source

Trending Games

Displays the top-rated and currently popular games globally, complete with current ratings and user counts.

RAWG API

E-sports Hub

Showcases trending E-sports titles and the top professional teams across major competitive games (static/mock data).

Internal Mock Data

Genre Chart

Visualizes game genre popularity using a responsive bar chart, offering insights into market trends.

RAWG API & Chart.js

Live Streams

Fetches and displays currently live gaming streams from YouTube, allowing users to quickly access trending content.

YouTube Data API

Explore/Search

Provides a real-time search interface to query the RAWG database for specific games, displayed in a responsive card grid.

RAWG API

🚀 Technology Stack

This project is implemented as a classic Single Page Application using front-end technologies:

HTML5: Semantic structure and layout.

CSS3: Custom dark theme, responsive design, gradients, and hover animations.

JavaScript (Vanilla): Core application logic, routing (SPA), data fetching, and DOM manipulation.

APIs:

RAWG API: Primary source for game metadata, ratings, and imagery.

YouTube Data API: Used specifically for fetching live streaming video content.

Libraries:

Chart.js: Used exclusively for rendering the dynamic Genre Popularity Chart.

⚙️ Setup and Installation

To run this project locally, you will need to obtain API keys for both data sources.

Prerequisites

RAWG API Key: Needed for all game data (script.js, genre.js, search.js).

YouTube Data API Key: Needed for fetching live stream data (live.js).

Installation Steps

Clone the Repository:

git clone [https://github.com/Phantasmal24/GameHub.git](https://github.com/Phantasmal24/GameHub.git)
cd GameHub


Configure API Keys:

Open live.js and replace the placeholder value with your actual YouTube Data API key:

const API_KEY_streams = "YOUR_YOUTUBE_API_KEY";


Open script.js, genre.js, and search.js and replace the placeholder value with your actual RAWG API key:

const API_KEY = "YOUR_RAWG_API_KEY";


Run the Application:
Since this is a client-side application, you can simply open the index.html file in your web browser.

Alternatively, for development, use a local server extension (like Live Server in VS Code) to ensure all JavaScript modules and API calls function correctly.

🤝 Contribution

Feel free to fork the repository and submit pull requests. All suggestions and improvements are welcome!

[Project Name]
Developed by [Your Name or Team Name]
