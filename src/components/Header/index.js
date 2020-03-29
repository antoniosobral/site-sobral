/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaBars } from 'react-icons/fa';

import { Container, NavItem, Nav } from './styles';
import Logo from '../../images/logosobral.png';

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [navColor] = useState({
    color: 'white',
    border: 'none',
    shadow: '1px 3px 6px #D6D6D6',
  });

  const [navItens, setNavItens] = useState([
    { item: 'QUEM SOMOS', selected: false, anchor: '/#quem-somos' },
    { item: 'CONVÊNIOS', selected: false, anchor: '/#scroll-convenios' },
    { item: 'EXAMES', selected: false, anchor: '/#exames' },
    { item: 'UNIDADES', selected: false, anchor: '/#unidades' },
    { item: 'CONTATO', selected: false, anchor: '/contact#contact' },
    { item: 'RESULTADOS', selected: false, anchor: '/results#results' },
  ]);

  function toggleSelected(item) {
    const { selected } = item;

    setNavItens(
      navItens.map(i =>
        i === item && !i.selected
          ? { ...i, selected: !selected }
          : { ...i, selected: false }
      )
    );

    setMenu(!menu);
  }

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <Container
      color={navColor.color}
      border={navColor.border}
      shadow={navColor.shadow}
    >
      <HashLink
        smooth
        to="/#home"
        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
      >
        <img id="logo" src={Logo} alt="Logo" />
      </HashLink>
      <div className="icon">
        <FaBars
          size={24}
          color="#a20000"
          cursor="pointer"
          onClick={toggleMenu}
          z-index={2}
        />
      </div>
      <Nav menu={menu}>
        {navItens.map(item => (
          <HashLink
            smooth
            to={item.anchor}
            scroll={el =>
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            <NavItem
              key={item.item}
              selected={item.selected}
              onClick={() => toggleSelected(item)}
            >
              {item.item}
            </NavItem>
          </HashLink>
        ))}
      </Nav>
    </Container>
  );
}
