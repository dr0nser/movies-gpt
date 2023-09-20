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

export interface GalleryProps {
  title: string;
  cards: Movie[];
  customCSS?: string;
}

export interface ModalContextType {
  movie: Movie | null;
  viewModal: boolean;
  toggleViewModal: () => void;
  setModalMovie: (movie: Movie | null) => void;
}

export interface ErrorType {
  data: string;
  error: {
    message: string;
    stack: string;
  };
  internal: boolean;
  status: number;
  statusText: string;
}
