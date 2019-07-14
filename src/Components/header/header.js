import React from 'react';
import Title from './title';
import Clock from './clock';
import styled from 'styled-components';
import Menu from './menu';

const HeaderDiv = styled.div`
  display: flex;
  background-color: ${props => (props.theme.bgColor)};
  color: ${props => (props.theme.color)};
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-weight: 500;
`
const Header = () => {
  return(
    <HeaderDiv>
      <Clock />
      <Title />
      <Menu />
    </HeaderDiv>
  )
}

export default Header;