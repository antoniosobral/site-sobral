import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const transitionIn = keyframes`${fadeIn}`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

export const Content = styled.div`
  height: 100%;
  margin: 128px 0;
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  width: 100%;
  h1 {
    font-size: 36px;
    color: rgb(255, 0, 0, 0.75);
  }

  div {
    margin-top: 10px;
  }

  .banner {
    margin-top: 20px;

    width: 100%;
    min-height: 300px;
    border: 1px solid;
  }

  .text {
    margin-top: 20px;

    a {
      text-decoration: none;
      color: rgb(255, 0, 0, 0.75);
      font-size: 16p;
    }
  }

  .faq {
    margin-top: 20px;
    h3 {
      display: flex;
      justify-content: space-between;
      color: #424242;
      padding: 20px 0;
      font-size: 24px;
    }
    button {
      border: 0;
    }

    span {
      animation: ${transitionIn} 0.5s;
      padding-bottom: 5px;
      border-bottom: 1px solid #e0e0e0;
      padding: 20px 0;
      color: #616161;
    }
  }
`;

export const Questions = styled.div`
  span {
    display: ${props => (props.visible ? 'block' : 'none')};
  }
`;

export const List = styled.li`
  li {
    margin-top: 30px;
    padding-bottom: 5px;
    border-bottom: ${props =>
      props.visible ? '1px solid transparent' : '1px solid #e0e0e0'};
  }
`;
