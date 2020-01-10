import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 99;

  background: ${props => props.color};
  transition: background 0.2s;
  box-shadow: ${props => props.shadow};

  a {
    color: black;
    height: 100%;
  }

  nav {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1120px;

    div {
      height: 60px;
      display: flex;
      align-items: center;
    }
  }

  img {
    height: 60px;
    width: 240px;
  }
`;

export const NavItem = styled.span`
  margin-left: 24px;
  font-size: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 5px;

  border-bottom: ${props => (props.selected ? '8px solid #A20000' : 'none')};
  font-weight: ${props => (props.selected ? 'bold' : 'none')};

  &:hover {
    border-bottom: 8px solid #a20000;
    font-weight: bold;
    transition: border-bottom 0.3s;
  }
`;
export const Teste = styled.div``;
