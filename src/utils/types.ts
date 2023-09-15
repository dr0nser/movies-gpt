export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface BannerMovie {
  id: number;
  overview: string;
}

export interface BannerMovieLogo {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Trending {
  // Common
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  media_type?: string;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;

  // TV Show
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country?: string[];

  // Movie
  title?: string;
  original_title?: string;
  release_date?: string;
  video?: boolean;
}

export interface GalleryProps {
  title: string;
  cards: Trending[];
  customCSS?: string;
}

export interface GalleryCardProp {
  card: Trending;
}
