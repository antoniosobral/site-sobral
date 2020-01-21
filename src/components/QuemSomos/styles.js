import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 104px 1rem;

  h1 {
    font-size: 3.5rem;
    color: #707070;
  }

  span {
    width: calc(100% - 2rem);
    display: flex;
    text-align: left;
    margin: 72px auto;
    font-size: 1rem;
  }
  #cardes {
    width: 100%;
    display: flex;
    flex-direction: row;

    @media (max-width: 800px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    @media (max-width: 720px) {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
  width: 100%;
  max-width: 400px;
  min-width: 200px;
  padding: 2rem 2rem;
  background: ${props => props.color};

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #a20000;
  }

  p {
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    width: calc(50% - 2rem);
  }

  @media (max-width: 720px) {
    width: calc(100% - 2rem);

    max-height: 240px;
  }
`;
