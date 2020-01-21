import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #e4e4e4;
`;
export const Content = styled.div`
  width: 1120px;
  margin: 128px 0px;
  display: flex;
  flex-direction: column;

  h1 {
    margin: auto;
    font-size: 54px;
    font-weight: bold;
    color: #a20000;
  }

  @media (max-width: 880px) {
    margin: 80px 0px;
    h1 {
      font-size: 3rem;
    }
  }
`;
export const Filial = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 32px;
  justify-content: space-between;

  .map {
    height: 320px;
    max-width: 320px;
    width: calc(50%-2rem);

    iframe {
      height: 100%;
      width: 100%;
      border: none;
    }
  }

  .infos {
    max-width: 475px;
    width: calc(50%-2rem);
    padding: 1rem 2rem;

    h3 {
      font-size: 36px;
      font-weight: bold;
      color: #616161;
    }

    p {
      font-size: 24px;
      color: #616161;

      margin: 24px 0px;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
