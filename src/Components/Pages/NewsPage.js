import { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import '../css/NewsCard.css'
import './css/newspage.css'
import SkeletonPlaceholder from '../SkeletonPlaceholder'
import {NewsCardLoading , NewsCardLoaded} from '../NewsCard'                                                                                                                                                                           
import ErrorNews from '../ErrorNews'
import ScrollToTop from '../ScrollToTop'
import CountriesList from '../Countries'
import CategoriesList from '../Categories'
import NoOfNews from '../NoOfNews'

function NewsPage() {
    const [loading,setLoading]= useState(false);
    const [newsData, setNewsData] = useState([]);
    const [error, setError]= useState(false);
    const [country,setCountry] = useState("in");                  // Default Country Set To => India
    const [category,setCategory] = useState("general");           // Default set to =>         General
    const [show,setShow] = useState(false);
    const [numberofNews,setNumberofNews] = useState(20);          // Default set to =>          20
    const[accordion,setAccordion] = useState(0);

    const FetchTheNews = () => {
        setLoading(true)
        setError(false)
        axios({
            headers:{'Content-Type': 'application/json',},
            method: 'GET',
            url: `https://samvaad-api.herokuapp.com/api/${country}/${category}/${numberofNews}`,
        })
            .then((response) => {
                // console.log(response.data);
                // console.log(response.data.status);
                setNewsData(response.data.articles);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                // setError(true)
            })
    }

    useEffect(() => {
        FetchTheNews();
        setShow(false);
    },[country,category,numberofNews]);
    console.clear()
    return (
        <>  {!error ? <>
        <Navbar />
        <div className="taskbar">
            <h1 id="lane4354354">{category}</h1>
            <div className="sort-box-container">
                <p className="sort" onClick={() => setShow(!show)} role="menu">
                    Options <i className="far fa-list-alt"></i>
                </p>
                <div className={`sort-choices-container ${show ? "flex" : "hidden"}`}>
                    <div className="column column1">
                        <h1 onClick={()=> setAccordion(1)}>Countries <i className="fas fa-caret-down"></i></h1>
                        <div className={`the-choices ${accordion !== 1 ? "none" : ""}`}>
                            {
                                Object.entries(CountriesList)
                                .map( ([CountryCode, CountryName]) => 
                                <p  className={country === `${CountryCode}` ? 'active-choice' : ''} onClick={() => {setCountry(`${CountryCode}`);setShow(!show)}}>{CountryName}</p>
                                )
                            }
                        </div>
                        </div>
                    <div className="column column2">
                            <h1 onClick={() => setAccordion(2)}>Categories <i className="fas fa-caret-down"></i></h1>
                            <div className={`the-choices ${accordion !== 2 ? "none" : ""}`}>
                            {
                            CategoriesList.map((acategory)=>{
                                return(
                                    <>
                                    <p key={acategory} className={category === `${acategory}` ? 'active-choice' : '' } onClick={() => {setCategory(`${acategory}`);setShow(!show)}}>{acategory}</p>
                                    </>
                                )
                            })
                            }
                        </div>
                        </div>
                    <div className="column column3">
                        <h1 onClick={() => setAccordion(3)}>Results <i className="fas fa-caret-down"></i></h1>
                        <div className={`the-choices ${accordion !== 3 ? "none" : ""}`}>
                            {
                             Object.entries(NoOfNews).map(([numb,banner])=>{
                                return(
                                <p key={numb} className={numberofNews == `${numb}` ? 'active-choice' : '' } onClick={() => {setNumberofNews(`${numb}`);setShow(!show)}}> {banner} </p>    
                                )
                            })
                            }
                        </div>
                    </div>
                    <i className="showhide fa fa-times" onClick={() => setShow(!show)} />
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
                SkeletonPlaceholder.map((placeholder) => {
                    return (<>
                        <NewsCardLoading key={placeholder.id}/>
                    </>)
                })
            : 
            newsData.map((data) => {
                return (<>
                    <NewsCardLoaded key={data.title} name={data.source.name} urlToImage={data.urlToImage} date={data.publishedAt} author={data.author} title={data.title} url={data.url} />
                </>)
            })

            }
        </div>
        <ScrollToTop />
      <Footer /></>: <ErrorNews category={category} />}  </>
    )
}

export default NewsPage
