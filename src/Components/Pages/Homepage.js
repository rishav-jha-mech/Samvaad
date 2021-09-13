import Section1 from "./Homepage/Section1"
import Section2 from "./Homepage/Section2"

function Homepage() {
    return (<>
        <div className="HomeParent">
            <Section1 />
            <Section2 />
        </div>
    </>)
}

export default Homepage
