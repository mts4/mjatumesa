import { useState, useEffect } from 'react'

export const useFetchData = (
  BASE_URL = '',
  errorMsg = 'An error has ocurred getting the data'
) => {
  const [fetchData, setFetchData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      // Pedimos los datos a la api
      try {
        const response = await window.fetch(BASE_URL)
        if (!response.ok) {
          throw new Error(`Http status ${response.status}`)
        }
        const data = await response.json()
        setFetchData(data)
        console.log(data)
      } catch (error) {
        console.error(error.message)
        setError(errorMsg)
      }
      setLoading(false)
    }
    fetchData()
  }, [BASE_URL]) // Hacer enfasis en la url
  return { data: fetchData, loading, error }
}
