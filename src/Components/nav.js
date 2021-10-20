import React from 'react'
import Logo from "../Assests/logo2.png";
import styled from "styled-components"

function nav() {
    return (
       <Wrapper>
             <img className="logo" src={Logo} alt="logo" />
          {/* <Button>
          <h3>Connect Wallet</h3>
          </Button> */}
       </Wrapper>
    )
}

export default nav

const Wrapper = styled.div`
height: 5vh;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 5%;
margin-top: 2%;
.logo{
    width:24%;
}
@media screen and (max-width: 700px) {
    margin-top: 10%;
    .logo{
    width:54%;
}
}
`
export const Button = styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1rem 1rem 1rem 1.5rem;
width: 13%;
height: 4.3rem;
background: transparent;

border-radius: 2rem;
color: white;
font-weight: bold;
border: 1px solid #43E8E1;
@media screen and (max-width: 700px) {
    width: 45%;

}
` 
