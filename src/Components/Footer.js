import './css/Footer.css'

function Footer() {
    return (<>
        <div className="footer">
            <div className="samvaad com">
                <h1>SamVaad</h1>
                <p>Read latest news and stay updated <br /> with worldwide current affairs.</p>
                <h3>Connect with us</h3>
                <div className="social">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-whatsapp"></i>
                </div>
            </div>
            <div className="usefullinks com">
                <h1>Useful Links</h1>
                <div className="links">
                    <a href="#"><i class="fas fa-hand-point-right"></i> News API</a>
                    <a href="#"><i class="fas fa-hand-point-right"></i> Help</a>
                    <a href="#"><i class="fas fa-hand-point-right"></i> Donate</a>
                    <a href="#"><i class="fas fa-hand-point-right"></i> Contribute</a>
                </div>
            </div>
            <div className="contactus com">
                <h1>Contact us</h1>
                <div className="contacts">
                    <p><i class="far fa-envelope"></i>      rishav.rj74@gmail.com</p>
                    <p><i class="fas fa-mobile-alt"></i>    +91 7439876937</p>
                    <p><i class="fas fa-address-card"></i>  Kolkata, West Bengal, India.</p>
                </div>
            </div>
        </div>
        <div className="copyright">
            &copy; Copyright 2021. All Right Reserved By Rishav Jha.
        </div>
    </>)
}

export default Footer
