import React from 'react';
import { Container, Content } from './styles';

export default function Convenios() {
  return (
    <>
      <Container id="scroll-convenios">
        <Content>
          <h1>CONVÊNIOS</h1>
          <div id="convenios">
            <div className="conveniosList">
              <ul>
                <li>AIG SAÚDE</li>
                <li>ASSEFAZ</li>
                <li>BRADESCO</li>
                <li>BRADESCO PREFERENCIAL</li>
                <li>CABESP</li>
                <li>FAPS/BNDES</li>
                <li>FUNASG</li>
                <li>GAMA</li>
                <li>IGREJA BASTISTA DA TRINDADE</li>
              </ul>
            </div>
            <div className="conveniosList">
              <ul>
                <li>MEDCARD</li>
                <li>MEDPAR</li>
                <li>MEDISERVICE</li>
                <li>ONIX</li>
                <li>OSAF</li>
                <li>PETROBRÁS PETRÓLEO</li>
                <li>PETROBRÁS DISTRUIBUIDORA</li>
                <li>POSTAL SAÚDE</li>
                <li>SEFAS</li>
              </ul>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
}
