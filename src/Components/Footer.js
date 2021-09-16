import { Link } from 'react-router-dom'
import './css/Footer.css'

function Footer() {
    return (<>
        <div className="footer">
            <div className="samvaad com">
                <h1>SamVaad</h1>
                <p>Read latest news and stay updated <br /> with worldwide current affairs.</p>
                <h3>Connect with us</h3>
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100057462975710"><i className="fab fa-facebook-f" /></a>
                    <a href="https://www.instagram.com/r.i.s.h.a.v.j.h.a/"><i className="fab fa-instagram" /></a>
                    <a href="https://www.linkedin.com/in/rishav-jha-549b45203/"><i className="fab fa-linkedin-in" /></a>
                    <a href="https://api.whatsapp.com/send?text=Hi%20Rishav%2c%20I%20came%20here%20from%20your%20SamVaad%20website&phone=917439876937"><i className="fab fa-whatsapp" /></a>
                </div>
            </div>
            <div className="usefullinks com">
                <h1>Useful Links</h1>
                <div className="links">
                    <a href="https://newsapi.org/"><i className="fas fa-hand-point-right"></i> News API</a>
                    <a href="https://reactjs.org/"><i className="fas fa-hand-point-right"></i> React Js</a>
                    <a href="/comingsoon"><i className="fas fa-hand-point-right"></i> Donate</a>
                    <a href="https://github.com/rishav-jha-mech/Samvaad"><i className="fas fa-hand-point-right"></i> Contribute</a>
                </div>
            </div>
            <div className="contactus com">
                <h1>Contact us</h1>
                <div className="contacts">
                    <p><i className="far fa-envelope"></i>      rishav.rj74@gmail.com</p>
                    <p><i className="fas fa-mobile-alt"></i>    +91 7439876937</p>
                    <p><i className="fas fa-address-card"></i>  Kolkata, West Bengal, India.</p>
                </div>
            </div>
        </div>
        <div className="copyright">
            &copy; Copyright 2021. All Right Reserved By <a href="https://github.com/rishav-jha-mech">Rishav Jha</a>.
        </div>
    </>)
}

export default Footer
