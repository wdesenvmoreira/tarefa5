import React from 'react'
import styled from 'styled-components'

const inputEntrada = styled.input`
    background:#333;
    color: #FFF;
    font-family: sans-serif;
    font-size: 18px;

`


function Login ({ thema }){

    return (
        <div>
            <input type='text' /><button onclick={inputEntrada} thema={()=>{console.log(thema)}}>Entrar</button>
        </div>
    )
}

export default Login