import styled from 'styled-components';
import BackgroundConvenios from '../../images/background-convenios.png';

export const Container = styled.div`
  background-image: url(${BackgroundConvenios});
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
  margin: 128px 0px;

  h1 {
    font-size: 56px;
    margin-bottom: 64px;
  }

  #convenios {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .conveniosList {
      background: #ebebeb;
      width: 480px;
      height: 480px;
      border-radius: 4px;
      margin-top: 10px;
      margin-bottom: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      li {
        font-size: 24px;
        font-weight: bold;
        margin: 16px;
        list-style-type: square;
      }
    }
  }
`;
