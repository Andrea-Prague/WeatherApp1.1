import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
  text-transform: uppercase;
  justify-self: center;
  font-weight: bold;
`

const Title = () => {
  return(
  <TitleDiv>
    Check the Weather
  </TitleDiv>
)}

export default Title;