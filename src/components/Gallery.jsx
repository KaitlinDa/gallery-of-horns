import React from 'react';
import HornedBeast from './HornedBeast';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = ({ data, onBeastSelect }) => {
  return (
    <div>
      <Container>
        <Row>
          {data.map((beast, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <HornedBeast
                title={beast.title}
                imageUrl={beast.imageUrl}
                description={beast.description}
                onClick={() => onBeastSelect(beast)} // Call the function on click
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
