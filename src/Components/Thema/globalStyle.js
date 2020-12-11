import { createGlobalStyle } from "styled-components"

export const GlobalLayout = createGlobalStyle`
body{
    background: ${({ theme})=> theme.body};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
    
    .grid-container {
        display: grid;
        grid-tamplate-columns: auto;
        background-color:${({ theme})=> theme.background};
        padding: 10px; 
        border-style: solid;
        border-color: ${({ theme})=> theme.color};
    }

    .grid-item{
        color: ${({ theme})=> theme.text};
        border: 1px rgba(0,0,0,0.8);
        padding: 15px;
        font-size: 30px;
        text-align: center;
    }

    .input-text{
        background:${({ theme})=> theme.background};
        color: ${({ theme})=> theme.color};
        font-size:4vh;
        height:5vh;
    }

    .button-click{
        background:${({ theme})=> theme.color};
        color: ${({ theme})=> theme.background};
        font-size:4vh;
        border:0px;
        height:6vh;
    }

}
`

