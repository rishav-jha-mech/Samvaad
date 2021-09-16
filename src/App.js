import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './Components/Navbar'
import HomePage from './Components/Pages/Homepage'
import NewsPage from './Components/Pages/NewsPage'
// import Error404 from "./Components/Error404"; //Not Yet Made Will Be completed in next commit
// import Homepage from './Components/Pages/Homepage';
import Footer from './Components/Footer';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/SamVaad" component={NewsPage} />
          {/* <Route component={Error404} /> Not Yet Made Will Be completed in next commit */}
          </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;