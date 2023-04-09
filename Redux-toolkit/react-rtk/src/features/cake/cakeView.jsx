import React from 'react'
import { useSelector } from 'react-redux'
export const CakeView = () => {
    const noOfCake = useSelector((state)=> state.cake.noOfCakes)
  return (
    <>
        <h1>cakeView</h1>
        <h2>No of cakes - {noOfCake} </h2>
        <button>order cake</button>
        <button>restock cake</button>
    </>
  )
}
