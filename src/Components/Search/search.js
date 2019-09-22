import React from 'react';
import styled from 'styled-components';
import Cards from '../Cards/cards'
 
const SearchForm = styled.form`
  appearance: none;
  display: flex;
  margin: 40px;
  justify-content: center;
`

const LabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  padding: 5px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
`

const InputText = styled.input`
  padding: 5px;
`

const InputSubmit = styled.button`
  padding: 5px;
  border-radius: 20px;
  background-color: #cfd7d7;
  text-transform: uppercase;
  font-weight: bold;
  color: #3e9999;
  box-shadow: 3px 3px 5px  #5f7a7a;
  margin-left: 40px;
`

const Search = props => {
  return(
    <SearchForm onSubmit={props.getWeather}>
      <Cards light>
        <LabelAndInput>
          <Label htmlFor='name'>Look for the weather in your city</Label>
          <InputText type='text' name='city' placeholder='Type city here...'></InputText>
        </LabelAndInput>
      </Cards>
      <InputSubmit type='submit'>Check the weather</InputSubmit>
    </SearchForm>
  )
}

export default Search;

