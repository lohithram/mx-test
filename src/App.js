import React from 'react';
import logo from './logo.svg';

import WeatherContainer from './containers/WeatherContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import 'sass/index.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherContainer />
      </header>
    </div>
  );
}

export default App;
