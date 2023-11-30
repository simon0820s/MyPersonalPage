import { createContext, useEffect, useState } from "react"

export const WebContext = createContext()

const WebContextProvider = ({ children }) => {

  const [principalColor, setPrincipalColor] = useState('e9d5ff')
  const [imgSuffix, setImageSuffix] = useState('p')

  useEffect(() => {

    const delay = setTimeout(() => {

      switch (principalColor) {
        case 'e9d5ff':
          setImageSuffix('p')
          break;
        case 'fe7272':
          setImageSuffix('r')
          break;
        case 'a1e0f7':
          setImageSuffix('b')
          break;
        default:
          setImageSuffix('p')
      }

    }, 1000)

    return () => clearTimeout(delay)

  }, [principalColor])

  return (
    <WebContext.Provider value={{
      principalColor, setPrincipalColor, imgSuffix
    }}>
      {children}
    </WebContext.Provider>
  )
}

export default WebContextProvider