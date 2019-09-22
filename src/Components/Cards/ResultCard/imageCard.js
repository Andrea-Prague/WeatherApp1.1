import React from 'react';
import styled from 'styled-components';

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
  <ImageCardDiv>
    <WeatherImg src={props.src} alt={props.description}/>
  </ImageCardDiv>
)

export default ImageCard;