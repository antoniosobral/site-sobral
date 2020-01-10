import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 1120px;
  margin: 128px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  #exams {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  button {
    font-size: 24px;
    font-weight: bold;
    color: #a20000;
    width: 240px;
    border: 3px solid #484646;

    &:hover {
      background: #a20000;
      color: #ffffff;
      border: 3px solid #ffffff;
      transition: background 0.2s;
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
  height: 200px;
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
`;
