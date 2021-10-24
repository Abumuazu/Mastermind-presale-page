import React from 'react'
import "./footer.css"

function footer() {
    return (
        <div>
           <div className="footer">
           
           <div class="rounded-social-buttons">
                    <a className="social-button facebook" href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a className="social-button twitter" href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a className="social-button linkedin" href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a className="social-button youtube" href="#" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a className="social-button instagram" href="#" target="_blank"><i className="fab fa-instagram"></i></a>
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
