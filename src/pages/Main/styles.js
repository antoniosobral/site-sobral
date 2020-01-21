import styled, { keyframes } from 'styled-components';
import { fadeIn, slideInLeft } from 'react-animations';

const transitionIn = keyframes`${fadeIn}`;
const slideIn = keyframes`${slideInLeft}`;

export const Background = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;

  #background {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    animation: ${transitionIn} 2s;
  }

  #transparentImg {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(224, 224, 224, 0.75);
  }
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  margin: 0 auto;
  align-items: center;
`;

export const Infos = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #757575;
  font-weight: bold;
  line-height: 1.5;
  text-shadow: 1px 1px 1px #757575;
  animation: ${transitionIn} 2s;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    animation: ${slideIn} 2s;
    width: 200px;
    height: 70px;
    border: 3px solid #484646;
    background-color: rgb(0, 0, 0, 0);
    transition: background 0.2s;
    font-size: 20px;
    box-shadow: 1px 3px 6px #707070;

    &:hover {
      background-color: #a20000;
      border: none;
      color: #ffffff;
    }
  }
`;

export const Footer = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  line-height: 1.5;
  margin-bottom: 20px;

  p {
    color: #ffffff;
    font-size: 20px;
    text-shadow: 2px 2px 2px #757575;
  }
`;
