import { createContext } from 'react'

type SearchTerm = {
  searchTerm: string,
  setSearchTerm: (s:string) => void
  performSearch: () => void
}

const initialValue = {
  searchTerm: '',
  setSearchTerm: () => {},
  performSearch: () => {}
}

export const SearchContext = createContext<SearchTerm>(initialValue)