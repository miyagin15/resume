
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//import pages
import Home from './pages/Home'
import Works from './pages/Works'
import Skills from './pages/Skills'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
          <Route  exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/works" component={Works} />
          <Route  path="/skills" component={Skills} />
          <Route {... () => <p>Page not found.</p>} />
        </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App