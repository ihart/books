'use client'

import { useContext, useState } from 'react'
import { SearchContext } from '../app/searchContext'

const Search = () => {
  const {searchTerm, setSearchTerm, performSearch, isSearching} = useContext(SearchContext)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === 'enter') {
      performSearch()
    }
  }

  return <div className={'flex items-center'}>
    <label className={'text-gray-500 font-bold md:text-right md:mb-0 pr-4'} htmlFor={'search-term'}>
      Search by book title:
    </label>
    <input className={'flex-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'} id={'search-term'} type={'text'} onChange={handleChange} onKeyDown={handleKeyDown} value={searchTerm} />
    <button className={'ml-4 shadow bg-blue-500 disabled:bg-gray-400 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'} onClick={performSearch} type="button" disabled={isSearching}>
      Search
    </button>
  </div>
}

export default Search