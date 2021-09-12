import "../styles/App.css";
import Header from "./Header";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
   <AnimatePresence>
    <Switch>
     <Route exact path="/">
      <Project />
     </Route>
     <Route path="/contact">
      <Contact />
     </Route>
    </Switch>
   </AnimatePresence>
  </Router>
 );
};

export default App;
