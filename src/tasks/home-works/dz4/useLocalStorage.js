import { useState } from 'react'

export const useLocalStorage = (initialKey = 'defaultKey', initialValue = 'defaultValue') => {

  const [storedValue, setStoredValue] = useState(
    () => {
      try {
        localStorage.setItem(initialKey, JSON.stringify(initialValue))

        const item = localStorage.getItem(initialKey)

        return item ? JSON.parse(item) : initialValue
      } catch (error) {
        console.log(error)
        return initialValue
      }
    })

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      localStorage.setItem(initialKey, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
