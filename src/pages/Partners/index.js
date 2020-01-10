import React from 'react';

import { Container, Content } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Partners() {
  return (
    <>
      <Container>
        <Header />
        <h1>Convênios</h1>
        <Content>
          <div className="convenios">
            <ul>
              <li>AIG SAÚDE</li>
              <li>ASSEFAZ</li>
              <li>BRADESCO</li>
              <li>BRADESCO PREFERÊNCIAL</li>
              <li>CABESP</li>
              <li>FAPS/BNDES</li>
              <li>FUNASG</li>
              <li>GAMA</li>
              <li>GEAP</li>
            </ul>
          </div>
          <div className="convenios">
            <ul>
              <li>IBT</li>
              <li>MEDCARD</li>
              <li>MEDSERVICE</li>
              <li>ONIX</li>
              <li>OSAF</li>
              <li>PETROBRÁS</li>
              <li>PETROBRÁS DISTRIBUIDORA</li>
              <li>POSTAL SAÚDE</li>
            </ul>
          </div>
        </Content>
        <Footer />
      </Container>
    </>
  );
}
