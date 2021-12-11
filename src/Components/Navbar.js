import {useState} from 'react'
import { Link } from 'react-router-dom';
import './css/Navbar.css'

function Navbar() {

const [showbar,setShowbar] = useState(false);
const toggle = () => setShowbar(o => !o);
    return (
        <>
            <div className="navbar" id="pc">
                <Link className="brand" to={{pathname: "/"}}>SamVaad</Link>
                <i className="fa fa-bars" id="bartimetoggler" onClick={()=>setShowbar(true)}/>
                <div className="nav-links"> 
                    <Link className="ifactive" to={{pathname: "/"}}>Home</Link>
                    <Link className="ifactive" to={{pathname: "/comingsoon"}}>About</Link>
                    <Link className="ifactive" to={{pathname: "/SamVaad"}}>Read News</Link>
                    <Link className="ifactive" to={{pathname: "/comingsoon"}} >Donate</Link>
                    <a id="contribute" href="https://github.com/rishav-jha-mech/Samvaad.git">Contribute</a>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="navbar" id="mob">
                <a className="brand" href="/">SamVaad</a>
                <i className={`fa ${!showbar ? "fa-bars" : "fa-times"} `} id="bartimetoggler" onClick={toggle}/>
                {showbar ?
                <div className="nav-links"> 
                    <Link to={{pathname: "/"}}>Home</Link>
                    <Link to={{pathname: "/comingsoon"}}>About</Link>
                    <Link to={{pathname: "/SamVaad"}}>Read News</Link>
                    <Link to={{pathname: "/comingsoon"}} >Donate</Link>
                    <Link href="https://github.com/rishav-jha-mech/Samvaad.git">Contribute</Link>
                </div>
                :''}
            </div>
            {/* Mobile Version */}
        </>
    )
}

export default Navbar
