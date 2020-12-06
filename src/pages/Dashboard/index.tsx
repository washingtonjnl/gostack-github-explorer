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
  const [searchRepo, setSearchRepo] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [eventMessage, setEventMessage] = useState(
    'Buscando repositórios recentes no GitHub...',
  );
  const [repositories, setRepositories] = useState([] as IRepo[]);

  useEffect(() => {
    setSearchRepo('');
    setIsSearching(true);

    api.get('repositories').then(res => {
      const repos: IRepo[] = res.data;
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

    if (!searchRepo) {
      const response = await api.get('repositories');
      const repos: IRepo[] = response.data;

      setRepositories(repos);

      repos.length === 0
        ? setEventMessage('Nenhum repositório encontrado.')
        : setEventMessage('');
    } else {
      const searchResponse: ISearchResponse = await api.get(
        `/search/repositories?q=${searchRepo}`,
      );
      const repos = searchResponse.data.items;

      setRepositories(repos);

      repos.length === 0
        ? setEventMessage('Nenhum repositório encontrado.')
        : setEventMessage('');
    }

    setIsSearching(false);
  }

  return (
    <Container>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios do GitHub</Title>

      <Form onSubmit={handleSearchRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={searchRepo}
          onChange={e => setSearchRepo(e.target.value)}
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
