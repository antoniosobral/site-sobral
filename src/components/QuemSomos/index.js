import React, { useState } from 'react';
import { Container, Card, Content } from './styles';

export default function QuemSomos() {
  const [cards] = useState([
    {
      title: 'MISSÃO',
      text:
        'Realizar exames com qualidade, atendendo às expectativas dos clientes e oferecendo aos colaboradores frequente capacitação.',
      color: '#9E9E9E',
    },
    {
      title: 'VISÃO',
      text:
        'Ser referência em excelência de exames laboratoriais de forma que ela seja a principal motivadora para nossa trajetória',
      color: '#BDBDBD',
      top: '160px',
      right: '40px',
    },
    {
      title: 'VALORES',
      text: 'Respeito a Vida, Ética e transparência',
      color: '#E0E0E0',
      top: '320px',
      right: '40px',
    },
  ]);
  return (
    <>
      <Container id="quem-somos">
        <Content>
          <h1>QUEM SOMOS</h1>
          <span>
            Fundado em 1988 pela Dra. Marialda de Souza Sobral Chicrala em São
            Gonçalo, o Laboratório Sobral sempre prezou pela qualidade,
            atendimento humanizado e ética.
            <br />
            <br />
            O Laboratório Sobral participa dos Programas de Controles Externos
            de Qualidade, desenvolvidos pela SBAC, afim de garantir a excelência
            dos exames e também de controles internos.
            <br />
            <br />
            Nossa política de qualidade: oferecer serviços de diagnóstico
            laboratorial,comprometido com o sistema de gestão da qualidade e com
            a melhoria contínua. Buscando atender as necessidades dos nossos
            clientes e superando suas expectativas.
          </span>

          <div id="cardes">
            {cards.map(card => (
              <Card color={card.color} top={card.top} left={card.right}>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </Card>
            ))}
          </div>
        </Content>
      </Container>
    </>
  );
}
