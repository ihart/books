import { createContext } from 'react'

type SearchTerm = {
  searchTerm: string
  setSearchTerm: (s:string) => void
  performSearch: () => void
  isSearching: boolean
  setIsSearching: (f:boolean) => void
}

const initialValue = {
  searchTerm: '',
  setSearchTerm: () => {},
  performSearch: () => {},
  isSearching: false,
  setIsSearching: () => {}
}

export const SearchContext = createContext<SearchTerm>(initialValue)