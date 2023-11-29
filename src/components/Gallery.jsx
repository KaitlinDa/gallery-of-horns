import React from 'react';
import HornedBeast from './HornedBeast';

const Gallery = () => {
  return (
    <div>
      {/* Render multiple HornedBeast components */}
      <HornedBeast
        title="Mr.Smiles"
        imageUrl="img/beast1.jpg"
        description="Mr.Smiles will smile at anything, especially at what he's eating for dinner."
      />
      <HornedBeast
        title="Skadaddy"
        imageUrl="img/beast2.jpg"
        description="Skadaddy is the kindest horn beast of them all, one hug and he'll literally take your breath away."
      />
      {/* Add more HornedBeast components as needed */}
    </div>
  );
};

export default Gallery;

