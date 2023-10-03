'use client'

import { useEffect, useState } from 'react'

import { useOpenLibraryAPI, getBooksFromData } from '../data/api'
import { Books } from '@/data/types'
import { SearchContext } from './searchContext'

import Search from '../components/search'
import BookList from '../components/bookList'

const App = () => {
  // Our core book list data.
  const [books, setBooks] = useState<Books>([])

  // Use a custom hook for calling the API and reading its bookData value.
  const [getBookData, bookData, errorMessage] = useOpenLibraryAPI()

  // Respond to changes of bookData to set our local state books.
  useEffect(() => {
    setIsSearching(false)
    setBooks(getBooksFromData(bookData))
  }, [bookData])

  // State and functions for Search Context.
  // This is where we could set the default value to be derived from 
  // somewhere else (like a slug/querystring) and have useEffect react.
  // We also add state management (e.g Redux) for storing history, caching etc.
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isSearching, setIsSearching] = useState<boolean>(false) // This should probably be part of the API Hook.
  const performSearch = () => {
    setIsSearching(true)
    setHasSearched(true)
    getBookData(searchTerm)
  }

  // This flag is used to define the app's initial state.
  // Tbh it would be best to break this out into a UI state to tidy up the JSX below.
  const [hasSearched, setHasSearched] = useState<boolean>(false)

  return <main className={'container mx-auto max-w-3xl py-24'}>
    <h1 className={'text-5xl text-center pb-12'}>Books!</h1>
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, performSearch, isSearching, setIsSearching }}>
      <Search />
    </SearchContext.Provider>
    {hasSearched && 
      <div>  
        {!errorMessage && isSearching && <p className={'text-sm py-4'}>Searching...</p>}
        {!errorMessage && !isSearching && <BookList books={books} />}
        {errorMessage && <p className={'py-4'}>{errorMessage.toString()}</p>}
      </div>
    }
  </main>
}

export default App