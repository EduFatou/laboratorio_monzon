import React, { useState, useContext } from 'react';
import { ProductListContext } from '../../../../../../context/ProductListContext';
import { Card as BootstrapCard, Modal, Button } from 'react-bootstrap';

const CardList = ({ category }) => {
  const { productList } = useContext(ProductListContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const filteredProducts = productList.filter(product => product.category === category);

  return (
    <section className='card-list'>
      {filteredProducts.map(product => (
        <BootstrapCard key={product.product_id} className="mb-4 shadow" onClick={() => handleShow(product)}>
          <BootstrapCard.Img variant="top" src={product.url_photo} />
          <BootstrapCard.Body>
            <BootstrapCard.Title>{product.product_name}</BootstrapCard.Title>
            {/* <BootstrapCard.Text>{product.description}</BootstrapCard.Text>
            <BootstrapCard.Text>Precio: {product.price}</BootstrapCard.Text> */}
          </BootstrapCard.Body>
        </BootstrapCard>
      ))}

      {selectedProduct && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.product_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedProduct.url_photo} alt={selectedProduct.product_name} style={{ width: '100%' }} />
            <p>{selectedProduct.description}</p>
            {/* <p>Precio: {selectedProduct.price}</p> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default CardList;

