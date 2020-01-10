import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 104px auto;

  h1 {
    font-size: 56px;
    color: #707070;
  }

  span {
    width: 640px;
    display: flex;
    text-align: left;
    margin: 72px;
  }
  #cardes {
    display: flex;
    flex-direction: row;
    height: 640px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
  width: 400px;
  padding: 64px 64px;
  background: ${props => props.color};
  position: relative;
  top: ${props => props.top};
  right: ${props => props.right};

  h2 {
    font-size: 36px;
    font-weight: bold;
    color: #a20000;
  }

  p {
    margin-top: 32px;
  }
`;
