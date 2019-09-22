import React from 'react';
import styled from 'styled-components';
import Cards from '../cards';

const ResultCardDiv = styled.div `
  margin: 20px;
`

const ResultCard = props => {
  return(
    <ResultCardDiv>
      {props.city && <Cards>
        <p>Location: { props.city } in { props.country }</p>
        <p>Degrees: { props.temperature }°C</p>
        <p>Humidity: { props.humidity }</p>
        <p>{ props.description }</p>
        <p>{ props.icon }</p>
      </Cards>}
        {props.error && <p>{props.error}</p>}
    </ResultCardDiv>
  )
}

export default ResultCard;