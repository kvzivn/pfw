import React, { useState, useEffect } from 'react'

const ageContext = React.createContext()

const initialState = JSON.parse(localStorage.getItem('pfwAge')) || false

const AgeProvider = ({ children }) => {
  const [validAge, setValidAge] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('pfwAge', validAge)
  }, [validAge])

  return (
    <ageContext.Provider value={{
      validAge,
      setAge: () => setValidAge(true)
    }}>
      {children}
    </ageContext.Provider>
  )
}

const useAgeState = () => React.useContext(ageContext)

export { AgeProvider, ageContext, useAgeState }