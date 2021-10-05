import './css/NewsCard.css'
// both NewsCardLoading and NewCardLoaded have the same css.
function NewsCardLoading() {
    return (<>
        <div className="Newscard">
            <div className="skeleton img-container">
                <p className="skeleton"></p>
                <img className="skeleton"/>
            </div>
            <div className="info">
                <div className="skeleton skeleton-text author"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
            </div>
            <div className="readmore skeleton" role="button"> Read More </div>
        </div>
    </>)
}

function NewsCardLoaded(data) {
    return (<>
        <div className="Newscard">
            <div className="img-container loaded-img-container">
                <p>{data.name}</p>
                <img src={data.urlToImage}/>
            </div>
            <div className="info">
                <div className="author-loaded">{data.author ? data.author : 'Anonymous'}</div>
                <div className="title-loaded">{data.title}</div>
            </div>
            <a className="readmore" href={data.url}> Read More </a>
        </div>
    </>)
}

export { NewsCardLoading, NewsCardLoaded }