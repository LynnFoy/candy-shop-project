import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(state => state.user);

  return (
    <header>
      <h1>Candy Shop</h1>
      <div>{user}</div>
    </header>
  );
};

export default Header;
