import React, {useState} from 'react'
import './css/Navbar.css'

function Navbar() {

const [showbar,setShowbar] = useState(false);
const toggle = () => setShowbar(o => !o);
    return (
        <>
            <div className="navbar" id="pc">
                <a className="brand" href="/">SamVaad</a>
                <i class="fa fa-bars" id="bartimetoggler" onClick={()=>setShowbar(true)}/>
                <div class="nav-links"> 
                    <a class="ifactive" href="/">Home</a>
                    <a class="ifactive" href="#">About</a>
                    <a class="ifactive" href="/SamVaad">Read News</a>
                    <a class="ifactive" href="#">Donate</a>
                    <a href="#" id="contribute" href="https://github.com/rishav-jha-mech/Samvaad.git">Contribute</a>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="navbar" id="mob">
                <a className="brand" href="/">SamVaad</a>
                <i className={`fa ${!showbar ? "fa-bars" : "fa-times"} `} id="bartimetoggler" onClick={toggle}/>
                {showbar ?
                <div class="nav-links"> 
                    <a href="/">Home</a>
                    <a href="#">About</a>
                    <a href="/SamVaad">Read News</a>
                    <a href="#">Donate</a>
                    <a href="https://github.com/rishav-jha-mech/Samvaad.git">Contribute</a>
                </div>
                :''}
            </div>
            {/* Mobile Version */}
        </>
    )
}

export default Navbar
