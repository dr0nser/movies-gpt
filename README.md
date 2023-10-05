# MoviesGPT

An **AI** powered movie suggesting and searching platform. MoviesGPT uses GPT 3.5 Turbo engine and TMDB API to provide users with a Netflix like experience.

Live Link: [https://movies-gpt-two.vercel.app/](https://movies-gpt-two.vercel.app/)

### Backend

MoviesGPT is powered by the [MoviesGPT API](https://github.com/dr0nser/movies-gpt-backend) that performs:

- server-side authentication for every request
- fetches data from other sources,
- filters required data,
- organizes and combines the data from various sources to create a sensible data for the frontend and sends it.

[View MoviesGPT API](https://github.com/dr0nser/movies-gpt-backend)

### Tech Stack

- React
- Typescript
- TailwindCSS
- Firebase
- React Query
- Axios
- Framer Motion

### Features

- Movie suggestions based on the current movie trends organized in different categories: trending, top-rated, and upcoming releases. The recommendations are based on the most recent data from the TMDB API.
- Immersive movie cards with loading and hover animations displaying movie image. Upon click, it displays the movie details modal displaying complete movie information while playing the trailer.
- Skeleton UI that displays placeholder content while the actual component loads for a better UX.
- MoviesGPT uses framer-motion to animate page transitions to ensure a visually appealing and smooth user experience.
- Discover movies based on promts with the intelligent search page. It generates movie suggestions based on your prompts using OpenAI’s GPT 3.5 Turbo model.
- MoviesGPT uses Google Authentication to ensure a smooth login experience.
