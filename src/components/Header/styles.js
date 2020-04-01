import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;

  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    font-size: 14px;

    > h3 {
      font-size: 26px;
      color: #fff;
      margin-right: 10px;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
