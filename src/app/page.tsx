'use client'

import { useEffect, useState } from 'react'

import { useOpenLibraryAPI, getBooksFromData } from '../data/api'
import { Books } from '@/data/types'
import { SearchContext } from './searchContext'

import Search from '../components/search'
import BookList from '../components/bookList'

const Home = () => {
  const [getBookData, bookData, errorMessage] = useOpenLibraryAPI()

  // TODO: Optimise with useMemo and useCallback.
  // NOTE: This is where we could set the default value to be derived from somewhere else (e.g Redux, slug, querystring etc).
  const [searchTerm, setSearchTerm] = useState<string>('')

  const [books, setBooks] = useState<Books>([])
  const [isSearching, setIsSearching] = useState<Boolean>(false)
  const [hasSearched, setHasSearched] = useState<Boolean>(false)

  const performSearch = () => {
    setIsSearching(true)
    setHasSearched(true)
    getBookData(searchTerm)
  }

  useEffect(() => {
    setIsSearching(false)
    setBooks(getBooksFromData(bookData))
  }, [bookData])

  return <main>
    <h1>Books books books</h1>
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, performSearch }}>
      <Search />
      {!errorMessage && isSearching && <p>Searching...</p>}
      {!errorMessage && !isSearching && hasSearched && <BookList books={books} />}
      {errorMessage && errorMessage.toString()}
    </SearchContext.Provider>
  </main>
}

export default Home