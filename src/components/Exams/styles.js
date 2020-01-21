import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

const slideIn = keyframes`${slideInLeft}`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 80px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  #exams {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 660px) {
      justify-content: center;
    }
  }
  button {
    animation: ${slideIn} 2s;
    width: 200px;
    height: 70px;
    border: 3px solid #484646;
    background-color: rgb(0, 0, 0, 0);
    transition: background 0.2s;
    font-size: 20px;
    box-shadow: 1px 3px 6px #707070;

    font-weight: bold;
    color: #a20000;

    &:hover {
      background-color: #a20000;
      border: none;
      color: #ffffff;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 54px;
    font-weight: bold;
    margin: 0px 24px;
    color: #a20000;
  }
  .lines {
    min-height: 2px;
    width: 100%;
    background: #e4e4e4;
  }
`;
export const ExamContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 4rem;
  width: 240px;
  margin: 68px 40px;

  h3 {
    margin: 16px 0px;
  }

  div {
    min-height: 2px;
    width: 100%;
    //background: #e4e4e4;
  }
  span {
    margin: 24px 0px;
    width: 100%;
  }

  @media (max-width: 660px) {
    width: calc(50%-4rem);
    max-width: 240px;
    margin: 68px 0;
  }
`;
