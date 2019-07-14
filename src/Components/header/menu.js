import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuAll = styled.ul `
  list-style: none;
  margin: 0;
  display: flex;
`
const MenuLink = styled(Link)`
`

const MenuItem = styled.li `
  padding-left: 16px;
  ${MenuLink}{
    text-decoration: none;
    color: ${props => (props.theme.color)};
    text-transform: uppercase;
  }
  ${MenuLink}:hover {
    color: #e1f8f8;
  }
`

const Menu = () => (
  <MenuAll>
    <MenuItem><MenuLink to='./'>Home</MenuLink></MenuItem>
    <MenuItem><MenuLink to='./forecast'>Forecast</MenuLink></MenuItem>
  </MenuAll>
)

export default Menu;