import { shade, transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 auto;
  padding: 40px 20px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    padding: 6px 8px 6px 4px;
    border-radius: 5px;

    text-decoration: none;
    color: ${props => props.theme.colors.altText};

    transition: 0.2s;

    &:hover {
      color: ${props => props.theme.colors.primary};
      font-weight: bold;
      background: ${props => transparentize(0.93, props.theme.colors.primary)};
    }

    svg {
      margin: 1px 4px 0 0;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  width: 100%;

  header {
    display: flex;
    align-items: center;

    a {
      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;

        border: 3px solid ${props => props.theme.colors.background};
        transition: 0.2s;

        &:hover {
          box-shadow: 0 0 1px 2px ${props => props.theme.colors.primary};
        }
      }
    }

    div {
      margin-left: 24px;
      flex: 1;

      h1 {
        a {
          font-size: 36px;
          text-decoration: none;
          color: ${props => props.theme.colors.text};

          transition: 0.2s;

          &:hover {
            color: ${props => props.theme.colors.primary};
          }
        }
      }

      p {
        font-size: 18px;
        color: ${props => shade(0.2, props.theme.colors.altText)};
        margin-top: 8px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: ${props => props.theme.colors.text};
      }

      span {
        display: block;
        font-size: 18px;
        margin-top: 4px;
        color: ${props => props.theme.colors.altText};
      }
    }
  }
`;

export const CloneRepo = styled.a`
  h2 {
    margin-top: 40px;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 24px;
    padding: 24px;
    border-radius: 5px;
    border: 0;

    color: ${props => props.theme.colors.text};
    text-decoration: none;

    background: ${props => transparentize(0.85, props.theme.colors.altText)};

    transition: 0.2s;

    svg {
      color: ${props => props.theme.colors.altText};
    }

    &:hover {
      box-shadow: 0 0 1px 1px ${props => props.theme.colors.primary};

      svg {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 60px;
  width: 100%;

  h1 {
    margin-bottom: 30px;
  }

  a {
    width: 100%;
    background: white;

    display: flex;
    align-items: center;

    border-radius: 5px;
    padding: 24px;

    text-decoration: none;
    color: ${props => props.theme.colors.altText};

    transition: 0.3s;

    & + a {
      margin-top: 20px;
    }

    &:hover {
      transform: translateX(10px);
      color: ${props => shade(0.2, props.theme.colors.altText)};
      box-shadow: 0 0 1px 1px ${props => props.theme.colors.primary};

      svg {
        color: ${props => props.theme.colors.primary};
      }
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        color: ${props => props.theme.colors.text};
        font-size: 20px;
      }

      p {
        font-size: 18px;
        margin-top: 4px;
      }
    }
  }
`;

export const EventMessage = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 18px;
    text-align: center;
    color: ${props => props.theme.colors.altText};
  }
`;
