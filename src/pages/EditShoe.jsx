import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


import axios from 'axios';
import baseUrl from '../api';


const EditShoe = () => {

    const navigate = useNavigate();
    const { shoeId } = useParams();
    const [shoe, setShoe] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        img: '',
    });

    useEffect(() => {
        async function fetchShoe() {
            try {
                const response = await baseUrl.get(`/shoes/${shoeId}`);
                setShoe(response.data);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching shoe data:', error);
            }
        }

        fetchShoe();
    }, [shoeId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`/shoes/${shoeId}`, formData);
            navigate(`/shoes/${shoeId}`)
        } catch (error) {
            console.error('Error updating shoe:', error);
        }
    };

    return (
        <div className="edit-shoe-container">
            <h2>Edit Shoe</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="img">Image URL:</label>
                    <input
                        type="text"
                        id="img"
                        name="img"
                        value={formData.img}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};


export default EditShoe