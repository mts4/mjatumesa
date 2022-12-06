import { useRef, useEffect } from 'react'

export const useClickOutElement = callback => {
  const ref = useRef()

  useEffect(() => {
    const handleClick = event => {
      // If click outside element ref
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    document.addEventListener('click', handleClick, true)

    return () => document.removeEventListener('click', handleClick, true)
  }, [ref])

  return ref
}
