import { createContext, useState } from "react"

export const WebContext = createContext()

const WebContextProvider = ({children}) => {

  const [principalColor, setPrincipalColor] = useState('#e9d5ff')

  return (
    <WebContext.Provider value={{
      principalColor, setPrincipalColor
    }}>
      {children}
    </WebContext.Provider>
  )
}

export default WebContextProvider