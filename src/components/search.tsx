'use client'

import { useContext, useState } from 'react'
import { SearchContext } from '../app/searchContext'

const Search = () => {
  const {searchTerm, setSearchTerm} = useContext(SearchContext)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return <div>
    <label className={'block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'} htmlFor={'search-term'}>
      Search by book title:
    </label>
    <input className={'bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'} id={'search-term'} type={'text'} onChange={handleChange} value={searchTerm} />
    <button className={'shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'} type="button">
      Search
    </button>
  </div>
}

export default Search