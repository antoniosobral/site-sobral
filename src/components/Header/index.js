/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import { Container, NavItem } from './styles';
import Logo from '../../images/logosobral.png';

export default function Header() {
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
  }

  return (
    <Container
      color={navColor.color}
      border={navColor.border}
      shadow={navColor.shadow}
    >
      <nav>
        <HashLink
          smooth
          to="/#home"
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
        >
          <img id="logo" src={Logo} alt="Logo" />
        </HashLink>
        <div>
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
        </div>
      </nav>
    </Container>
  );
}
