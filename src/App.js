import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo'
import NavigationBar from './components/NavigationBar'
import { Route,Switch } from 'react-router-dom'
import About from './components/About'
import Faq from './components/Faq'
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Todo} />
        <Route exact path='/about' component={About} />
        <Route exact path='/faq' component={Faq} />
      </Switch>
      <Footer />
    </>
    
  )
}

export default App