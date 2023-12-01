import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SelectedBeast = ({ selectedBeast, onClose }) => {
  return (
    <Modal show={selectedBeast !== null} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedBeast?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={selectedBeast?.imageUrl} alt={selectedBeast?.title} />
        <p>{selectedBeast?.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SelectedBeast;
