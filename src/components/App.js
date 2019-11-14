import React from 'react';
import './App.css';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <WeatherList />
    </div>
  );
}

export default App;
