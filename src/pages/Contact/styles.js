import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

const slideIn = keyframes`${slideInLeft}`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1120px;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  h1 {
    font-size: 4rem;
    color: #a20000;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
    margin: 24px 10px;

    input {
      height: 32px;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      padding: 10px;
      background: #e5e5e5;
    }

    input + input {
      margin-top: 30px;
    }

    select {
      margin: 30px auto;
      width: 100%;
      height: 32px;
      font-size: 16px;
      border: none;
      border-radius: 10px;
      background: #e5e5e5;
    }

    .textarea {
      resize: none;
      height: 250px;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      padding: 10px;
      background: #e5e5e5;
    }
    button {
      animation: ${slideIn} 2s;
      width: 200px;
      height: 40px;
      margin-top: 30px;
      background: #e5e5e5;
      transition: background 0.2s;
      font-size: 20px;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      color: #a20000;

      &:hover {
        background-color: #a20000;
        border: none;
        color: #ffffff;
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }
`;
