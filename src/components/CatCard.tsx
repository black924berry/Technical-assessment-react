import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Cat } from '../types';
import styled from 'styled-components';

interface CatProps {
    item: Cat;
}

const CustomImage = styled(Card.Img)`
    height: 210px;
    object-fit: cover;
`;

const CatCard: React.FC<CatProps> = ({ item }) => {
    return (
        <Col md={3} sm={6} xs={12}>
            <Card>
                <CustomImage variant="top" src={item.url} />
                <Card.Body>
                    <Link className="btn btn-primary btn-block" to={'/detail/' + item.id}>
                        View details
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CatCard;
