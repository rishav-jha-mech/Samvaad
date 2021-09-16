import { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/NewsCard.css'
import './css/newspage.css'
import SkeletonPlaceholder from '../SkeletonPlaceholder'
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
    const [numberofNews,setNumberofNews] = useState(20);
    const FetchTheNews = () => {
        setLoading(true)
        setError(false)
        axios({
            headers:{'Content-Type': 'application/json',},
            method: 'GET',
            url: `http://localhost:8000/api/${country}/${category}/${numberofNews}`, //&pageSize=100 therefore we wil be getting all the posts ***NOTE this feature isnt added for now, right now the client will get the 20 results by default
        })
            .then((response) => {
                console.log(response.data);
                console.log(response.data.status);
                setNewsData(response.data.articles);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError(false) //
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
                <p className="sort" onClick={togglershowhide} role="menu">
                    Options <i class="far fa-list-alt"></i>
                </p>
                <div className={`sort-choices-container ${show ? "flex" : "hidden"}`}>
                    <div className="column column1">
                        <h1>Countries <i class="fas fa-caret-down"></i></h1>
                        <div className="the-choices">
                            <p className={country === 'in' ? 'active-choice' : ''} onClick={() => {setCountry("in");togglershowhide()}}>India(in)</p>
                            <p className={country === 'ae' ? 'active-choice' : ''} onClick={() => {setCountry("ae");togglershowhide()}}>United Arab Emirates (ae)</p>
                            <p className={country === 'ar' ? 'active-choice' : ''} onClick={() => {setCountry("ar");togglershowhide()}}>Argentina(ar)</p>
                            <p className={country === 'at' ? 'active-choice' : ''} onClick={() => {setCountry("at");togglershowhide()}}>Austria(at)</p>
                            <p className={country === 'au' ? 'active-choice' : ''} onClick={() => {setCountry("au");togglershowhide()}}>Australia(au)</p>
                            <p className={country === 'be' ? 'active-choice' : ''} onClick={() => {setCountry("be");togglershowhide()}}>Belgium(be)</p>
                            <p className={country === 'bg' ? 'active-choice' : ''} onClick={() => {setCountry("bg");togglershowhide()}}>Bulgaria(bg)</p>
                            <p className={country === 'br' ? 'active-choice' : ''} onClick={() => {setCountry("br");togglershowhide()}}>Brazil(br)</p>
                            <p className={country === 'ca' ? 'active-choice' : ''} onClick={() => {setCountry("ca");togglershowhide()}}>Canada(ca)</p>
                            <p className={country === 'ch' ? 'active-choice' : ''} onClick={() => {setCountry("ch");togglershowhide()}}>Switzerland(ch)</p>
                            <p className={country === 'cn' ? 'active-choice' : ''} onClick={() => {setCountry("cn");togglershowhide()}}>China(cn)</p>
                            <p className={country === 'co' ? 'active-choice' : ''} onClick={() => {setCountry("co");togglershowhide()}}>Colombia(co)</p>
                            <p className={country === 'cu' ? 'active-choice' : ''} onClick={() => {setCountry("cu");togglershowhide()}}>Cuba(cu)</p>
                            <p className={country === 'cz' ? 'active-choice' : ''} onClick={() => {setCountry("cz");togglershowhide()}}>Czech(cz)</p>
                            <p className={country === 'de' ? 'active-choice' : ''} onClick={() => {setCountry("de");togglershowhide()}}>Germany(de)</p>
                            <p className={country === 'eg' ? 'active-choice' : ''} onClick={() => {setCountry("eg");togglershowhide()}}>Egypt(eg)</p>
                            <p className={country === 'fr' ? 'active-choice' : ''} onClick={() => {setCountry("fr");togglershowhide()}}>France(fr)</p>
                            <p className={country === 'gb' ? 'active-choice' : ''} onClick={() => {setCountry("gb");togglershowhide()}}>United Kingdom(gb)</p>
                            <p className={country === 'gr' ? 'active-choice' : ''} onClick={() => {setCountry("gr");togglershowhide()}}>Greece(gr)</p>
                            <p className={country === 'hk' ? 'active-choice' : ''} onClick={() => {setCountry("hk");togglershowhide()}}>Hong Kong(hk)</p>
                            <p className={country === 'hu' ? 'active-choice' : ''} onClick={() => {setCountry("hu");togglershowhide()}}>Hungary(hu)</p>
                            <p className={country === 'id' ? 'active-choice' : ''} onClick={() => {setCountry("id");togglershowhide()}}>Indonesia(id)</p>
                            <p className={country === 'ie' ? 'active-choice' : ''} onClick={() => {setCountry("ie");togglershowhide()}}>Ireland(ie)</p>
                            <p className={country === 'il' ? 'active-choice' : ''} onClick={() => {setCountry("il");togglershowhide()}}>Isreal(il)</p>
                            <p className={country === 'it' ? 'active-choice' : ''} onClick={() => {setCountry("it");togglershowhide()}}>Italy(it)</p>
                            <p className={country === 'jp' ? 'active-choice' : ''} onClick={() => {setCountry("jp");togglershowhide()}}>Japan(jp)</p>
                            <p className={country === 'kr' ? 'active-choice' : ''} onClick={() => {setCountry("kr");togglershowhide()}}>South Korea(kr)</p>
                            <p className={country === 'lt' ? 'active-choice' : ''} onClick={() => {setCountry("lt");togglershowhide()}}>Lithuania(lt)</p>
                            <p className={country === 'lv' ? 'active-choice' : ''} onClick={() => {setCountry("lv");togglershowhide()}}>Latvia(lv)</p>
                            <p className={country === 'ma' ? 'active-choice' : ''} onClick={() => {setCountry("ma");togglershowhide()}}>Morocco(ma)</p>
                            <p className={country === 'mx' ? 'active-choice' : ''} onClick={() => {setCountry("mx");togglershowhide()}}>Mexico(mx)</p>
                            <p className={country === 'my' ? 'active-choice' : ''} onClick={() => {setCountry("my");togglershowhide()}}>Malaysia(my)</p>
                            <p className={country === 'ng' ? 'active-choice' : ''} onClick={() => {setCountry("ng");togglershowhide()}}>Nigeria(ng)</p>
                            <p className={country === 'nl' ? 'active-choice' : ''} onClick={() => {setCountry("nl");togglershowhide()}}>Netherlands(nl)</p>
                            <p className={country === 'no' ? 'active-choice' : ''} onClick={() => {setCountry("no");togglershowhide()}}>Norway(no)</p>
                            <p className={country === 'nz' ? 'active-choice' : ''} onClick={() => {setCountry("nz");togglershowhide()}}>New Zealand(nz)</p>
                            <p className={country === 'ph' ? 'active-choice' : ''} onClick={() => {setCountry("ph");togglershowhide()}}>Phillipines(ph)</p>
                            <p className={country === 'pl' ? 'active-choice' : ''} onClick={() => {setCountry("pl");togglershowhide()}}>Poland(pl)</p>
                            <p className={country === 'pt' ? 'active-choice' : ''} onClick={() => {setCountry("pt");togglershowhide()}}>Portugal(pt)</p>
                            <p className={country === 'ro' ? 'active-choice' : ''} onClick={() => {setCountry("ro");togglershowhide()}}>Romania(ro)</p>
                            <p className={country === 'rs' ? 'active-choice' : ''} onClick={() => {setCountry("rs");togglershowhide()}}>Serbia(rs)</p>
                            <p className={country === 'ru' ? 'active-choice' : ''} onClick={() => {setCountry("ru");togglershowhide()}}>Russia(ru)</p>
                            <p className={country === 'sa' ? 'active-choice' : ''} onClick={() => {setCountry("sa");togglershowhide()}}>South Africa(sa)</p>
                            <p className={country === 'se' ? 'active-choice' : ''} onClick={() => {setCountry("se");togglershowhide()}}>Sweden(se)</p>
                            <p className={country === 'sg' ? 'active-choice' : ''} onClick={() => {setCountry("sg");togglershowhide()}}>Singapore(sg)</p>
                            <p className={country === 'si' ? 'active-choice' : ''} onClick={() => {setCountry("si");togglershowhide()}}>Slovenia(si)</p>
                            <p className={country === 'sk' ? 'active-choice' : ''} onClick={() => {setCountry("sk");togglershowhide()}}>Slovakia(sk)</p>
                            <p className={country === 'th' ? 'active-choice' : ''} onClick={() => {setCountry("th");togglershowhide()}}>Thailand(th)</p>
                            <p className={country === 'tr' ? 'active-choice' : ''} onClick={() => {setCountry("tr");togglershowhide()}}>Turkey(tr)</p>
                            <p className={country === 'tw' ? 'active-choice' : ''} onClick={() => {setCountry("tw");togglershowhide()}}>Taiwan(tw)</p>
                            <p className={country === 'ua' ? 'active-choice' : ''} onClick={() => {setCountry("ua");togglershowhide()}}>Ukraine(ua)</p>
                            <p className={country === 'us' ? 'active-choice' : ''} onClick={() => {setCountry("us");togglershowhide()}}>United States of America(us)</p>
                            <p className={country === 've' ? 'active-choice' : ''} onClick={() => {setCountry("ve");togglershowhide()}}>Venezuela(ve)</p>
                        </div>
                    </div>
                    <div className="column column2" onClick={() => setShow(true)}>
                        <h1>Categories <i class="fas fa-caret-down"></i></h1>
                        <p className={category === 'general' ? 'active-choice' : '' } onClick={() => {setCategory("general");togglershowhide()}}>General</p>
                        <p className={category === 'business' ? 'active-choice' : '' } onClick={() => {setCategory("business");togglershowhide()}}>Business</p>
                        <p className={category === 'entertainment' ? 'active-choice' : '' } onClick={() => {setCategory("entertainment");togglershowhide()}}>Entertainment</p>
                        <p className={category === 'health' ? 'active-choice' : '' } onClick={() => {setCategory("health");togglershowhide()}}>Health</p>
                        <p className={category === 'science' ? 'active-choice' : '' } onClick={() => {setCategory("science");togglershowhide()}}>Science</p>
                        <p className={category === 'sports' ? 'active-choice' : '' } onClick={() => {setCategory("sports");togglershowhide()}}>Sports</p>
                        <p className={category === 'technology' ? 'active-choice' : '' } onClick={() => {setCategory("technology");togglershowhide()}}>Technology</p>
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
