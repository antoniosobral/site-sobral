import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #757575;
  width: 100%;
  margin-top: auto;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 64px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 2rem;

  background: #757575;
  div {
    h4 {
      font-size: 24px;
      margin-bottom: 24px;
      color: #e4e4e4;
    }
    .title {
      color: #a20000;
    }
  }
`;
