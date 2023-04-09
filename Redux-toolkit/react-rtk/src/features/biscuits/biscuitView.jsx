import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {ordered,restoked} from './biscuitSlice'
import { useState } from 'react';
export const BiscuitView = () => {
    const [counts, setCounts] = useState({noofBis:0,noofBisRestock:0})
    const noOfBiscuits = useSelector((state)=> state.biscuit.noOfBiscuits)
    const dispatch = useDispatch();
    const orderHandler = (e) =>{
        dispatch(ordered(counts.noofBis));
        setCounts({ ...counts, noofBis: 0});
    }
    const restockHandler = () => {
        dispatch(restoked(counts.noofBisRestock));
        setCounts({ ...counts, noofBisRestock: 0 });
    }
    const changeHandler = (event) => {
        setCounts((counts) => ({
          ...counts,
          [event.target.name]: event.target.value,
        }));
        
      };
    return (
        <>
            <h1>biscuitView</h1>
            <h2>No of biscuit - {noOfBiscuits}</h2>
            <input value={counts.noofBis} onChange={changeHandler}  type='text' placeholder='no. of biscuits to be ordered' name='noofBis'/>
            <button onClick={orderHandler}>order biscuit</button> 
            <br />
            <input value={counts.noofBisRestock} type='text' onChange={changeHandler} placeholder='no. of biscuits to be restocked' name='noofBisRestock'/>
            <button onClick={restockHandler}>restock biscuit</button>
        </>
      )
}
