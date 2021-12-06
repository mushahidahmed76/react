import React, { Component } from 'react';
import { BrowserRouter as Router,  Route, Routes, Link } from 'react-router-dom';
import TodoContainer from "./../functionBased/components/TodoContainer"
import About from "./../functionBased/components/About"
import WeatherApp from "./../weather/WeatherApp"
// import WeatherAppNew from "./../newWeather/WeatherAppNew"

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/todo'} className="nav-link"> Todos </Link></li>
            <li><Link to={'/about'} className="nav-link">About-Us</Link></li>
           
          </ul>
          </nav>
          <hr />
          <Routes>
              <Route exact path='/' element={<WeatherApp />} />
              <Route path='/todo' element={<TodoContainer />} />
              <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;