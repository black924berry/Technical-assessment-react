import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CatCardGrid from './CatCardGrid';
import { useBreeds } from '../apis/getBreeds';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Home = () => {
    const { state } = useLocation();
    const breedsQuery = useBreeds();
    const [selectedBreed, setSelectedBreed] = useState<string>(state?.breed || '');

    const CatGridContainer = styled(Container)`
        padding: 20px;
    `;

    if (breedsQuery.isLoading) {
        return <>...loading</>;
    }

    if (!breedsQuery.data) return null;

    return (
        <CatGridContainer>
            <h1>Cat Browser</h1>
            <Row style={{ padding: '10px 0' }}>
                <Col md={3} sm={6} xs={12}>
                    <Form.Group controlId="breed">
                        <Form.Label>Breed</Form.Label>
                        <Form.Control
                            as="select"
                            value={selectedBreed}
                            onChange={(e) => setSelectedBreed(e.target.value)}>
                            <option value="">Select breed</option>
                            {breedsQuery.data.map(({ id, name }: { id: string; name: string }) => (
                                <option key={id} value={id}>
                                    {name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            {selectedBreed && <CatCardGrid breedId={selectedBreed} />}
        </CatGridContainer>
    );
};

export default Home;
