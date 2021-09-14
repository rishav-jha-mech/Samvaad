import { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/NewsCard.css'
import './css/newspage.css'
import SkeletonPlaceholder from './SkeletonPlaceholder'
import './css/newspage.css'
import {NewsCardLoading , NewsCardLoaded} from '../NewsCard'                                                                                                                                                                           
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
            url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=985721b4b8504341b206685484b67200`,
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
    },[]);

    // console.log(loading)
    return (
        <>  {!error ? <>
            <h1 id="lane4354354">Latest <span id="News35365654">N</span>ews </h1>
            <div className="Card-Container">
                {loading ? 
                    SkeletonPlaceholder.map(() => {
                        return (<>
                            <NewsCardLoading />
                        </>)
                    })
                : 
                newsData.map((data) => {
                    return (<>
                        <NewsCardLoaded name={data.source.name} urlToImage={data.urlToImage} author={data.author} title={data.title} url={data.url} />
                    </>)
                })

                }
            </div>
      </>: <ErrorNews />}  </>
    )
}

export default NewsPage
