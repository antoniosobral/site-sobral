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
    font-size: 54px;
    font-weight: bold;
    color: #a20000;
  }
`;
export const Filial = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 64px;
  justify-content: space-between;

  .map {
    height: 320px;
    width: 320px;

    iframe {
      height: 100%;
      width: 100%;
      border: none;
    }
  }

  .infos {
    width: 475px;
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
`;
