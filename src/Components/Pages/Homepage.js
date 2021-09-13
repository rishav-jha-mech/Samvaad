import './css/homepage.css'
import landingImage from './images/landing.png'

function Homepage() {
    return (<>
        <div className="HomeParent">
        <section className="page1">
            <div className="text">
                <p> Welcome to SamVaad  </p>
                <h1>  World's most trusted News website.</h1>
                <br />
                <h5> Get the latest news, top headlines, opinions, analysis and much more from India and World including current news headlines on elections, politics, economy, weather, business.</h5>
                <div className="button-container">
                    <a href="#">Read News</a>
                    <a href="#">Download App</a>
                </div>
            </div>
            <div className="image">
                <img src={landingImage} />
            </div>
        </section>
        </div>
    </>)
}

export default Homepage
