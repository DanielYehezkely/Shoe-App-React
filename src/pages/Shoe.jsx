import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

import baseUrl from '../api';

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

  const handleDelete = async () => {
    try {
      await axios.delete(`/shoes/${shoeId}`);
      
    } catch (error) {
      console.error('Error deleting shoe:', error);
    }
  };

  return (
    <div className="shoe-detail-container">
    <img className='shoe-image'  src={shoe.img} alt={shoe.name} />
      <div className="shoe-details">
      <h2  >{shoe.name}</h2>
        <span >${shoe.price}</span>
      </div>

      <Link to={`/shoes/${shoeId}/edit`} className="edit-link">
        Edit shoe
      </Link>

      <button className='delete-btn' onClick={handleDelete}> Delete Shoe</button>
    </div>
  );
};

export default Shoe;