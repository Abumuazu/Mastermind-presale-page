import React from 'react'
import back from "../Assests/headerImage.svg";
import Arrow from '../Assests/arrow.svg';
import "../styles/header.css"
// import Nav from "./nav"

import styled from "styled-components";

function Header() {
    return (
<div className= "cont"> 
<Nav><h3 >PRESALE IS HERE!...</h3></Nav>
<Wrapper className="header">
<div className = "text">
<h1>The New DeFi <br />Standard</h1>
<Button>
<h3>Buy Tokens </h3><img className="arrow" src={Arrow} alt ="arrow" />
</Button>
 </div>
 <div className = "img">
<img className="Mastermind" src={back} alt= "img" />
 </div>
</Wrapper>
</div>
    )
}

export default Header


 const Wrapper = styled.div`
height: 80vh;
display: flex;
justify-content: space-between;
align-items: center;

.text  {
    color: white;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 1000;
    margin-left: 10%;
    text-align: left;

}
.img{
    margin-right: 10%;
}
.arrow{
    margin-left: 15%;
}
.Mastermind{
    width: auto;
}
@media screen and (max-width:700px){
    height: 80vh;
    flex-direction: column;
    display: flex;
justify-content: center;
align-items: center;
.Mastermind{
display:none;
}
.text  {
    font-size: 1.5rem;
    text-align: center;
    margin: 10%;
}

}
`
const Button = styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1rem 1rem 1rem 1.5rem;
width: 60%;
height: 4.3rem;
background: transparent;
box-shadow: 0px 4px 22px 26px rgba(0, 0, 0, 0.25);
border-radius: 2rem;
color: white;
font-weight: bold;
border: 1px solid #43E8E1;
@media screen and (max-width: 700px) {
    width: 65%;
height: 4.5rem;
margin: 0 auto;
}
` 
const Nav = styled.div`
/* ANIM */
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 10px 0;
     animation: textslide 5s infinite alternate;
     margin: 0 auto;
     font-family: 'Poppins', sans-serif;
     font-weight: 700;
     font-size: 1.5rem;
     text-align: center;
     margin-top: 10px;
     letter-spacing: 2px;
     overflow: hidden;
     white-space: nowrap;
     color: white;
     /* color: #14213D; */
 
 @keyframes textslide {
     0%{
         width: 0ch;
         color: #14213D;
     }50%{
         width:60vw;
         color:#FCA311;
     }
 }
`
