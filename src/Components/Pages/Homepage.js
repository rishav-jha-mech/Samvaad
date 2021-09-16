import Section1 from "./Homepage/Section1"
import Section2 from "./Homepage/Section2"
import Navbar from "../Navbar"
import Footer from "../Footer"

function Homepage() {
    return (<>
        <Navbar />
        <div className="HomeParent">
            <Section1 />
            <Section2 />
        </div>
        <Footer />
    </>)
}

export default Homepage
