import { createContext } from "react"



export const ViewPanelContext = createContext();
const entro = "Hola Mundo"
export function ContentPanelProvider({children}) {
  return (
    <>
    <ViewPanelContext.Provider
    Value={console.log(entro)}
    >
        {children}
    </ViewPanelContext.Provider>
    </>
  )
}
