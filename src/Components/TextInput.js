import styled from "styled-components";
const TextInput = styled.input`
  background: #ecf0f3;
  border: ${props => props.errors ? '2px solid #991410' : '2px solid #cbce'};
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 18px;
  border-radius: 50px;
  &:focus{
    border: 2px solid #cbce
  }

`


export default TextInput;