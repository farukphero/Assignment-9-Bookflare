import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';

const Home = () => {
  const homeCarts = useLoaderData()
  const newCart = homeCarts.data
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {newCart.map((cart) => (
          <Cart key={cart.id} cart={cart}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Home;