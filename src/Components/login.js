import React from 'react'
import styled from 'styled-components'
import { useState, useEffect} from 'react'




function Login (props){
  

    return (
        <div>
            <h3>Sign up to my newsletter</h3>
            <input className='input-text' type='text' value='my@email.com' /><button className='button-click' onClick={props.click}>Sign up</button>
        </div>
    )
}

export default Login