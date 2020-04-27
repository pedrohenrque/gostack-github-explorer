import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #3a3a3a;
  max-width: 500px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  box-shadow: -6px -6px 20px rgba(255, 255, 255, 1),
    6px 6px 20px rgba(0, 0, 0, 0.1);

  

  ${(props) =>
      props.hasError && //eslint-disable-line
      css`
        animation: error 250ms linear, fade paused;
        animation-iteration-count: 2;

        @keyframes error {
          0% {
            transform: translateX(0)
          }
          35% {
            transform: translateX(-20px)
          }
          70% {
            transform: translateX(20px)
          }
          100% {
            transform: translateX(0)
          }
        }
      `};


  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
    transition: 0.2s;
   
    ${(props) =>
      props.hasError && //eslint-disable-line
      css`
        border-color: #c53030;
      
      `};

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button { 
    width: 210px;
    height: 70px;
    background: #7159c1;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: 600;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#7159c1')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.3s;
    box-shadow: -6px -6px 20px rgba(255, 255, 255, 1),
    6px 6px 20px rgba(0, 0, 0, 0.1);

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
      box-shadow: -6px -6px 20px rgba(0, 0, 0, 0.03),
    6px 6px 20px rgba(255, 255, 255, 0.5),
    inset -6px -6px 20px rgba(255, 255, 255, 0.5),
    inset 6px 6px 20px rgba(0, 0, 0, 0.01);
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
        font-size: 20px;
        color: #3d3d4d;
        font-weight: 600;
      }
      p {
        font-size: 16px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
