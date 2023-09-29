import { createContext } from 'react'

type SearchTerm = {
  searchTerm: string,
  setSearchTerm: (s:string) => void
}

const initialValue = {
  searchTerm: '',
  setSearchTerm: () => {}
}

export const SearchContext = createContext<SearchTerm>(initialValue)