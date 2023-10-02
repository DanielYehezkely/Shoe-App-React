import React, { useState } from 'react'

import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../api';

const AddShoe = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        imgUrl: ''
    });
    const [error, setError] = useState({
        isError: false,
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await baseUrl.post('/shoes', formData);
            navigate('/');
        } catch (error) {
            console.error(error);
            setError({
                isError: true,
                message: error.response.data.message
            });
        }
    };

    return (
        <>


            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId='formName'>
                            <Form.Label>Name: </Form.Label>
                            <Form.Control
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId='formPrice'>
                            <Form.Label>Price:</Form.Label>
                            <Form.Control
                                type='number'
                                name='price'
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId='formImgUrl'>
                            <Form.Label>ImageUrl:</Form.Label>
                            <Form.Control
                                type='text'
                                name='imgUrl'
                                value={formData.imgUrl}
                                onChange={handleChange}
                            />
                        </Form.Group>


                        {error.isError && (
                            <Message variant='danger' dismissible={false}>
                                {error.message}
                            </Message>
                        )}

                        <Button variant='primary' type='submit' className='mt-3'>
                            Add Shoe
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default AddShoe