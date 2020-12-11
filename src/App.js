import React, { Component, useState, useEffect} from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalLayout } from  './Components/Thema/globalStyle'

import { dark, light } from './Components/Thema/index'
import Login from './Components/login'



function App() {
  const [isLogin, setLogin] = useState('');
  const [thema, setThema] = useState(light);

    useEffect(()=>{
        if(!isLogin){
          setThema(dark)
        }else{
          setThema(light)
        }
      },[isLogin])
    
    
    function sign(event){
              setLogin(!isLogin);
               event.preventDefault();
               
          }



  return (
    <div className="App">
      <ThemeProvider theme={ thema }>
        <GlobalLayout/>

            <div className='grid-container'>
              <div className='grid-item'>
                <Login inputEntrada click={sign}/> 
              </div>
            </div>


      </ThemeProvider>
    </div>
  )
}

export default App;
