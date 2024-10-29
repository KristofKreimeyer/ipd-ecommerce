import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex w-full justify-center h-screen items-center flex-col">
      <h1 className="headline text-6xl">Welcome to Our Store</h1>
      <h2 className="subheadline">
        <Link to="/catalog">
          Browse our <span className="text-orange-500">catalog</span>
        </Link>
      </h2>
    </div>
  );
};

export default Home;
