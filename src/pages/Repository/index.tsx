import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiCopy } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import {
  Container,
  Header,
  RepositoryInfo,
  CloneRepo,
  Issues,
  EventMessage,
} from './styles';

interface RepositoryParams {
  repository: string;
}

interface IRepo {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  clone_url: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

interface IIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

interface APIResponse {
  repository: IRepo;
  issues: IIssue[];
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<IRepo | null>(null);
  const [issues, setIssues] = useState<IIssue[] | null>(null);

  useEffect(() => {
    async function loadData(): Promise<APIResponse> {
      const [repositoryResponse, issuesResponse] = await Promise.all([
        api.get(`/repos/${params.repository}`),
        api.get(`/repos/${params.repository}/issues`),
      ]);

      return {
        repository: repositoryResponse.data,
        issues: issuesResponse.data.length > 0 ? issuesResponse.data : null,
      };
    }

    loadData().then((data: APIResponse) => {
      setRepository(data.repository);
      setIssues(data.issues);
    });
  }, [params.repository]);

  function copyCloneCommand() {
    const cloneCommand = `git clone ${repository?.clone_url}`;

    navigator.clipboard.writeText(cloneCommand);
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={18} />
          Voltar
        </Link>
      </Header>

      {repository ? (
        <RepositoryInfo>
          <header>
            <a
              href={repository.owner.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={repository?.owner.avatar_url}
                alt={repository?.owner.login}
              />
            </a>
            <div>
              <h1>
                <a href={repository.html_url} target="_blank" rel="noreferrer">
                  {repository.full_name}
                </a>
              </h1>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
          <CloneRepo>
            <h2>Clone este repositório</h2>
            <button type="button" onClick={copyCloneCommand}>
              <code>{`$ git clone ${repository?.clone_url}`}</code>
              <FiCopy size={24} />
            </button>
          </CloneRepo>
        </RepositoryInfo>
      ) : (
        <EventMessage>
          <p>Carregando informações do repositório...</p>
        </EventMessage>
      )}

      {issues && (
        <Issues>
          <h1>Issues abertas</h1>
          {issues.map(issue => (
            <a
              key={issue.id}
              href={issue.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size={26} />
            </a>
          ))}
        </Issues>
      )}
    </Container>
  );
};

export default Repository;
