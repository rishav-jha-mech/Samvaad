import React from 'react'
import '../css/section2.css'

function Section2() {
    return (<>
    <section className="section2">
        <div className="how"> 
            <h1> How does <span className="allblock"> SamVaad work ?</span></h1>
            <p>What is certain is that our service <br /> performance is very good and regular.</p>
            <div className="button-container">
                <a href="#">Get Started</a>
            </div>
        </div>
        <div className="steps">
        <div className="row">
            <div className="step step1"> <span> 1 </span> <h2>Step One</h2> <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>  </div>            
            <div className="step step2"> <span> 2 </span> <h2>Step Two</h2> <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>  </div>            
        </div>
        <div className="row">
            <div className="step step3"> <span> 3 </span> <h2>Step Three</h2> <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>  </div>            
            <div className="step step4"> <span> 4 </span> <h2>Step Four</h2> <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>  </div>            
        </div>
        </div>
    </section>
    </>)
}

export default Section2
