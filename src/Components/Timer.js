import React from 'react';
import styled from "styled-components";
import "../styles/reason.css";
import icon1 from "../Assests/icon1.svg";
import icon2 from "../Assests/icon2.svg";
import icon3 from "../Assests/icon3.svg";
import Range from "../Assests/range.svg";
import Arrow from '../Assests/arrow.svg';
import Image from "../Images/2878777.png";
import PresaleUpdate from './PresaleUpdate';

function Timer({ showModal }) {

  function handleClick(){
    showModal(true);
  }
    return (

      <Container className= "Timer">
       
        <div className="reason one">
          <h4 className= "header-text"> </h4>
          <div className="reason-box1">
            <h6 style= {{color: '#FCA311'}} id="anima">All proceeds from the presale will be used to provide liquidity that will be permanently locked on spooky swap. </h6>
            <PresaleUpdate/>
          </div>
          <span>
            <h3 style={{color: "#fff"}}>See Proof Below</h3>
          </span>
          <Button onClick={handleClick}>
            <h4>Contract Link </h4><img className="arrow" src={Arrow} alt ="arrow" />
          </Button>
     
        </div>
        <div className="box two">
       
          <img className="lock" src= {Image} alt="image"/>
        </div>

      </Container>
    )
}

export default Timer


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

const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
#anim{
  color: black
}
@media screen and (max-width: 531px) {
    /* .container { display: flex; flex-flow: column; } */
    .two { order: 1; }
    .one { order: 2 }
}
.arrow{
    margin-left: 15%;
}
.lock{
    width: 80%;
    animation: grow-and-shrink 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
.box{
width: 100%;
min-width: 25%;
height: 55%;
  box-shadow: 0px 4px 26px 22px rgba(0, 0, 0, 0.25);
  border-radius: 1.3rem;
  position: relative;
  z-index: 1;
  background: inherit;
  /* overflow: hidden; */
  margin-right: 10%;
  color: white;
  padding: 20px;
  font-size: 14px;
  font-weight: normal;
    line-height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box:before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 4px 26px 22px rgba(0, 0, 0, 0.25);
  filter: blur(10px);
}
.div{
width: 20%;
height: 4rem;
background: transparent;
border: 1px solid #43E8E1;
}

.reason {
    margin-left: 10%;
    margin-right: 20%;
    text-align: center;
    display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.header-text1{
    text-align: center;
}
.header-text {
font-style: normal;
font-weight: bold;
font-size: 1.5rem;
line-height: 150%;
color: white;
}
.reason-box1 {
  width: 95%;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
  /* margin-top: 10px;
  margin-bottom: 10px; */
  color: white;
  font-size:1.8rem;
  font-weight: 200;
line-height: 2rem;
text-align: center;
}
.icon{
    margin-right: 20px
}
.reason-box1:before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: blur(10px);
  margin-top: 10px;
  margin-bottom: 10px;
}
@media screen and (max-width: 700px) {
    margin-top: 25%;
    flex-direction: column;
    .reason {
    margin-left: 10%;
    margin-right:10%;
}
.box{
margin: 0 auto;
width: 70%;

}
.header-text {
text-align: center;
}
}
@keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  @keyframes slide-left {
    from {
      transform: translateY(-500%);
    }
    to {
      transform: translateY(0%);
    }
  }
  @keyframes grow-and-shrink {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const Button = styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
cursor: pointer;
padding: 1rem 1rem 1rem 1.5rem;
margin: 0 auto;
width: 60%;
height: 4.3rem;
background: transparent;
border-radius: 2rem;
color: white;
font-weight: bold;
border: 1px solid #43E8E1;
margin-top: 10%;
@media screen and (max-width: 700px) {
    
width: 75%;
height: 4rem;
margin: 1.5rem 0 1.5rem 0;

}
` 


