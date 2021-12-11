import { Link } from 'react-router-dom'
import '../css/section1.css'
import landingImage from '../images/landing.png'

export default function Section1() {
    return (<>
            <section className="section1">
            <div className="text">
                <p> Welcome to SamVaad  </p>
                <h1>  World's most trusted News website.</h1>
                <br />
                <h5> Get the latest news, top headlines, opinions, analysis and much more from India and World including current news headlines on elections, politics, economy, weather &amp; business.</h5>
                <br />
                <div className="button-container">
                    <Link to={{pathname: "/SamVaad"}}>Read News</Link>
                    <a href="https://drive.google.com/file/d/1lsLOefBcxhb4ybGcsKtgAX8HXhUoIDj1/view?usp=sharing">Download App</a>
                </div>
            </div>
            <div className="image">
                <img src={landingImage} />
            </div>
        </section>
    </>)
}
