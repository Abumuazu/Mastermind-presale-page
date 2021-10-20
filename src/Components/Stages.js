import React from 'react'
import styled from "styled-components";
import Image from "../Assests/stageImage.svg"
import "../styles/stages.css"
import Arrow from "../Assests/arrow.svg"
import Range from "../Assests/range.svg"

function Stages() {
    return (
      <Section >
        
       <div className="container ">
       <Head>Presale Stages </Head>
<Wrap>
<div>
<div className="box">
       <BorderBottom>
           <h3> 1 MMD = $0.065</h3> <h3> Stages= 3</h3> 
       </BorderBottom>
       <h2>Each stage contains 1.5 million token </h2>
       <h2>Total Token available for sale = 4.5 Million </h2>
       <img className="range" src={Range} alt="range" />
       <Button>
       <h3>Buy Tokens </h3><img className="arrow" src={Arrow} alt ="arrow" />
       </Button>
       </div>
</div>
{/* <div className="stages">
<div className="stage-box">
<h3>Stage 1</h3>
<p>buyers will get a bonus of 1 dex token for every  5 MMD bought</p>
</div>
<div className="stage-box">
<h3>Stage 2</h3>
<p>buyers will get a bonus of 1 dex token for every  10 MMD bought</p>
</div>
<div className="stage-box">
<h3>Stage 3</h3>
<p>buyers will get a bonus of 1 dex token for every  20 MMD bought</p>
</div>
</div> */}
</Wrap>


       </div>
       </Section>  
      
    )
}

export default Stages

const Section = styled.div`
@media screen and (max-width: 700px) {
    margin-top: 80%;
}
`
const Head =  styled.h1`
font-size: 3rem;
    text-align: center;
    color: white;

`;
const Wrap = styled.div`
.range{
    width: 100%;
    margin-top: 10%;
}
.arrow{
    margin-left: 15%;
}
.box{
width: 100%;
min-width: 20%;
height: 80%;
margin: 0 auto;
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


height: 100vh;
color: white;
display: flex;
justify-content:space-between;
align-items: center;
h3 {
font-size: 2rem;
}

p{
    font-size: 1.2rem;
    line-height: 3rem;
}
.stages{
    margin-right: 10%;
}
@media screen and (max-width: 700px) {
    flex-direction: column;
    .stages{
    padding:2rem
}
    .image{
        /* width: 80%; */
        display: none;
    }
}
`
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

