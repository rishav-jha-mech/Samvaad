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
                    <a class="ifactive" href="#">Home</a>
                    <a class="ifactive" href="#">About</a>
                    <a class="ifactive" href="#">Read News</a>
                    <a class="ifactive" href="#">Help</a>
                    <a class="ifactive" href="#">Donate</a>
                    <a href="#" id="contribute">Contribute</a>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="navbar" id="mob">
                <a className="brand" href="/">SamVaad</a>
                <i className={`fa ${!showbar ? "fa-bars" : "fa-times"} `} id="bartimetoggler" onClick={toggle}/>
                {showbar ?
                <div class="nav-links"> 
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Read News</a>
                    <a href="#">Help</a>
                    <a href="#">Donate</a>
                    <a href="#">Contribute</a>
                </div>
                :''}
            </div>
            {/* Mobile Version */}
        </>
    )
}

export default Navbar
