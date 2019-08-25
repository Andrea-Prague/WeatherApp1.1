import React from 'react';
import Header from '../Components/header/header';
import Search from '../Components/Search/search';
import ResultCard from '../Components/Cards/ResultCard/resultCard';
import Wrapper from '../Components/wrapper';
import { ThemeProvider } from 'styled-components';

const themeDark = {
  color: '#69dede',
  bgColor: '#5f7a7a'
};

const themeLight = {
  color: '#3e9999',
  bgColor: '#cfd7d7'
};

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }
  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`);
    const dataJson = await apiCall.json(); //transform data into json format
    console.log(dataJson);
    if (dataJson.city) {
    this.setState({
      temperature: Math.round(dataJson.list[0].main.temp/10),
      city: dataJson.city.name,
      country: dataJson.city.country,
      humidity: dataJson.list[0].main.humidity,
      description: dataJson.list[0].weather[0].description,
      icon: dataJson.list[0].weather[0].icon,
      error: ''
    })}

    else {
      this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: 'Please enter a valid city name'
    })
  }
  }
  render (){
    return(
    <ThemeProvider theme={themeLight}>
      <Wrapper>
        <ThemeProvider theme={themeDark}>
          <Header />
        </ThemeProvider>
        <ThemeProvider theme={themeLight}>
          <Search getWeather={this.getWeather}/>
        </ThemeProvider>
        <ThemeProvider theme={themeDark}>
          <ResultCard 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
            />
        </ThemeProvider>
      </Wrapper>
    </ThemeProvider>
    )
  }
}

export default App;