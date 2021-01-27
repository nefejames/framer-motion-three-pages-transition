import { Switch, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'

import "./App.css";
const pageVariants = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100vh",
  },
  transition: {
    type: "tween",
    ease: "linear",
    duration: 1,
  }
}

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" render={(props) => <Home {...props} pageVariants={pageVariants}/> } />
          <Route exact path="/about" render={(props) => <About {...props} pageVariants={pageVariants}/> } />
          <Route exact path="/services" render={(props) => <Services {...props} pageVariants={pageVariants}/> } />
          
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App