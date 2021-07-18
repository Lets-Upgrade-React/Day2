import React, { useState } from 'react';
import { FaMinusCircle , FaPlusCircle } from 'react-icons/fa';
import './App.css';

function App() {

    const [count, setcount] = useState(0)
    const [msg, setMsg] = useState("")

    const add = () => {
        if(count===25){
            setMsg("Count can't be larger than 25!")
            return
        }
        setcount(count+1)
        setMsg('')
    }
    const sub = () => {
        if(count===0){
            setMsg("Count can't be less than 0!")
            return
        }
        setcount(count-1)
        setMsg('')
    }
    return (
        <div className='container'>
            <h1 className='text-center'>
                Let's Upgrade React.JS
            </h1>
            <h2 className='text-center'>
                Day 2 Assignment
            </h2>
            <h3 className='text-center'>
                Counter App
            </h3>
                
            <p style={{fontSize:'20px'}}>Count:  <button onClick={sub} style={{border:'none', background:'#fff'}}><FaMinusCircle size='18' style={{marginBottom:'-1px', color:'red'}}/></button> {count} <button onClick={add} style={{border:'none', background:'#fff'}}><FaPlusCircle size='18' style={{marginBottom:'-1px', color:'green'}}/></button></p>                
            <p style={{color:'red'}}>{msg}</p>

        </div>
    );
}

export default App;
