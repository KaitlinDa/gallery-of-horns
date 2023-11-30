import React from 'react';
import HornedBeast from './HornedBeast';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
  const beasts = [
    {
      title: "Mr.Smiles",
      imageUrl: "img/beast1.jpg",
      description: "Mr.Smiles will smile at anything, especially at what he's eating for dinner."
    },
    {
      title: "Skadaddy",
      imageUrl: "img/beast2.jpg",
      description: "Skadaddy is the kindest horned beast of them all, one hug and he'll literally take your breath away."
    },
    
  ];

  return (
    <div>
      <Container>
        <Row>
          {beasts.map((beast, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <HornedBeast
                title={beast.title}
                imageUrl={beast.imageUrl}
                description={beast.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

// src/
//   components/
//     App.jsx
//   data/
//     data.json

export default Gallery;


