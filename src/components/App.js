import "../styles/App.css";
import Header from "./Header";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

const App = () => {
 return (
  <Router>
   <>
    <Header />
    <Nav />
   </>

   {/* routes */}
   <Switch>
    <Route exact path="/">
     <Project />
    </Route>
    <Route path="/about">
     <About />
    </Route>
    <Route path="/contact">
     <Contact />
    </Route>
   </Switch>
  </Router>
 );
};

export default App;
