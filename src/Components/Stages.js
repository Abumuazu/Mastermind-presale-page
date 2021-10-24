
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
       <h4 className= "header-text">  How To Buy</h4>

       <div className="reason-box1">

       <List className="list">
           <div className="list__number">
               1
           </div>
           <h5 className= "list___header"> Create a MetaMask wallet </h5>
           <h5 className="list__paragraph">Download the MetaMask app from IOS/Google playstore. Create a wallet after downloading the MetaMask app.</h5>
          
      </List>
      <Border />
      <List className="list">
           <div className="list__number">
               2
           </div>
           <h5 className= "list___header">Switch to Fantom Opera Mainnet</h5>
           <h5 className="list__paragraph">Visit <a href="https://chainlist.org/">chainlist.org</a><br /> i. type Fantom opera on the search column.<br />
 ii. Switch your wallet network to the Fantom network by clicking the connect icon and approve button to switch network automatically.</h5>
          
      </List>
      <Border />
      <List className="list">
           <div className="list__number">
               3
           </div>
           <h5 className= "list___header">Send Fantom to your wallet</h5>
           <h5 className="list__paragraph"> You can buy Fantom (FTM) and transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, Okexx and Huobi etc. Make sure to use the FTM - Fantom network when transfering FTM.</h5>
          
      </List>
      <Border />
      <List className="list">
           <div className="list__number">
               4
           </div>
           <h5 className= "list___header"> Connect to the presale smart contract </h5>
           <h5 className="list__paragraph"> Click on buy icon to on the presale page to connect to the presale smart contract.

<br /> <br /><strong>Swap ETH for SHIB, LEASH or BONE</strong></h5>
          
      </List>
      <Border />
      <List className="list">
           <div className="list__number">
               5
           </div>
           <h5 className= "list___header">Swap FTM for MMD</h5>
           <h5 className="list__paragraph"> You can swap as soon as you have FTM available! There is a maximum individual cap of 2000 FTM and no minimum cap.</h5>
          
      </List>
      <Border />

       </div>


       </div>

       <div className="box">
      
       <BorderBottom>
           <h3> 1 MMD = $0.065</h3> <h3> Stages= 3</h3> 
       </BorderBottom>
       <h3>Each stage contains 1.5 million token </h3>
       <h3>Total Token available for sale = 4.5 Million </h3>
       <img className="range" src={Range} alt="range" />
       <Button>
       <h3>Buy Tokens </h3><img className="arrow" src={Arrow} alt ="arrow" />
       </Button>
       {/* <img className="lock" src= {Image} alt="image"/> */}
       </div>

       </Container>
    )
}

export default Timer

const BorderBottom = styled.div`
border-bottom: 1px solid white;
display: flex;
justify-content: space-between;
`
const Border= styled.div`
border-bottom: .1px solid #ECECEC;
margin:0 auto;
`

const List= styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.list__number{
    width:40px;
height:40px;
border-radius:50px;
background-color: transparent;
border: 1px solid #43E8E1;
color: white;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 30px;
}
.list__paragraph{
    font-weight: 300;
    text-align: center;
    margin-top: -2px;
    line-height: 1.2rem;
}
`

const Container = styled.div`
height: 120vh;
display: flex;
justify-content: center;
align-items: center;
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
animation: slide-left 3000ms;
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
    animation: slide-in 2000ms;
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
text-align: center;
}
.reason-box1 {
  width: 95%;
  height: 65vh;
  overflow-y: scroll;
  min-width: 70%;
  box-shadow: 0px 4px 26px 22px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: relative;
  z-index: 1;
  background: inherit;
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  padding: 25px;
  font-size: 1.2rem;
  font-weight: normal;
  text-align: center;
/* line-height: 1.5rem; */
}
li{
    line-height: 1rem;  
}
/* h5 {
    line-height: .2rem;  
} */
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
    
padding:20px;
    margin: 0px;
}
.reason-box1{
    padding-left: 10px;
}
.box{
    margin-left: 5%;
    margin-right:5%;
width: 70%;

}
.header-text {
text-align: center;
margin-top:-8rem;
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


