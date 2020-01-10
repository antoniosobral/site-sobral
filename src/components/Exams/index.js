import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import { Container, Content, Title, ExamContent } from './styles';
import GENETICA from '../../images/icons/dna.png';
import SANGUE from '../../images/icons/blood-type.png';
import TOXICOLOGICO from '../../images/icons/pills.png';
import FEZES from '../../images/icons/stool-test.png';
import URINA from '../../images/icons/urine.png';
import HEMODIALISE from '../../images/icons/kidney.png';

export default function Convenios() {
  const [exams] = useState([
    {
      icon: GENETICA,
      title: 'GENÉTICA',
      text: 'TEXTO GENÉTICA',
    },
    {
      icon: SANGUE,
      title: 'SANGUE',
      text: 'TEXTO SANGUE',
    },
    {
      icon: TOXICOLOGICO,
      title: 'TOXICOLÓGICO',
      text: 'TEXTO TOXICOLOGICO',
    },
    {
      icon: FEZES,
      title: 'FEZES',
      text: 'TEXTO FEZES',
    },
    {
      icon: URINA,
      title: 'URINA',
      text: 'TEXTO URINA',
    },
    {
      icon: HEMODIALISE,
      title: 'HEMODIÁLISE',
      text: 'TEXTO HEMODIALISE',
    },
  ]);

  return (
    <>
      <Container id="exames">
        <Content>
          <Title>
            <div className="lines" />
            <h1>EXAMES</h1>
            <div className="lines" />
          </Title>
          <div id="exams">
            {exams.map(exam => (
              <ExamContent>
                <img src={exam.icon} alt="" />
                <h3>{exam.title}</h3>
                <div />
              </ExamContent>
            ))}
          </div>
          <HashLink
            smooth
            to="/faq#faq"
            scroll={el =>
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            <button type="button" id="faq">
              PERGUNTAS FREQUENTES
            </button>
          </HashLink>
        </Content>
      </Container>
    </>
  );
}
