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

const API_KEY = '9e2c5a4ca889466adea72bdce03dd01d';

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
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`);
    const data_json = await api_call.json(); //transform data into json format
    console.log(data_json);
    if (data_json.city) {
    this.setState({
      temperature: Math.round(data_json.list[0].main.temp/10),
      city: data_json.city.name,
      country: data_json.city.country,
      humidity: data_json.list[0].main.humidity,
      description: data_json.list[0].weather[0].description,
      icon: data_json.list[0].weather[0].icon,
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