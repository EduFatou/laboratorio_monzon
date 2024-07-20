import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { UserContext } from '../../../../context/UserContext';

const Dashboard = () => {
  const [quotes, setQuotes] = useState([]);
  const [quoteProducts, setQuoteProducts] = useState({});
  const [users, setUsers] = useState({});
  const [products, setProducts] = useState({});
  const { user } = useContext(UserContext);

  const fetchData = async () => {
    try {
      const [quotesRes, usersRes, productsRes, quoteProductsRes] = await Promise.all([
        axios.get('http://localhost:3000/api/quotes'),
        axios.get('http://localhost:3000/api/users'),
        axios.get('http://localhost:3000/api/products'),
        axios.get('http://localhost:3000/api/quote_products')
      ]);

      setQuotes(quotesRes.data);

      const usersMap = {};
      usersRes.data.forEach(user => {
        usersMap[user.user_id] = user;
      });
      setUsers(usersMap);

      const productsMap = {};
      productsRes.data.forEach(product => {
        productsMap[product.product_id] = product;
      });
      setProducts(productsMap);

      const quoteProductsMap = {};
      quoteProductsRes.data.forEach(qp => {
        if (!quoteProductsMap[qp.quote_id]) {
          quoteProductsMap[qp.quote_id] = [];
        }
        quoteProductsMap[qp.quote_id].push(qp);
      });
      setQuoteProducts(quoteProductsMap);

    } catch (error) {
      console.error('Error al hacer la petición:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (quoteId) => {
    try {
      const quoteProductsToDelete = quoteProducts[quoteId] || [];
      for (const qp of quoteProductsToDelete) {
        await axios.delete(`http://localhost:3000/api/quote_products?quote_product_id=${qp.quote_product_id}`);
      }
      await axios.delete(`http://localhost:3000/api/quotes?quote_id=${quoteId}`);

      setQuotes(quotes.filter(quote => quote.quote_id !== quoteId));

      const updatedQuoteProducts = { ...quoteProducts };
      delete updatedQuoteProducts[quoteId];
      setQuoteProducts(updatedQuoteProducts);

    } catch (error) {
      console.error('Error al eliminar el presupuesto:', error);
    }
  };

  if (user.role !== 'admin') {
    return <div>No tienes permisos para ver esta página.</div>;
  }

  return (
    <Container>
      <h2 className='login-title'>Dashboard</h2>
      <Row>
        {quotes.map(quote => (
          <Col key={quote.quote_id} md={4} className="mb-4">
            <Card className='shadow'>
              <Card.Body>
                <Card.Title>Presupuesto nº {quote.quote_id}</Card.Title>
                <Card.Text>
                  <strong>Usuario:</strong> {users[quote.user_id]?.name}<br />
                  <strong>Email:</strong> {users[quote.user_id]?.email}<br />
                  <strong>Teléfono:</strong> {users[quote.user_id]?.phone}<br />
                  <strong>Detalles:</strong> {quote.details}<br />
                  <strong>Productos:</strong>
                  <ul>
                    {quoteProducts[quote.quote_id]?.map(qp => (
                      <li key={qp.quote_product_id}>
                        {products[qp.product_id]?.product_name} - Cantidad: {qp.quantity}
                      </li>
                    ))}
                  </ul>
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(quote.quote_id)}
                >
                  Eliminar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;