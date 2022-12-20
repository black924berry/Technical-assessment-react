import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useCat } from '../apis/getCatById';

const CatCardDetail = () => {
    const cat = useParams();
    const navigate = useNavigate();
    const catQuery = useCat(cat?.catId as string);
    if (catQuery.isLoading) {
        return <>...loading</>;
    }

    if (!catQuery.data) return null;

    const breed = catQuery.data?.breeds[0];

    const handleClick = () => {
        navigate('/', { state: { breed: breed.id } });
    };

    return (
        <div className="Cat">
            <Container>
                <Card>
                    <Card.Header>
                        <Button className="btn btn-primary" onClick={handleClick}>
                            Back
                        </Button>
                    </Card.Header>
                    <Card.Img src={catQuery.data?.url} />
                    <Card.Body>
                        <h4>{breed.name}</h4>
                        <h5>Origin: {breed.origin}</h5>
                        <h6>{breed.temperament}</h6>
                        <p>{breed.description}</p>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default CatCardDetail;
