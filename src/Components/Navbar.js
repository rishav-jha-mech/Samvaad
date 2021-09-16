import React, {useState} from 'react'
import './css/Navbar.css'

function Navbar() {

const [showbar,setShowbar] = useState(false);
const toggle = () => setShowbar(o => !o);
    return (
        <>
            <div className="navbar" id="pc">
                <a className="brand" href="/">SamVaad</a>
                <i className="fa fa-bars" id="bartimetoggler" onClick={()=>setShowbar(true)}/>
                <div className="nav-links"> 
                    <a className="ifactive" href="/">Home</a>
                    <a className="ifactive" href="/comingsoon">About</a>
                    <a className="ifactive" href="/SamVaad">Read News</a>
                    <a className="ifactive" href="/comingsoon">Donate</a>
                    <a id="contribute" href="https://github.com/rishav-jha-mech/Samvaad.git">Contribute</a>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="navbar" id="mob">
                <a className="brand" href="/">SamVaad</a>
                <i className={`fa ${!showbar ? "fa-bars" : "fa-times"} `} id="bartimetoggler" onClick={toggle}/>
                {showbar ?
                <div className="nav-links"> 
                    <a href="/">Home</a>
                    <a href="#">About</a>
                    <a href="/SamVaad">Read News</a>
                    <a href="/comingsoon">Donate</a>
                    <a href="https://github.com/rishav-jha-mech/Samvaad.git">Contribute</a>
                </div>
                :''}
            </div>
            {/* Mobile Version */}
        </>
    )
}

export default Navbar
