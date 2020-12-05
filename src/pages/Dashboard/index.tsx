import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios do GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="http://localhost:3000">
          <img
            src="https://avatars1.githubusercontent.com/u/57377743?s=460&u=418a931fbfebedc810e763ddc6f5a141b2f91b3c&v=4"
            alt="Washington Junior"
          />
          <div>
            <strong>cpferias-bot</strong>
            <p>
              A simple Twitter bot that counts down for Colégio Pedro II
              vacations and post it using Node.js technology and Twitter API.
            </p>
          </div>
          <FiChevronRight size={26} />
        </a>
        <a href="http://localhost:3000">
          <img
            src="https://avatars1.githubusercontent.com/u/57377743?s=460&u=418a931fbfebedc810e763ddc6f5a141b2f91b3c&v=4"
            alt="Washington Junior"
          />
          <div>
            <strong>ecofoto-site</strong>
            <p>
              Dynamic website made with ReactJS that show the interface of the
              application of virtual photo exhibitions of Ecofoto, an extension
              project of Escola de Comunicação from UFRJ.
            </p>
          </div>
          <FiChevronRight size={26} />
        </a>
      </Repositories>
    </Container>
  );
};

export default Dashboard;
