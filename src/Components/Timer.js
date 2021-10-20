import React from 'react';
import styled from "styled-components"
import "../styles/reason.css"
import icon1 from "../Assests/icon1.svg"
import icon2 from "../Assests/icon2.svg"
import icon3 from "../Assests/icon3.svg"
import Range from "../Assests/range.svg"
import Arrow from '../Assests/arrow.svg';
import Image from "../Images/287877.png";

function Timer() {
    return (
       <Container className= "Timer">
       <div className="reason"> 
       <h4 className= "header-text">  Why You Should  Choose MMD Token</h4>
       <div className="reason-box1">

   <h4>All proceeds from presale will go into providing liquidity that will be will be permanently changed </h4> 

       </div>
<span><h3 style={{color: "#fff"}}>See Proof Below</h3></span>
  <Button>
  
<h4>Contract Link </h4><img className="arrow" src={Arrow} alt ="arrow" />
</Button>
   
       {/* <div className="reason-box1">
       <img className="icon" src={icon2} alt ="icon1" /> <h4>Mastermind will power the Mastermind NFT platform. This will provide a real use case for Mastermind token.</h4>
</div> */}
   {/* <div className="reason-box1">
   <img className="icon" src={icon3} alt ="icon1" /> <h4>Hodlers will get rewarded for hodling. Rewards will come from fees on the network and ecosystem.</h4>
</div> */}
       </div>

       <div className="box">
       {/* <h1 className= "header-text1"> Time To Presale </h1>
       <div className="count-down">
           <div className="div">
           <h4></h4>
            </div> <h1 className="count-separator">:</h1>
            <div className="div">
           <h4></h4>
            </div> <h1 className="count-separator">:</h1>
            <div className="div">
           <h4></h4>
            </div><h1 className="count-separator">:</h1>
            <div className="div">
           <h4></h4>
            </div>
       </div>
       <BorderBottom>
           <h3> 1 MMD = $0.065</h3> <h3> Stages= 3</h3> 
       </BorderBottom>
       <h3>Each stage contains 1.5 million token </h3>
       <h3>Total Token available for sale = 4.5 Million </h3>
       <img className="range" src={Range} alt="range" />
       <Button>
       <h3>Buy Tokens </h3><img className="arrow" src={Arrow} alt ="arrow" />
       </Button> */}
       <img className="lock" src= {Image} alt="image"/>
       </div>

       </Container>
    )
}

export default Timer

const BorderBottom = styled.div`
/* margin-top: 10%; */
border-bottom: 1px solid white;
display: flex;
justify-content: space-between;
`

const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: flex-start;
.range{
    width: 100%;
    margin-top: 10%;
}
.arrow{
    margin-left: 15%;
}
.lock{
    width: 100%;
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
.count-down{
    display: flex;
}
.count-separator{
    margin: 1.3rem .5rem;
}
.reason {
    margin-left: 10%;
    margin-right: 20%;
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
  box-shadow: 0px 4px 26px 22px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  font-size: 1.2rem;
  font-weight: normal;
line-height: 2rem;
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
  box-shadow: 0px 4px 26px 22px rgba(0, 0, 0, 0.25);
  filter: blur(10px);
  margin-top: 20px;
  margin-bottom: 20px;
}
@media screen and (max-width: 700px) {
    margin-top: 55%;
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
`

export const Button = styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1rem 1rem 1rem 1.5rem;
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
margin: 0 auto;

}
` 


