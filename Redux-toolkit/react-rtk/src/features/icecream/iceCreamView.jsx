import React from 'react'
import { useSelector } from 'react-redux'
export const IceCreamView = () => {
  const noOfIceCream = useSelector((state)=> state.icecream.noOfIceCream)
  return (
    <>
         <h1>IceCreamView</h1>
        <h2>No of IceCream - {noOfIceCream} </h2>
        <button>order IceCream</button>
        <button>restock IceCream</button>
    </>
  )
}
