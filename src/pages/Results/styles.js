import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  margin: 320px 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1120px;

  h1 {
    color: #a20000;
    font-size: 56px;
    margin: 0 auto 48px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 64px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #757575;
      margin: 0 0 10px;
      text-transform: uppercase;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ff5e5b;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      cursor: pointer;

      &:hover {
        background: #fc2019;
      }
    }
  }

  @media (max-width: 720px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 620px) {
    h1 {
      font-size: 2.5rem;
      margin-bottom: 36px;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
`;
