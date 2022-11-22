import '../App.css';
import { NavLink } from 'react-router-dom';

const Contact =() => {

    return(
        <div>
                        <div className="menu-bar-div">
                <NavLink to="/Home"  className="fa fa-solid fa-bars" id="menubars"></NavLink>
                <p>Contact Us</p>
                </div>
            <div className="contact-row">
            <div className="email-container">
            <p>Send us a message!</p>
            <form target="_blank" action="https://formsubmit.co/zurdudiydo@gufum.com" method="POST">
                <div class="form-group">
                <div class="form-row">
                <div class="col">
                <input type="text" name="name" class="form-control" placeholder="Full Name" required />
                </div>                    
                    <div class="col">
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                    </div>
                    <div class="col">
                    <input type="subject" name="subject" class="form-control" placeholder="Subject" required />
                     </div>
                </div>
                </div>
                <div class="form-group">
                <textarea placeholder="Your Message" class="form-control" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
                </form>
            </div>
            <div className="contact-details">


            <h5>Phone</h5> <p>(04) 384 8395</p> <br/>
            <h5>email</h5> <p><a href="mailto:info@vorstermans.co.nz">info@vorstermans.co.nz</a></p><br/>

            <h5>Street address</h5><br/>
                <p>First floor, 262 Wakefield St, Wellington<br/> 
                Postal address<br/>
                PO Box 19 084, Wellington</p>
            </div>
            
            </div>




            <div className="contact-gmap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.7551905589626!2d174.78018211515922!3d-41.292432179272986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd06d7760f9%3A0x5842225d83e2f887!2sVorstermans%20Architects!5e0!3m2!1sen!2snz!4v1668206190729!5m2!1sen!2snz" style={{border:"0"}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        
    )
}

export default Contact;