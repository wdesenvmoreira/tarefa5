import React, { Compent, useState, useEffect} from 'react'
import { ThemeConsumer } from 'styled-components'
import Login from './Components/login'

import  * as themas from './Components/Thema'
import Context from './Components/Thema/context'

function App() {
const themas = ThemeConsumer.dark
  const [state, setState] = useState(themas.dark)

 useEffect(()=>{
  setState(themas.dark? themas.light:themas.dark)
 },[themas])



  return (
    <div className="App">
      <Context.Provider value = {state}>
      <Context.Consumer>
          {theme =>{
            <Login inputEntrada= {state} theme={state}/> 
          }}
                
      </Context.Consumer>

      
      </Context.Provider>
    </div>
  );
}

export default App;
