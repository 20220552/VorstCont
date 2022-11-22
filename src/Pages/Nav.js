import banner from '../Assets/VA-Name.png'
import speratorbar from '../Assets/VA-BarX2.jpg'

import '../App.css';
import { NavLink, Outlet } from "react-router-dom";
import { css } from '@emotion/react'
/** @jsxImportSource @emotion/react */
 


const Nav =() => {

    return(
    <div className="Nav-wrapper">

        <div className="pc-display">
                <div className="spacer-nav-pc">
                <div className="logo-nav-pc">
                    <img src={banner} className="logo-pc" alt="logo" />
                    <div className="nav-options">
                    <NavOptions />
                    </div>
                    
                    </div> 
                    <div className="spacer">
                    <img className="spacer-img" src={speratorbar} alt="seperator bar"/>
                    </div>
                </div>

                <div className='outlet-area-pc'>
                <Outlet className='outlet-pc' />
                
                    </div>
        </div>

       <div className="mob-display">
            <div className="mob-nav-col">
                <div className="logo-div-pc">
                    <img src={banner} className="logo-mob" alt="logo" />
                    <div className="spacer-mob">
                    <img className="spacer-img-mob" src={speratorbar} alt="seperator bar"/>
                    </div>
                </div> 

                <div className="outlet-area-mob">
                    <Outlet />
                </div>
            </div>
       </div>

    </div>
    );
}

export default Nav;
//<img className="seperator-img-pc" src={speratorbar} alt="seperator bar"/>


export var NavOptions = function() {
    return (
        <div>  

        
        <nav className="nav-links" >
        <div className="NavLink">
        <NavLink to="/Home" css={{
            color: "white",
            "&:hover": { "&.active": { color: "e65624" }, color: "e65624" }, "&.active": { color: "#e65624" }}}>Home</NavLink>
        </div>                    
        <div className="NavLink"> 
      <NavLink to="/PortfolioList" css={{
            color: "white",
            "&:hover": { "&.active": { color: "e65624" }, color: "e65624" }, "&.active": { color: "#e65624" }}}>Portfolio</NavLink>
      </div>                  
      <div className="NavLink">
      <NavLink to="/About" css={{
            color: "white",
            "&:hover": { "&.active": { color: "e65624" }, color: "e65624" }, "&.active": { color: "#e65624" }}}>About Us</NavLink>
      </div>                  
      <div className="NavLink">
        <NavLink to="/Contact" css={{
            color: "white",
            "&:hover": { "&.active": { color: "e65624" }, color: "e65624" }, "&.active": { color: "#e65624" }}}>Contact Us</NavLink>
      </div>
      <div className="NavLink" id="social-links">
            <div className="social-links">
            <div>
            <a href="https://www.facebook.com/VorstermansArchitects?ref=hl" target="_blank" className="fa fa-facebook"></a> 
                </div> 
                <div>
                <a href="https://www.instagram.com/vorstermansarchitects/" target="_blank" className="fa fa-instagram"></a>
                    </div>           
                </div>   

         </div>     
       
      </nav>

</div>
    );
  };

  export var MenuBars = function () {
    return(
        <div>
            <NavLink to="/Home"  className="fa fa-solid fa-bars"></NavLink>
        </div>
    )
  }