import { useState } from 'react'

import { Book, APIData } from './types'

const initialData:APIData = {
  start: null,
  num_found: null,
  docs: []
}

export const useOpenLibraryAPI = (): [() => void, APIData, TypeError | null] => {
  const [data, setData] = useState<APIData>(initialData)
  const [errorMsg, setErrorMsg] = useState<any>(null)

  const getData = async () => {
    try {
      const data = await(await fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings')).json()
      setData(data)
      setErrorMsg(null)
    } catch (error) {
      setErrorMsg(error)
    }
  }

  return [getData, data, errorMsg]
}

export const getBooksFromData = (data: APIData) => {
  return data.docs
}