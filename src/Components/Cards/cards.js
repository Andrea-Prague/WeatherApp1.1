import styled from 'styled-components';

export default styled.div`
	border: 2px solid #5f7a7a;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 3px 3px 5px  #5f7a7a;
  background-color: ${props => (props.theme.bgColor)};
  color: ${props => (props.theme.color)};
  `