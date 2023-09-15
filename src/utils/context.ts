import { createContext } from "react";

export const SearchContext = createContext({
  searchEnabled: false,
  toggleSearchEnabled: () => {},
});
