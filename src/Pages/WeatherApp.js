import React, { useState } from 'react';
import Header from '../Components/header/header';
import Search from '../Components/Search/search';
import ResultCard from '../Components/Cards/ResultCard/resultCard';
import Wrapper from '../Components/wrapper';
import { ThemeProvider } from 'styled-components';
import Clouds from '../assets/images/cloudy.jpg';

const themeDark = {
  color: '#69dede',
  bgColor: '#5f7a7a'
};

const themeLight = {
  color: '#3e9999',
  bgColor: '#cfd7d7'
};

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [temperature, setTemperature] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [country, setCountry] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [main, setMain] = useState(undefined);
  const [error, setError] = useState(undefined)
  
  const setIcon = () => {
    if (main === 'Clear') {
      return <img src="../assets/images/sun.jpg" alt={description} />
    }
    if (main === "Rain"){
      return <img src={Clouds} alt={description} />
    }
  }

  const getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`);
    const dataJson = await apiCall.json(); //transform data into json format
    console.log(dataJson);
    if (dataJson.city) {
      return(
      setTemperature(Math.round(dataJson.list[0].main.temp/10)),
      setCity(dataJson.city.name),
      setCountry(dataJson.city.country),
      setMain (dataJson.list[0].weather[0].main),
      setDescription( dataJson.list[0].weather[0].description),
      setError('')
      )
    }else {
      return (
      setTemperature(undefined),
      setCity(undefined),
      setCountry(undefined),
      setMain (undefined),
      setDescription(undefined),
      setError('')
      )
    }
  }

  return(
  <ThemeProvider theme={themeLight}>
    <Wrapper>
      <ThemeProvider theme={themeDark}>
        <Header />
      </ThemeProvider>
      <ThemeProvider theme={themeLight}>
        <Search getWeather={getWeather}/>
      </ThemeProvider>
      <ThemeProvider theme={themeDark}>
        <ResultCard 
          temperature={temperature}
          city={city}
          country={country}
          description={description}
          icon={setIcon()}
          error={error}
          />
      </ThemeProvider>
    </Wrapper>
  </ThemeProvider>
  )
}

export default App;