export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path?: string; // required for cards display in gallery
  genres: string[];
  duration: string;
  release_date: string;
  rating: number;
  total_ratings: number;
  trailerUrl: string;
  logoUrl?: string; // required for banner
  backdropUrl?: string; // required for movie details if trailer unavailable
}

export interface GalleryType {
  name: string;
  data: Movie[];
}

export interface SearchResultProp {
  movies: Movie[];
}
