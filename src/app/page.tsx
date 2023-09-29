'use client'

import { useState } from 'react'

import { SearchContext } from './searchContext'
import Search from '../components/search'

const Home = () => {
  // TODO: Optimise with useMemo and useCallback.
  // NOTE: This is where we could set the default value to be derived from somewhere else (e.g Redux, slug, querystring etc).
  const [searchTerm, setSearchTerm] = useState<string>('')

  return <main>
    <h1>Books books books</h1>
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <Search />
    </SearchContext.Provider>
  </main>
}

export default Home