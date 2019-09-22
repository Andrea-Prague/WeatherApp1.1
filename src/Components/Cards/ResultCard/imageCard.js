import React from 'react';
import styled from 'styled-components';
import WeatherAppContext from '../../../context/weatherAppContext';

const ImageCardDiv = styled.div `
  background-color: #fff;
  border-radius: 20px;
  height: 60px;
  width: 60px;
`

const WeatherImg = styled.img `
  height: 50px;
`

const ImageCard = props => (
  <WeatherAppContext.Consumer>
    {context => (
      <ImageCardDiv>
      <WeatherImg src={props.src} alt={context.description}/>
      </ImageCardDiv>
    )}
  </WeatherAppContext.Consumer>
)

export default ImageCard;