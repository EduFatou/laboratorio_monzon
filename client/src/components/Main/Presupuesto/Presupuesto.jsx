import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Row, Col, Container, Card } from 'react-bootstrap';
import { ProductListContext } from '../../../context/ProductListContext';
import { UserContext } from '../../../context/UserContext';
import axios from 'axios';
import { Hourglass } from 'react-loader-spinner';


const Presupuesto = () => {
  const [userData, setUserData] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);


  const { productList } = useContext(ProductListContext);
  const { user } = useContext(UserContext);


  useEffect(() => {
    const user_email = user.email
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/users?email=${user_email}`);
        setUserData(res.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleProductChange = (index, event) => {
    const { name, value } = event.target;
    const newSelectedProducts = [...selectedProducts];
    newSelectedProducts[index] = {
      ...newSelectedProducts[index],
      [name]: value
    };
    setSelectedProducts(newSelectedProducts);
  };

  const handleAddProduct = () => {
    setSelectedProducts([...selectedProducts, { product_id: '', quantity: 1 }]);
  };

  const handleRemoveProduct = (index) => {
    const newSelectedProducts = selectedProducts.filter((_, i) => i !== index);
    setSelectedProducts(newSelectedProducts);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userData.user_id || !details || selectedProducts.length === 0) {
      alert('Completa el presupuesto antes de enviarlo.');
      return;
    }

    const quoteData = {
      user_id: userData.user_id,
      details: details
    };

    try {
      setLoading(true);
      const quoteResponse = await axios.post('/api/quotes', quoteData);
      const quote_id = quoteResponse.data.quote_id;

      const quoteProductsData = selectedProducts.map(product => ({
        quote_id: quote_id,
        product_id: product.product_id,
        quantity: product.quantity
      }));
      console.log(quoteProductsData);
      await Promise.all(quoteProductsData.map(async (quoteProduct) => {
        await axios.post('/api/quote_products', quoteProduct);
      }));

      alert('Presupuesto enviado');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Error al crear el presupuesto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner-container">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              colors={['#306cce', '#72a1ed']}
            />
          </div>
        </div>
      )}
      <Container className="presupuesto-container">
        <Card className="presupuesto-card shadow">
          <Card.Body>
            <h2 className="login-title">Solicita tu presupuesto</h2>
            <Form onSubmit={handleSubmit} className="presupuesto-form">
              <Form.Group as={Row} controlId="formName" className="mb-3">
                <Form.Label column sm={3}>Nombre:</Form.Label>
                <Col sm={7}>
                  <Form.Control type="text" value={userData.name || ''} plaintext readOnly />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formEmail" className="mb-3">
                <Form.Label column sm={3}>Email:</Form.Label>
                <Col sm={7}>
                  <Form.Control type="email" value={userData.email || ''} plaintext readOnly />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPhone" className="mb-3">
                <Form.Label column sm={3}>Teléfono:</Form.Label>
                <Col sm={7}>
                  <Form.Control type="text" value={userData.phone || ''} plaintext readOnly />
                </Col>
              </Form.Group>

              <Form.Group controlId="formProducts" className="mb-3">
                <Form.Label>Productos:</Form.Label>
                {selectedProducts.map((product, index) => (
                  <Row key={index} className="mb-3 product-row">
                    <Col>
                      <Form.Control
                        as="select"
                        name="product_id"
                        value={product.product_id}
                        onChange={(e) => handleProductChange(index, e)}
                      >
                        <option value="">Seleccionar producto</option>
                        {productList.map((prod) => (
                          <option key={prod.product_id} value={prod.product_id}>
                            {prod.product_name}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Control
                        type="number"
                        name="quantity"
                        value={product.quantity}
                        onChange={(e) => handleProductChange(index, e)}
                        min="1"
                      />
                    </Col>
                    <Col>
                      <Button variant="danger" onClick={() => handleRemoveProduct(index)}>
                        Eliminar
                      </Button>
                    </Col>
                  </Row>
                ))}
                <Button variant="primary" onClick={handleAddProduct} className="add-product-btn">
                  Añadir Producto
                </Button>
              </Form.Group>

              <Form.Group controlId="formDetails" className="mb-3">
                <Form.Label>Detalles:</Form.Label>
                <Form.Control
                  as="textarea"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </Form.Group>

              <Button variant="success" type="submit" className="submit-btn">Enviar</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Presupuesto;
