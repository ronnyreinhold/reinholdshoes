import React from 'react';
import { Link } from 'react-router-dom';
import { GiRunningShoe } from 'react-icons/gi';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <h3>REINHOLDSHOES</h3>
        <GiRunningShoe size={26} color="#fff" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
