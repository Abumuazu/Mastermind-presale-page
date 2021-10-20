import React from 'react'
import "./footer.css"
import Logo from "../../Assests/logo2.png"

function footer() {
    return (
        <div>
           <div className="footer">
  <div className="inner-footer">

{/* <!--  for company name and description --> */}
    <div className="footer-items">
      <img className= "logo" src={Logo} alt = "logo" />
      <p>Master Mind (MMD) token 
is a decentralized digital 
currency that is design 
with a community-first 
approach to providing 
alternative solutions to the 
finance challenges faced 
today. The currency was 
built with the aim to 
utilize the collective 
strength of her community 
and blockchain technology 
to improve the bargaining 
strength of every 
individual.</p>
    </div>

{/* <!--  for quick links  --> */}
    <div className="footer-items">
      <h3>Quick Links</h3>
      {/* <!--for the underline --> */}
      <div className="border1"></div>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Search</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
    </div>

{/* <!--  for some other links --> */}
    <div className="footer-items">
      <h3>Recipes</h3>
      {/* <!--for the underline --> */}
      <div className="border1"></div>  
        <ul>
          <a href="#"><li>Indian</li></a>
          <a href="#"><li>Chinese</li></a>
          <a href="#"><li>Mexican</li></a>
          <a href="#"><li>Italian</li></a>
        </ul>
    </div>

{/* <!--  for contact us info --> */}
    <div className="footer-items">
      <h3>Contact us</h3>
      <div className="border1"></div>
        <ul>
          <li><i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc</li>
          <li><i className="fa fa-phone" aria-hidden="true"></i>123456789</li>
          <li><i className="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com</li>
        </ul> 
      
{/* <!--   for social links --> */}
        <div className="social-media">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-google-plus-square"></i></a>
        </div> 
    </div>
  </div>
  
{/* <!--   Footer Bottom start  --> */}
  <div className="footer-bottom">
    Copyright &copy; Mastermind 2020.
  </div>
</div>
  
   
        </div>
    )
}

export default footer
