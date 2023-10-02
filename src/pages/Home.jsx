import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); 

  const handleStartShopping = () => {
    
    navigate('/');
  };

  return (
    <main id="home">
      <section className="homePageContainer">
        <h1>Shoe Daniel's ?</h1>
        <p>The best Shopping experience starts Here ...</p>
        <button onClick={handleStartShopping} className="homePageBtn">
          Start Shopping <i className=""></i>
        </button>
      </section>
    </main>
  );
};

export default Home;