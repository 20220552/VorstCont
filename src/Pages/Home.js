import splashpic from '../Assets/splash.jpg'
import splashpic2 from '../Assets/splash2.jpg'

import '../App.css';

import { NavOptions } from './Nav.js';

const Home =() => {

    return(
    <div className="home-wrapper">
        <div className="home-pc">
        <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <ol className="carousel-indicators">
          <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            
            <div className="carousel-container">
            <img className="splash-pic" src={splashpic} alt="splashpic" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-container">
            <img className="splash-pic" src={splashpic2} alt="splashpic" />
            </div>
          </div>
        </div>
        <li href="#myCarousel" className="carousel-control-prev" role="button" data-bs-slide="prev">
          <span className="sr-only"></span>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </li>
        <li href="#myCarousel" className="carousel-control-next" role="button" data-bs-slide="next" >
          <span className="sr-only"></span>
          <span className="carousel-control-next-icon" aria-hidden="true" ></span>
        </li>
      </div>
        </div>
        <div className="home-mob">
          <div className="mob-NavOptions">
          <NavOptions />
          </div>
            
            
        </div>

    </div>

    );
}

export default Home;
//<img className="splash-image" src={splashpic} alt="splash image"/>
//Carousel slider https://www.youtube.com/watch?v=ku_97a6Bgkg