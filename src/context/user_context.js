import React, { useContext, useEffect, useState } from 'react'
//import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      setUser()
    } else {
      setUser(null)
    }
  }, [isAuthenticated])

  return (
    <UserContext.Provider value={{ isAuthenticated }}>
      {children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
