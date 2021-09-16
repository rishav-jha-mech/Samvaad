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
                        <p onClick={() => {setCountry("ae");togglershowhide()}}>United Arab Emirates (ae)</p>
                        <p onClick={() => {setCountry("ar");togglershowhide()}}>Argentina(ar)</p>
                        <p onClick={() => {setCountry("at");togglershowhide()}}>Austria(at)</p>
                        <p onClick={() => {setCountry("au");togglershowhide()}}>Australia(au)</p>
                        <p onClick={() => {setCountry("be");togglershowhide()}}>Belgium(be)</p>
                        <p onClick={() => {setCountry("bg");togglershowhide()}}>Bulgaria(bg)</p>
                        <p onClick={() => {setCountry("br");togglershowhide()}}>Brazil(br)</p>
                        <p onClick={() => {setCountry("ca");togglershowhide()}}>Canada(ca)</p>
                        <p onClick={() => {setCountry("ch");togglershowhide()}}>Switzerland(ch)</p>
                        <p onClick={() => {setCountry("cn");togglershowhide()}}>China(cn)</p>
                        <p onClick={() => {setCountry("co");togglershowhide()}}>Colombia(co)</p>
                        <p onClick={() => {setCountry("cu");togglershowhide()}}>Cuba(cu)</p>
                        <p onClick={() => {setCountry("cz");togglershowhide()}}>Czech(cz)</p>
                        <p onClick={() => {setCountry("de");togglershowhide()}}>Germany(de)</p>
                        <p onClick={() => {setCountry("eg");togglershowhide()}}>Egypt(eg)</p>
                        <p onClick={() => {setCountry("fr");togglershowhide()}}>France(fr)</p>
                        <p onClick={() => {setCountry("gb");togglershowhide()}}>United Kingdom(gb)</p>
                        <p onClick={() => {setCountry("gr");togglershowhide()}}>Greece(gr)</p>
                        <p onClick={() => {setCountry("hk");togglershowhide()}}>Hong Kong(hk)</p>
                        <p onClick={() => {setCountry("hu");togglershowhide()}}>Hungary(hu)</p>
                        <p onClick={() => {setCountry("id");togglershowhide()}}>Indonesia(id)</p>
                        <p onClick={() => {setCountry("ie");togglershowhide()}}>Ireland(ie)</p>
                        <p onClick={() => {setCountry("il");togglershowhide()}}>Isreal(il)</p>
                        <p onClick={() => {setCountry("in");togglershowhide()}}>India(in)</p>
                        <p onClick={() => {setCountry("it");togglershowhide()}}>Italy(it)</p>
                        <p onClick={() => {setCountry("jp");togglershowhide()}}>Japan(jp)</p>
                        <p onClick={() => {setCountry("kr");togglershowhide()}}>South Korea(kr)</p>
                        <p onClick={() => {setCountry("lt");togglershowhide()}}>Lithuania(lt)</p>
                        <p onClick={() => {setCountry("lv");togglershowhide()}}>Latvia(lv)</p>
                        <p onClick={() => {setCountry("ma");togglershowhide()}}>Morocco(ma)</p>
                        <p onClick={() => {setCountry("mx");togglershowhide()}}>Mexico(mx)</p>
                        <p onClick={() => {setCountry("my");togglershowhide()}}>Malaysia(my)</p>
                        <p onClick={() => {setCountry("ng");togglershowhide()}}>Nigeria(ng)</p>
                        <p onClick={() => {setCountry("nl");togglershowhide()}}>Netherlands(nl)</p>
                        <p onClick={() => {setCountry("no");togglershowhide()}}>Norway(no)</p>
                        <p onClick={() => {setCountry("nz");togglershowhide()}}>New Zealand(nz)</p>
                        <p onClick={() => {setCountry("ph");togglershowhide()}}>Phillipines(ph)</p>
                        <p onClick={() => {setCountry("pl");togglershowhide()}}>Poland(pl)</p>
                        <p onClick={() => {setCountry("pt");togglershowhide()}}>Portugal(pt)</p>
                        <p onClick={() => {setCountry("ro");togglershowhide()}}>Romania(ro)</p>
                        <p onClick={() => {setCountry("rs");togglershowhide()}}>Serbia(rs)</p>
                        <p onClick={() => {setCountry("ru");togglershowhide()}}>Russia(ru)</p>
                        <p onClick={() => {setCountry("sa");togglershowhide()}}>South Africa(sa)</p>
                        <p onClick={() => {setCountry("se");togglershowhide()}}>Sweden(se)</p>
                        <p onClick={() => {setCountry("sg");togglershowhide()}}>Singapore(sg)</p>
                        <p onClick={() => {setCountry("si");togglershowhide()}}>Slovenia(si)</p>
                        <p onClick={() => {setCountry("sk");togglershowhide()}}>Slovakia(sk)</p>
                        <p onClick={() => {setCountry("th");togglershowhide()}}>Thailand(th)</p>
                        <p onClick={() => {setCountry("tr");togglershowhide()}}>Turkey(tr)</p>
                        <p onClick={() => {setCountry("tw");togglershowhide()}}>Taiwan(tw)</p>
                        <p onClick={() => {setCountry("ua");togglershowhide()}}>Ukraine(ua)</p>
                        <p onClick={() => {setCountry("us");togglershowhide()}}>United States of America(us)</p>
                        <p onClick={() => {setCountry("ve");togglershowhide()}}>Venezuela(ve)</p>
                    </div>
                    <div className="column column2">
                        <h1>Categories <i class="fas fa-caret-down"></i></h1>
                        <p onClick={() => {setCategory("general");togglershowhide()}}>General</p>
                        <p onClick={() => {setCategory("business");togglershowhide()}}>Business</p>
                        <p onClick={() => {setCategory("entertainment");togglershowhide()}}>Entertainment</p>
                        <p onClick={() => {setCategory("health");togglershowhide()}}>Health</p>
                        <p onClick={() => {setCategory("science");togglershowhide()}}>Science</p>
                        <p onClick={() => {setCategory("sports");togglershowhide()}}>Sports</p>
                        <p onClick={() => {setCategory("technology");togglershowhide()}}>Technology</p>
                    </div>
                    <i className="showhide fa fa-times" onClick={togglershowhide} />
                </div>
            </div>
        </div>
        <div className="stats-container">
            <h3 id="stats">Country Code : <span id="autocap">{country}</span></h3>
            <h3 id="stats"> Category : <span id="autocap">{category ? category : 'General'}</span></h3> 
            <h3 id="stats"> No. of Results : <span id="autocap">{newsData.length}</span></h3>
        </div>
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
