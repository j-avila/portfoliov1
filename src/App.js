import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import store from './store'
import './App.scss'
import { Home } from './components/Home'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { About } from './components/about'
import { Post } from './components/post'
import Wrapper from './components/shared/portfolio/wrapper'

const updateIndicator = () => {
  console.log(navigator.onLine ? 'you are online' : 'you are offline')
}

window.addEventListener('online', updateIndicator)
window.addEventListener('offline', updateIndicator)
updateIndicator()

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Wrapper>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route path='/work' component={Post} />
            </Switch>
            <Footer />
          </Router>
        </Wrapper>
      </Provider>
    </div>
  )
}

export default App
