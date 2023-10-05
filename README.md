## <span style="background-image: linear-gradient(45deg, #dc2626, #ffa500);background-size: 100%;-webkit-background-clip: text;-moz-background-clip: text;-webkit-text-fill-color: transparent;-moz-text-fill-color: transparent;font-weight: bold;font-size: 40px;">MoviesGPT</span>

An <span style="background-image: linear-gradient(#dc2626, #ffa500);background-size: 100%;-webkit-background-clip: text;-moz-background-clip: text;-webkit-text-fill-color: transparent;-moz-text-fill-color: transparent;font-weight: bold;font-size: 20px;">AI</span> powered movie suggesting and searching platform. MoviesGPT uses GPT 3.5 Turbo engine and TMDB API to provide users with a Netflix like experience.

It is powered by the <a href="https://github.com/dr0nser/movies-gpt-backend" target="_blank">MoviesGPT API</a> that performs:

- server-side authentication for every request
- fetches data from other sources,
- filters required data,
- organizes and combines the data from various sources to create a sensible data for the frontend and sends it.

<a style="font-size: 16px; font-weight: 600;" href="https://github.com/dr0nser/movies-gpt-backend" target="_blank">View MoviesGPT API</a>

## Tech Stack

- React
- Typescript
- TailwindCSS
- Firebase
- React Query
- Axios
- Framer Motion

## Features

- Movie suggestions based on the current movie trends organized in different categories: trending, top-rated, and upcoming releases. The recommendations are based on the most recent data from the TMDB API.
- Immersive movie cards with loading and hover animations displaying movie image. Upon click, it displays the movie details modal displaying complete movie information while playing the trailer.
- Skeleton UI that displays placeholder content while the actual component loads for a better UX.
- MoviesGPT uses framer-motion to animate page transitions to ensure a visually appealing and smooth user experience.
- Discover movies based on promts with the intelligent search page. It generates movie suggestions based on your prompts using OpenAI’s GPT 3.5 Turbo model.
- MoviesGPT uses Google Authentication to ensure a smooth login experience.
