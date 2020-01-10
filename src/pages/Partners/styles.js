import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
`;

export const Content = styled.div`
  height: 100%;
  margin: 20px 0;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .convenios {
    width: 400px;
    padding-right: 50px;
    background: red;

    li {
      margin: 10px 0;
    }
  }
`;
