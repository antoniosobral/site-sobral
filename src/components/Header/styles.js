import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 99;
  background: ${props => props.color};
  transition: background 0.2s;
  box-shadow: ${props => props.shadow};
  padding: 1.5rem 1rem;

  a {
    color: black;
  }

  img {
    height: 60px;
    width: 240px;
  }

  .icon {
    @media (min-width: 880px) {
      display: none;
    }
  }
`;

export const NavItem = styled.span`
  margin-left: 24px;
  font-size: 1rem;
  height: 100%;
  max-height: 160px;
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

  @media (max-width: 880px) {
    width: 100%;
    display: flex;

    align-items: left;
    padding: 0;
    max-width: 8rem;
    height: 3rem;
    margin: 0;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;

  @media (max-width: 880px) {
    display: none;
    z-index: 2
      ${props =>
        props.menu &&
        css`
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: fixed;
          width: 100%;
          max-width: 880px;
          height: 100%;
          top: 0;
          background: rgba(255, 255, 255, 0.9);
          z-index: -1;
        `};
  }
`;
