import { useState } from 'react'

import { APIData } from './types'

const useOpenLibraryAPI = (): [() => void, APIData | null, TypeError | null] => {
  const [data, setData] = useState<APIData | null>(null)
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

export {
  useOpenLibraryAPI
}