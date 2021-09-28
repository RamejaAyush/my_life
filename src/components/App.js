import "../styles/App.css";
import Header from "./Header";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Projects from "./Projects";
import Loader from "./Loader";
import { useState, useEffect } from "react";

const App = () => {
 // state
 const [load, setLoad] = useState(true);
 const [canScroll, setCanScroll] = useState(false);

 //  useeffect
 useEffect(() => {
  const timer = setTimeout(() => {
   setLoad(false);
   setCanScroll(true);
  }, 4000);
  return () => clearTimeout(timer);
 }, []);

 useEffect(() => {
  if (canScroll === false) {
   document.querySelector("body").classList.add("no-scroll");
  } else {
   document.querySelector("body").classList.remove("no-scroll");
  }
 });

 return (
  <Router>
   {load ? (
    <Loader />
   ) : (
    <>
     <Header />
     <Nav />
    </>
   )}

   {/* routes */}
   <AnimatePresence exitBeforeEnter>
    <Switch>
     <Route exact path="/">
      <Projects />
     </Route>
    </Switch>
   </AnimatePresence>
  </Router>
 );
};

export default App;
