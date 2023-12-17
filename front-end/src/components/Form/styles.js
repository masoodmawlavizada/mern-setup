import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px 0px;
`;

export const Input = styled.input`
  background-color: white;
  width: 100%;
  padding: 8px;
  border: 1px solid #d6a692;
  border-radius: 8px;
  :focus {
    border: 10px solid #d6a692;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #d6a692;
  padding: 8px 20px;
  border: 1px solid;
  color: white;
  border-radius: 8px;
  margin-left: 5px;
`;
