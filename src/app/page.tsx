'use client'

import { useEffect, useState } from 'react'

import { useOpenLibraryAPI, getBooksFromData } from '../data/api'
import { Books } from '@/data/types'
import { SearchContext } from './searchContext'

import Search from '../components/search'
import BookList from '../components/bookList'

const Home = () => {
  const [getBookData, bookData, errorMessage] = useOpenLibraryAPI()

  // Flags and functions for Search Context.
  // NOTE: This is where we could set the default value to be derived from somewhere else (e.g Redux, slug, querystring etc).
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const performSearch = () => {
    setIsSearching(true)
    setHasSearched(true)
    getBookData(searchTerm)
  }

  // This flag is used to define the app's initial state.
  const [hasSearched, setHasSearched] = useState<boolean>(false)
  
  // The core search result data.
  const [books, setBooks] = useState<Books>([])

  // The Book List UI is updated when the search API responds.
  useEffect(() => {
    setIsSearching(false)
    setBooks(getBooksFromData(bookData))
  }, [bookData])

  return <main>
    <h1>Books books books</h1>
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, performSearch, isSearching, setIsSearching }}>
      <Search />
    </SearchContext.Provider>
    {hasSearched && 
      <div>  
        {!errorMessage && isSearching && <p>Searching...</p>}
        {!errorMessage && !isSearching && <BookList books={books} />}
        {errorMessage && errorMessage.toString()}
      </div>
    }
  </main>
}

export default Home