import styled from 'styled-components';

export default styled.div `
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  font-family: 'Roboto', sans-serif;
  background-color:  ${props => (props.theme.bgColor)};
  color: ${props => (props.theme.color)};
  height: 100vh;
  margin: 50px;
`