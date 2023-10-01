import React, { useEffect, useState } from 'react';
import baseUrl from '../api';
import { Link } from 'react-router-dom';

const Shoes = () => {
  const [shoesData, setShoesData] = useState([]);

  async function fetchShoes() {
    try {
      const response = await baseUrl.get('/shoes');
      setShoesData(response.data);
    } catch (error) {
      console.error('Error fetching shoe data:', error);
    }
  }

  useEffect(() => {
    fetchShoes();
  }, []);

  return (
    <main id="ShoesPageContainer">
      <ul>
        {shoesData.map((shoe) => (
          <li className="product-card" key={shoe.id}>
            <div>
              <img src={shoe.img} alt={shoe.name} />
            </div>
            <div>
              <Link to={`/shoes/${shoe.id}`}>{shoe.name}</Link>
              <p>Price: ${shoe.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Shoes;