import './css/ErrorNews.css'

import React from 'react'

function ErrorNews(props) {
    return (<>
        <section className="news-not-found-error">
        <h1>Error No News Found In {props.category} Category</h1>
        <h2>Try Searching News In Other Categories</h2>
        <div className="go-back-buttons">
            <a id="gohome" href="/"><i className="fas fa-arrow-left" /> Go Home</a>
            <a id="goback" href="/SamVaad">Go Back To News Page <i className="fas fa-arrow-right" /></a>
        </div>
        </section>
    </>)
}

export default ErrorNews
