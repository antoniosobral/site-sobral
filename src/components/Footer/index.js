import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { Container, Content } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <h4 className="title">Laboratório Sobral</h4>

          <HashLink
            smooth
            to="/#quem-somos"
            scroll={el =>
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            <h4>Quem Somos</h4>
          </HashLink>
          <HashLink
            smooth
            to="/#scroll-convenios"
            scroll={el =>
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            <h4>Convênios</h4>
          </HashLink>
          <HashLink
            smooth
            to="/#exames"
            scroll={el =>
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            <h4>Exames</h4>
          </HashLink>
          <HashLink
            smooth
            to="/#unidades"
            scroll={el =>
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            <h4>Unidades</h4>
          </HashLink>
        </div>
        <div>
          <h4 className="title">Clientes</h4>

          <HashLink smooth to="/results#results">
            <h4>Resultados</h4>
          </HashLink>
          <HashLink
            smooth
            to="/faq#faq"
            scroll={el =>
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            <h4>Perguntas Frequentes</h4>
          </HashLink>
        </div>
      </Content>
    </Container>
  );
}
