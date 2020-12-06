import React, { FormEvent, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Container, Title, Form, Repositories, EventMessage } from './styles';

interface IRepo {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface ISearchResponse {
  data: {
    items: IRepo[];
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [eventMessage, setEventMessage] = useState(
    'Buscando repositórios recentes no GitHub...',
  );
  const [repositories, setRepositories] = useState([] as IRepo[]);

  useEffect(() => {
    setIsSearching(true);

    api.get('repositories').then(res => {
      const repos = res.data;
      setRepositories(repos);

      setIsSearching(false);
      setEventMessage('');
    });
  }, []);

  async function handleSearchRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();
    setIsSearching(true);

    if (!newRepo) {
      const response = await api.get('repositories');
      const repos = response.data;

      setRepositories(repos);
      setEventMessage('');
    } else {
      const searchResponse: ISearchResponse = await api.get(
        `/search/repositories?q=${newRepo}`,
      );
      const repos = searchResponse.data.items;

      setRepositories(repos);
      setEventMessage('');
    }

    setIsSearching(false);
    if (repositories === []) {
      setEventMessage('Nenhum repositório encontrado.');
    }
  }

  return (
    <Container>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios do GitHub</Title>

      <Form onSubmit={handleSearchRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">
          {isSearching ? 'Aguarde...' : 'Pesquisar'}
        </button>
      </Form>

      {EventMessage && (
        <EventMessage>
          <p>{eventMessage}</p>
        </EventMessage>
      )}
      {repositories.length > 0 && (
        <Repositories>
          {repositories.map((repo: IRepo) => (
            <a key={repo.id} href="http://localhost:3000">
              <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              <div>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </div>
              <FiChevronRight size={26} />
            </a>
          ))}
        </Repositories>
      )}
    </Container>
  );
};

export default Dashboard;
