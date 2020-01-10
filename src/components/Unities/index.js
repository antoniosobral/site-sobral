import React, { useState } from 'react';
import { Container, Content, Filial } from './styles';

export default function Convenios() {
  const [unidades] = useState([
    {
      nome: 'MATRIZ',
      endereco:
        'Avenida 18 do Forte, 288 Loja - Centro - São Gonçalo - RJ, CEP: 24460-005',
      telefone: '(21) 2605-4353 / (21) 2712-9226',
      googleMaps:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.46188107834!2d-43.046665784539954!3d-22.82239514060388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999af14c276bcf%3A0xd23ff97090f2a152!2sSobral%20Laborat%C3%B3rio!5e0!3m2!1spt-BR!2sbr!4v1575949354098!5m2!1spt-BR!2sbr',
      atendimento:
        'Segunda à sexta-feira: 07:00 às 18:00 hrs / Sábado: 07:00 às 11:00 hrs',
      coleta:
        'Segunda à sexta-feira: 07:00 às 18:00 hrs / Sábado: 07:00 às 11:00 hrs',
    },
    {
      nome: 'IBT SAÚDE',
      endereco:
        'Rua Pastor Waldemar Zarro, 28 - Nova Cidade, São Gonçalo - RJ, 24455-535',
      telefone: '(21) 2702-6400',
      googleMaps:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.7258657161506!2d-43.02388768454005!3d-22.812619540253966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999a779fb6b559%3A0x7f9b9722da8aa7d5!2sIBT%20Sa%C3%BAde!5e0!3m2!1spt-BR!2sbr!4v1575949727602!5m2!1spt-BR!2sbr',
      atendimento: 'Segunda à sexta-feira: 08:00 às 11:00 hrs',
      coleta: 'Segunda à sexta-feira: 08:00 às 11:00 hrs',
    },
  ]);

  return (
    <>
      <Container id="unidades">
        <Content>
          <h1>UNIDADES</h1>
          {unidades.map(unidade => (
            <Filial>
              <div className="map">
                <iframe src={unidade.googleMaps} title={unidade.nome} />
              </div>
              <div className="infos">
                <h3>{unidade.nome}</h3>
                <p className="endereco">{unidade.endereco}</p>
                <p>{unidade.telefone}</p>
                <span>
                  {' '}
                  <strong> Atendimento: </strong>
                  {unidade.atendimento}
                </span>
                <br />
                <span>
                  {' '}
                  <strong> Coleta:</strong> {unidade.coleta}
                </span>
              </div>
            </Filial>
          ))}
        </Content>
      </Container>
    </>
  );
}
