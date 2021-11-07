import React from 'react'
import "./footer.css"
import styled from "styled-components";

function footer() {

  return (
  <div className="footer">
          
    {/* <!--   Footer Bottom start  --> */}
    <div className="footer-bottom">
    <h4> Copyright &copy; Mastermind 2020.</h4>
    <Button > <a id = "back" href="https://mastermindtoken.com/">Back to Mastermind Page</a> </Button>
    </div>
  </div>
  );
  
}

export default footer
const Button = styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1rem 1rem 1rem 1.5rem;
width: 15%;
height: 3.3rem;
background: transparent;
box-shadow: 0px 4px 22px 26px rgba(0, 0, 0, 0.25);
border-radius: 2rem;
color: white;
font-weight: bold;
font-size: 12px;
border: 1px solid #43E8E1;
cursor: pointer;
@media screen and (max-width: 700px) {
  font-size: 8px;
    width: 40%;
height: 2.5rem;
margin: 0 auto;
font-weight: 800;
}
` 