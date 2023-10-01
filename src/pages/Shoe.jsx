import React, { useEffect, useState } from 'react';
import baseUrl from '../api';
import { Link, useParams } from 'react-router-dom';

const Shoe = () => {
  const { shoeId } = useParams();
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    async function fetchShoe() {
      try {
        const response = await baseUrl.get(`/shoes/${shoeId}`);
        setShoe(response.data);
      } catch (error) {
        console.error('Error fetching shoe data:', error);
      }
    }

    fetchShoe();
  }, [shoeId]);

  if (!shoe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shoe-detail-container">
    <img class='shoe-image'  src={shoe.img} alt={shoe.name} />
      <h2>{shoe.name}</h2>
      <div className="shoe-details">
        <span className="shoe-price">${shoe.price}</span>
      </div>

      <Link to={`/shoes/${shoeId}/edit`} className="edit-link">
        Edit shoe
      </Link>
    </div>
  );
};

export default Shoe;