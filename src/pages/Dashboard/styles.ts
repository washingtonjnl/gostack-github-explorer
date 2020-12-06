import styled from 'styled-components';
import { shade } from 'polished';

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

export const Title = styled.h1`
  font-size: 42px;
  line-height: 56px;
  color: ${props => props.theme.colors.text};

  margin-top: 60px;
  max-width: 400px;
`;

export const Form = styled.form`
  margin-top: 40px;
  width: 100%;

  display: flex;
  height: 70px;

  input {
    flex: 1;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    transition: 0.2s;

    &:hover,
    &:focus {
      box-shadow: 0 0 1px 1px ${props => props.theme.colors.primary};
    }

    &::placeholder {
      color: ${props => props.theme.colors.altText};
    }
  }

  button {
    width: 210px;
    background: ${props => props.theme.colors.primary};
    border-radius: 0 5px 5px 0;
    border: 0;

    color: white;
    font-weight: bold;
    font-size: 20px;

    transition: 0.2s;

    &:hover {
      background: ${props => shade(0.1, props.theme.colors.primary)};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 60px;
  width: 100%;

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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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
