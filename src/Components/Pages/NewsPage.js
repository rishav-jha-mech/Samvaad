import { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/NewsCard.css'
import './css/newspage.css'
import SkeletonPlaceholder from './SkeletonPlaceholder'
import './css/newspage.css'
import ErrorNews from '../ErrorNews'
function NewsPage() {
    const [loading,setLoading]= useState(false);
    const [newsData, setNewsData] = useState([]);
    const [error, setError]= useState(false);

    const FetchTheNews = () => {
        setLoading(true)
        setError(false)
        axios({
            method: 'get',
            url: 'https://newsapi.org/v2/top-headlines&apiKey=985721b4b85griir6y04341b206685484b67200',
        })
            .then((response) => {
                // console.log(response.data);
                setNewsData(response.data.articles);
                setLoading(false);
            })
            .catch((error) => {
                // console.error(error);
                setError(true)
            })
    }
    useEffect(() => {
        FetchTheNews()
    }, []);
    // console.log(loading)
    return (
        <>  {!error ? <>
            <h1 id="lane4354354">Latest <span id="News35365654">N</span>ews </h1>
            <div className="Card-Container">
                {loading ? 
                    SkeletonPlaceholder.map(() => {
                        return (<>
                            <div className="Newscard">
                                <div className="skeleton img-container">
                                    <p className="skeleton"></p>
                                    <img class="skeleton" />
                                </div>
                                <div className="info">
                                    <div className="skeleton skeleton-text author"></div>
                                    <div className="skeleton skeleton-text"></div>
                                    <div className="skeleton skeleton-text"></div>
                                    <div className="skeleton skeleton-text"></div>
                                </div>
                                <a className="readmore skeleton loading" role="button"> Read More </a>
                            </div>
                        </>)
                    })
                : 
                newsData.map((data) => {
                    return (<>
                        <div className="Newscard">
                            <div className="img-container loaded-img-container">
                                <p>{data.source.name}</p>
                                <img src={data.urlToImage} />
                            </div>
                            <div className="info">
                                <div className="author-loaded">{data.author ? data.author : 'Anonymous'}</div>
                                <div className="title-loaded">{data.title}</div>
                            </div>
                            <a className="readmore" href={data.url}> Read More </a>
                        </div>
                    </>)
                })

                }
            </div>
      </>: <ErrorNews />}  </>
    )
}

export default NewsPage
