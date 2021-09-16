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
    const [country,setCountry] = useState("in");                  // Default Country Set To => India
    const [category,setCategory] = useState("general"); // Default set to =>         General
    const [show,setShow] = useState(false);
    const FetchTheNews = () => {
        setLoading(true)
        setError(false)
        axios({
            headers:{'Content-Type': 'application/json',},
            method: 'GET',
            url: `http://localhost:8000/api/${country}/${category}`, //&pageSize=100 therefore we wil be getting all the posts ***NOTE this feature isnt added for now, right now the client will get the 20 results by default
        })
            .then((response) => {
                console.log(response.data);
                console.log(response.data.status);
                setNewsData(response.data.articles);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError(true) //
            })
    }

    useEffect(() => {
        FetchTheNews()
    },[country,category]);

    const togglershowhide= () =>{
        if (show === false){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }
    return (
        <>  {!error ? <>
        <div className="taskbar">
            <h1 id="lane4354354">{category ? category : 'General'}</h1>
            <div className="sort-box-container">
                <p className="sort" onClick={togglershowhide}>
                    Options <i class="far fa-list-alt"></i>
                </p>
                <div className={`sort-choices-container ${show ? "flex" : "hidden"}`}>
                    <div className="column column1">
                        <h1>Countries <i class="fas fa-caret-down"></i></h1>
                        <p onClick={() => setCountry("ae")}>United Arab Emirates (ae)</p>
                        <p onClick={() => setCountry("ar")}>Argentina(ar)</p>
                        <p onClick={() => setCountry("at")}>Austria(at)</p>
                        <p onClick={() => setCountry("au")}>Australia(au)</p>
                        <p onClick={() => setCountry("be")}>Belgium(be)</p>
                        <p onClick={() => setCountry("bg")}>Bulgaria(bg)</p>
                        <p onClick={() => setCountry("br")}>Brazil(br)</p>
                        <p onClick={() => setCountry("ca")}>Canada(ca)</p>
                        <p onClick={() => setCountry("ch")}>Switzerland(ch)</p>
                        <p onClick={() => setCountry("cn")}>China(cn)</p>
                        <p onClick={() => setCountry("co")}>Colombia(co)</p>
                        <p onClick={() => setCountry("cu")}>Cuba(cu)</p>
                        <p onClick={() => setCountry("cz")}>Czech(cz)</p>
                        <p onClick={() => setCountry("de")}>Germany(de)</p>
                        <p onClick={() => setCountry("eg")}>Egypt(eg)</p>
                        <p onClick={() => setCountry("fr")}>France(fr)</p>
                        <p onClick={() => setCountry("gb")}>United Kingdom(gb)</p>
                        <p onClick={() => setCountry("gr")}>Greece(gr)</p>
                        <p onClick={() => setCountry("hk")}>Hong Kong(hk)</p>
                        <p onClick={() => setCountry("hu")}>Hungary(hu)</p>
                        <p onClick={() => setCountry("id")}>Indonesia(id)</p>
                        <p onClick={() => setCountry("ie")}>Ireland(ie)</p>
                        <p onClick={() => setCountry("il")}>Isreal(il)</p>
                        <p onClick={() => setCountry("in")}>India(in)</p>
                        <p onClick={() => setCountry("it")}>Italy(it)</p>
                        <p onClick={() => setCountry("jp")}>Japan(jp)</p>
                        <p onClick={() => setCountry("kr")}>South Korea(kr)</p>
                        <p onClick={() => setCountry("lt")}>Lithuania(lt)</p>
                        <p onClick={() => setCountry("lv")}>Latvia(lv)</p>
                        <p onClick={() => setCountry("ma")}>Morocco(ma)</p>
                        <p onClick={() => setCountry("mx")}>Mexico(mx)</p>
                        <p onClick={() => setCountry("my")}>Malaysia(my)</p>
                        <p onClick={() => setCountry("ng")}>Nigeria(ng)</p>
                        <p onClick={() => setCountry("nl")}>Netherlands(nl)</p>
                        <p onClick={() => setCountry("no")}>Norway(no)</p>
                        <p onClick={() => setCountry("nz")}>New Zealand(nz)</p>
                        <p onClick={() => setCountry("ph")}>Phillipines(ph)</p>
                        <p onClick={() => setCountry("pl")}>Poland(pl)</p>
                        <p onClick={() => setCountry("pt")}>Portugal(pt)</p>
                        <p onClick={() => setCountry("ro")}>Romania(ro)</p>
                        <p onClick={() => setCountry("rs")}>Serbia(rs)</p>
                        <p onClick={() => setCountry("ru")}>Russia(ru)</p>
                        <p onClick={() => setCountry("sa")}>South Africa(sa)</p>
                        <p onClick={() => setCountry("se")}>Sweden(se)</p>
                        <p onClick={() => setCountry("sg")}>Singapore(sg)</p>
                        <p onClick={() => setCountry("si")}>Slovenia(si)</p>
                        <p onClick={() => setCountry("sk")}>Slovakia(sk)</p>
                        <p onClick={() => setCountry("th")}>Thailand(th)</p>
                        <p onClick={() => setCountry("tr")}>Turkey(tr)</p>
                        <p onClick={() => setCountry("tw")}>Taiwan(tw)</p>
                        <p onClick={() => setCountry("ua")}>Ukraine(ua)</p>
                        <p onClick={() => setCountry("us")}>United States of America(us)</p>
                        <p onClick={() => setCountry("ve")}>Venezuela(ve)</p>
                    </div>
                    <div className="column column2">
                        <h1>Categories <i class="fas fa-caret-down"></i></h1>
                        <p onClick={() => setCategory("general")}>General</p>
                        <p onClick={() => setCategory("business")}>Business</p>
                        <p onClick={() => setCategory("entertainment")}>Entertainment</p>
                        <p onClick={() => setCategory("health")}>Health</p>
                        <p onClick={() => setCategory("science")}>Science</p>
                        <p onClick={() => setCategory("sports")}>Sports</p>
                        <p onClick={() => setCategory("technology")}>Technology</p>
                    </div>
                    <i className="showhide fa fa-times" onClick={togglershowhide} />
                </div>
            </div>
        </div>
        <h3 id="stats">Country Code : <span id="autocap">{country}</span></h3><h3 id="stats"> Category : <span id="autocap">{category ? category : 'General'}</span>  No. of Results : <span id="autocap">{newsData.length}</span></h3>
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
                        <NewsCardLoaded name={data.source.name} urlToImage={data.urlToImage} date={data.publishedAt} author={data.author} title={data.title} url={data.url} />
                    </>)
                })

                }
            </div>
      </>: <ErrorNews />}  </>
    )
}

export default NewsPage
