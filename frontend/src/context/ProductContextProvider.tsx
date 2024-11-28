import { createContext } from 'react'
import cars from '../data.json'

export const ProductContext=createContext(cars)
export const ProductContextProvider = (props:any) => {
  return (
    <ProductContext.Provider value={cars}>
        {props.children}
    </ProductContext.Provider>
  )
}
