/*
Spesifikasi: 
- Context memiliki value 
  ```JSON
  {
    user: {
        id, // user id
        name, // user name
        image, // user image
    },
    setUser, // function untuk mengubah user
    isLoggedIn, // status apakah user telah login
    setIsLoggedIn, // function untuk mengubah status isLoggedIn
  }
  ```
- Provider yang memberikan semua value tersebut
*/ 
import { createContext, useState } from "react"

export const SessionContext = createContext({
  // TODO: answer here
  user: {
    id: null,
    name: null,
    image: null,
  },
  setUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
})

export const SessionProvider = ({ children }) => {
  // TODO: answer here
  const [user, setUser] = useState({
    id: null, 
    name: null,
    image: null,
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <SessionContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
