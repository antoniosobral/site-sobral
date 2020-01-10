/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from 'react';
import { removeHash } from 'react-scrollable-anchor';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Content, Questions, List } from './styles';

export default function Faq() {
  const [questions, setQuestion] = useState([
    {
      text: 'Exame de Sangue X Jejum',
      answer:
        'Nem todos os exames de sangue necessitam de jejum, embora seja indispensável em alguns, como dosagens de triglicérides e glicose. É fundamental nesses casos um período de 12 a 16 horas de jejum para coleta de sangue. Água pode ser bebida, no entanto com moderação, lembrando que ela interfere nos exames de urina.',
      visible: false,
    },

    {
      text: 'Exame de Sangue X Horário de Coleta',
      answer:
        'Desde que obedeçam ao período estipulado de jejum, alguns exames podem ser colhidos no período da tarde. Porém no caso de algumas dosagens como Cortisol, Ferro e ACTH, esses devem ser feitos pela manhã, pois é neste período que eles apresentam maiores valores no sangue.',
      visible: false,
    },
    {
      text: 'Exame de Sangue X Exercício Físico',
      answer:
        'Alguns exames sangüíneos são alterados pelo esforço físico, como por exemplo, glicemia e dosagem do fator VIII da coagulação. Como os exames laboratoriais são padronizados para a realização em condições ideais que significam condições basais, pode haver diferença nos valores se forem realizados após o exercício.',
      visible: false,
    },
    {
      text: 'Exame de Sangue X Medicamentos',
      answer:
        'É extremamente grande a lista de medicamentos que interferem nos exames de laboratório. Dessa maneira é imprescindível avisar a atendente sobre o uso dos mesmos. A critério do médico, o ideal é a suspensão da medicação alguns dias antes da coleta de sangue. Como podemos citar, o uso dos antibióticos e antiinflamatórios que interferem nos testes de coagulação o ácido acetilsalicílico, presente em muitos analgésicos e antitérmicos como AAS. Buferim, Aspirina, Doril, Melhoral, etc, e que também interfere nos exames de coagulação, quando usados em altas doses. A dipirona, presente em alguns medicamentos como Novalgina, interfere no exame de creatinina.',
      visible: false,
    },
    {
      text: 'Exame de Sangue X Fumo e Álcool',
      answer:
        'O correto é não fumar no dia da coleta, principalmente quando se vai fazer teste de agregação plaquetária ou curva glicêmica. A bebida alcoólica também interfere, especialmente na dosagem de triglicérides. Para se ter uma idéia, uma dose de uísque, uma cerveja ou um copo de vinho na véspera do exame é o suficiente para elevar os níveis, falseando os resultados. O ideal é não ingerir qualquer bebida alcoólica 3 dias antes dos exames.',
      visible: false,
    },
    {
      text: 'Exames Laboratoriais X Menstruação',
      answer:
        'O exame de urina deve ser feito fora do período menstrual. Já a coleta sangüínea pode ser realizada neste período, lembrando que alguns hormônios e proteínas variam durante o período do ciclo menstrual. É importante, então, que o médico saiba em que período do ciclo esses exames foram colhidos.',
      visible: false,
    },
    {
      text: 'Exame de Urina X Coleta',
      answer:
        'Quando se vai fazer o exame de urina I, o ideal é que esta seja a 1ª da manhã, e colhido em frasco apropriado, fornecido pelo laboratório, sendo feito uma adequada assepsia e enviado imediatamente ao laboratório. Caso não se consiga colher a 1ª urina, é importante permanecer pelo menos 3 horas sem urinar para que se obtenha uma amostra adequada para o exame. Lembrar que cremes e óvulos vaginais interferem no resultado. No caso de cultura de urina esta deve ser colhida no próprio laboratório, pois há exigência de condições rigorosas de assepsia.',
      visible: false,
    },
    {
      text: 'Alimentação X Dosagens de Triglicérides e Colesterol',
      answer:
        'Esses exames quando solicitados devem obedecer a um período de jejum de 12 a 16 horas para a coleta. Uma pessoa com triglicerídios altos e que adota uma dieta rígida na véspera do exame, irá diminuir falsamente o resultado, daí a importância de se manter a dieta habitual nos 15 dias que antecedem o exame. Uma pessoa com triglicerídios normais e que come feijoada na véspera do exame, apresentará resultados falsamente altos.',
      visible: false,
    },
    {
      text: 'Exame de Sangue X Febre',
      answer:
        'Pacientes com febre podem colher sangue, pois a intenção é verificar se existe alguma infecção. Porém, em alguns casos, o estado em que o paciente se encontra pode provocar alterações nos exames solicitados. Portanto, na presença de febre, gripe, resfriado ou outro estado, consulte o médico antes para que o mesmo veja a importância da realização do exame.',
      visible: false,
    },
    {
      text: 'Coleta de Sangue X Hematomas',
      answer:
        'Pode ocorrer, depois da coleta, o aparecimento de hematoma no local da punção, que seria o extravasamento de sangue para fora da veia. Isso pode acontecer em determinadas situações, tais como: veias finas e delicadas com muita pressão; falta de compressão no local da punção; uso de alguma medicação que altere a coagulação do sangue.',
      visible: false,
    },
  ]);

  function toggleVisible(index) {
    const { visible } = questions[index];
    setQuestion(
      questions.map((question, i) =>
        i === index
          ? { ...question, visible: !visible }
          : { ...question, visible: false }
      )
    );
  }

  useEffect(() => {
    removeHash();
  }, [questions]);

  return (
    <>
      <Container id="faq">
        <Header />
        <Content>
          <div className="faq">
            <h1>PERGUNTAS FREQUENTES</h1>
            <ul>
              {questions.map((question, index) => (
                <Questions
                  key={question}
                  index={index}
                  visible={question.visible}
                >
                  <List visible={question.visible}>
                    <li>
                      <h3>
                        {question.text}
                        <button
                          onClick={() => toggleVisible(index)}
                          type="button"
                        >
                          Mostrar
                        </button>
                      </h3>
                      <span>{question.answer}</span>
                    </li>
                  </List>
                </Questions>
              ))}
            </ul>
          </div>
        </Content>
        <Footer />
      </Container>
    </>
  );
}
