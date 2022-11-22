import '../App.css';
import {useState} from 'react';

import Anna from '../Assets/staff/Anna.jpg'
import Annie from '../Assets/staff/Annie.jpg'
import Chris from '../Assets/staff/Chris.jpg'
import Nicholas from '../Assets/staff/Nicholas.jpg'
import Rob from '../Assets/staff/Rob.jpg'
import Thomas from '../Assets/staff/Thomas.jpg'

import { NavLink } from 'react-router-dom';



const About =() => {

    const [isHovered, setIsHovered] = useState(null)
    const handleMouseOver = (e) => {
        switch (e.target.id) {
            case "Rob":
                setIsHovered(Rob)
                break
            case "Anna":
                setIsHovered(Anna)
                break
            case "Annie":
                setIsHovered(Annie)
                break
            case "Chris":
                setIsHovered(Chris)
                break
            case "Nicholas":
                setIsHovered(Nicholas)     
                break
            case "Thomas":
                setIsHovered(Thomas)           
        }
    }
    
    
    return(
        
        <div>
            
            <div className="about-pc">
            <div className="menu-bar-div">
                <NavLink to="/Home"  className="fa fa-solid fa-bars" id="menubars"></NavLink>
                <p>About Us</p>
                </div>
                
            <div className="values-div-pc">                
                <p className="values-pc">Communicate</p>
                <p className="values-pc">Respond</p>
                <p className="values-pc">Enjoy</p>
                <p className="values-pc">Deliver</p>
            </div>
            <div><p>Utilising our commercial and residential experience to produce quality designs and creating beautiful buildings for our clients.  We aim to use our knowledge to positively improve and change people’s everyday lives both at work and at home and their experience of the environment. We vow to leave the environment in a better situation then we found it.<br/>
            When producing quality design work, we pledge to communicate openly, honestly and in a timely fashion, being responsive to both the clients and the environmental needs. We aim to make the design process enjoyable for everyone involved by creating positive and exciting experiences by removing traditional designer/client barriers which create unnecessary stress. We pride ourselves on timely delivery, exceeding our client’s expectations and providing a beautiful built environment for our clients for years to come.</p></div>
            <div className="bios-pc">
                <p className="hidden-div">Meet our team by hovering over their picture to learn more about us!</p>
                            <div className="about-row">
                            <div className="about-column">
                                <div className="bio-mob-row">
                                <div className="bio-mob-name-col">
                                <img className="staff-pics" id='Rob' src={Rob} alt="Rob's portrait" onMouseOver={handleMouseOver} onMouseOut={() => setIsHovered(null)}/>
                                <p>Rob</p></div>
                                <p className="bio-mob-text">I completed my studies in Architecture at Victoria University in Wellington in 1982. Gained a Bachelor of Architecture with Honors in 1983. Following work experience in Wellington obtained registration as an architect in 1985.</p>
                                </div>                                
                            </div>
                            <div className="about-column">
                            <div className="bio-mob-row">
                            <div className="bio-mob-name-col">
                            <img className="staff-pics" id='Anna' src={Anna} alt="Anna's portrait" onMouseOver={handleMouseOver} onMouseOut={() => setIsHovered(null)}/>
                            <p>Anna</p></div>
                            <p className="bio-mob-text">Growing up in Wellington has given me a real love for this city and it’s architecture. I enjoy every aspect of architecture, from design right through to construction, and feel privileged to be part of the process of helping people’s dreams become a reality.</p>
                                </div>
                            </div>
                            <div className="about-column" >
                            <div className="bio-mob-row">
                            <div className="bio-mob-name-col">
                            <img className="staff-pics" id='Annie' src={Annie} alt="Annie's portrait" onMouseOver={handleMouseOver} onMouseOut={() => setIsHovered(null)}/>
                            <p>Annie</p></div>
                            <p className="bio-mob-text">Annie works as our team administrator and is responsible for the smooth running of the office. With her great love of renovating and design she is right at home working in the creative atmosphere of an Architecture practice. She also has qualifications in marketing and Journalism.</p>
                                </div>
                            </div>
                            <div className="about-row">
                            <div className="about-column">
                            <div className="bio-mob-row">
                            <div className="bio-mob-name-col">
                            <img className="staff-pics" id='Chris' src={Chris} alt="Chris's portrait" onMouseOver={handleMouseOver} onMouseOut={() => setIsHovered(null)}/>
                            <p>Chris</p></div>
                            <p className="bio-mob-text">Chris Taylor was born and lived in the Netherlands for 18 years, studied Architecture at Edinburgh College of Art – Heriot Watt University in Edinburgh Scotland, graduating with   Architecture BA Hons and Post Graduate Diploma. Chris has been working at Vorstermans Architects since 2005, and is working towards registering as Architect in New Zealand.</p>
                                </div>
                            </div>
                            <div className="about-column">
                            <div className="bio-mob-row">
                            <div className="bio-mob-name-col">
                            <img className="staff-pics" id='Nicholas' src={Nicholas} alt="Nicholas's portrait" onMouseOver={handleMouseOver} onMouseOut={() => setIsHovered(null)}/>
                            <p>Nick</p></div>
                            <p className="bio-mob-text">Nick began his Architecture career in Christchurch obtaining a Bachelor of Architectural Studies. He then worked as an Architectural Technician, gaining valuable experience in Energy Efficient & Passive Solar Design. Nick then moved to Wellington where he studied Architecture at Victoria University.</p>
                                </div>
                            </div>
                            <div className="about-column">
                            <div className="bio-mob-row">
                            <div className="bio-mob-name-col">
                            <img className="staff-pics" id='Thomas' src={Thomas} alt="Thomas's portrait" onMouseOver={handleMouseOver} onMouseOut={() => setIsHovered(null)}/>
                            <p>Thomas</p></div>
                            <p className="bio-mob-text">Thomas graduated with a Masters in Architecture from Victoria University in 2017. He then took up a position as a draftsman, valuable experience that lead to him joining Vorstermans in April 2019. With the goal of becoming an architect Thomas seeks to expand his skill set and help enrich the built environment.</p>
                                </div>
                            </div>               
                </div>   
                
            </div>
            </div>
            <div className="hidden-div" id="hidden-div">
                    <br/>
                    {isHovered === Rob ? "I completed my studies in Architecture at Victoria University in Wellington in 1982. Gained a Bachelor of Architecture with Honors in 1983. Following work experience in Wellington obtained registration as an architect in 1985.": ""}
                    {isHovered === Anna ? "Growing up in Wellington has given me a real love for this city and it’s architecture. I enjoy every aspect of architecture, from design right through to construction, and feel privileged to be part of the process of helping people’s dreams become a reality.": ""}
                    {isHovered === Annie ? "Annie works as our team administrator and is responsible for the smooth running of the office. With her great love of renovating and design she is right at home working in the creative atmosphere of an Architecture practice. She also has qualifications in marketing and Journalism.": ""}
                    {isHovered === Chris ? "Chris Taylor was born and lived in the Netherlands for 18 years, studied Architecture at Edinburgh College of Art – Heriot Watt University in Edinburgh Scotland, graduating with   Architecture BA Hons and Post Graduate Diploma. Chris has been working at Vorstermans Architects since 2005, and is working towards registering as Architect in New Zealand.": ""}
                    {isHovered === Nicholas ? "Nick began his Architecture career in Christchurch obtaining a Bachelor of Architectural Studies. He then worked as an Architectural Technician, gaining valuable experience in Energy Efficient & Passive Solar Design. Nick then moved to Wellington where he studied Architecture at Victoria University.": ""}
                    {isHovered === Thomas ? "Thomas graduated with a Masters in Architecture from Victoria University in 2017. He then took up a position as a draftsman, valuable experience that lead to him joining Vorstermans in April 2019. With the goal of becoming an architect Thomas seeks to expand his skill set and help enrich the built environment.": ""}
                    
                </div>
        </div>
        </div>
    )
}

export default About;






