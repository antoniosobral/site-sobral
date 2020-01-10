/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { removeHash } from 'react-scrollable-anchor';

import { Background, Content, Body } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import BackgroundImg from '../../images/background.png';
import QuemSomos from '../../components/QuemSomos';
import Convenios from '../../components/Convenios';
import Exams from '../../components/Exams';
import Unities from '../../components/Unities';

export default function Main() {
  useEffect(() => {
    removeHash();
  });

  return (
    <>
      <Background id="home">
        <img id="background" src={BackgroundImg} alt="background" />
        <div id="transparentImg">
          <Header />
          <Content>
            <Body>
              <Link to="/results">
                <button type="button">RESULTADOS</button>
              </Link>
            </Body>
          </Content>
        </div>
      </Background>
      <QuemSomos />
      <Convenios />
      <Exams />
      <Unities />
      <Footer />
    </>
  );
}
