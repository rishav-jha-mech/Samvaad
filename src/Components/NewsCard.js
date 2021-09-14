import './css/NewsCard.css'

function NewsCard(props) {
    return (<>
        <div className="Newscard">
            <div className="skeleton img-container">
                <p className="skeleton">{props.source}</p>
                <img class="skeleton " src=""/>
            </div>
            <div className="info">
                <div className="skeleton skeleton-text author">{props.author}</div>
                <div className="skeleton skeleton-text">{props.title}</div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
            </div>
            <a className="readmore skeleton" role="button" href={props.link}> Read More </a>
        </div>
    </>)
}

export default NewsCard
