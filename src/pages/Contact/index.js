import React, { useState } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import Lottie from 'react-lottie';
import * as Load from '../../images/icons/loading.json';

import { Container, Content } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Load.default,
};

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido.'),
  name: Yup.string().required('O nome é obrigatório.'),
  tel: Yup.string()
    .min(8, 'Digite um telefone válido.')
    .required('O número de telefone é obrigatório.'),
  message: Yup.string()
    .max(500)
    .required('A mensagem é obrigatória'),
  subject: Yup.string().required('O assunto é obrigatório'),
});

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const options = [
    { id: 'DÚVIDA', title: 'Dúvidas' },
    { id: 'ELOGIO', title: 'Elogios' },
    { id: 'SUGESTÃO', title: 'Sugestões' },
    { id: 'RECLAMAÇÃO', title: 'Reclamações' },
  ];

  async function handleSubmit(data, { resetForm }) {
    setLoading(!loading);
    await api.post('/mail', data);
    toast.success('Obrigado pelo seu contato!');
    setLoading(false);

    resetForm({
      name: '',
      tel: '',
      email: '',
      message: '',
    });
  }

  return (
    <>
      <Header />
      <Container id="contact">
        <Content>
          <h1>FALE CONOSCO</h1>
          <Form
            loading={loading}
            schema={schema}
            action="/mail"
            mathod="post"
            onSubmit={handleSubmit}
          >
            <Input name="name" type="text" placeholder="Nome" />
            <Input name="tel" type="tel" placeholder="Telefone" />
            <Input name="email" type="email" placeholder="E-mail" />
            <Select name="subject" options={options} placeholder="Assunto" />
            <Input
              multiline
              name="message"
              placeholder="Mensagem"
              className="textarea"
            />

            {loading ? (
              <Lottie options={defaultOptions} height={60} width={60} />
            ) : (
              <button type="submit">Enviar</button>
            )}
          </Form>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
