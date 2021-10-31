import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from './Components/Pages/Homepage'
import NewsPage from './Components/Pages/NewsPage'
import Error404 from "./Components/Error404";
import ComingSoon from "./Components/ComingSoon";
import './App.css'

function App() {
  console.clear()
  return (
    <>
      <BrowserRouter>
          <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/SamVaad" component={NewsPage} />
          <Route path="/comingsoon" component={ComingSoon} />
          <Route path="/blogs" component={ComingSoon} />
          <Route component={Error404} />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;