import React, { useEffect } from 'react';

import { removeHash } from 'react-scrollable-anchor';
import { Container, Content } from './styles';
import Header from '../../components/Header';

export default function Results() {
  useEffect(() => {
    removeHash();
  });
  return (
    <>
      <Container id="results">
        <Header />
        <Content>
          <h1>CONSULTE SEUS EXAMES</h1>
          <form action="https://sobral.shiftcloud.com.br/shift/lis/sobral/elis/s01.iu.web.Login.cls?config=UNICO">
            <input
              type="text"
              name="UserName"
              placeholder="Digite seu usuário"
            />
            <input
              type="password"
              name="Password"
              placeholder="Digite sua senha"
            />
            <button type="submit">Entrar</button>
          </form>
        </Content>
      </Container>
    </>
  );
}
