import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import imgEduardo from '../../../assets/eduardo1.jpg';
import imgJuanma from '../../../assets/juanma1.jpeg';
import imgJuan from '../../../assets/juan1.jpeg';
import imgGerman from '../../../assets/eduardo1.jpg';
import imgcabecera from '../../../assets/cabeceraequipo.jpg';

const equipoData = [
  {
    id: 1,
    name: 'Eduardo Fatou',
    role: 'Especialista en prótesis completa de alto impacto y cerámica multicromática.',
    description: 'Con más de 35 años de experiencia, brindar soluciones dentales que combinan funcionalidad, durabilidad y estética superior. Su profundo conocimiento y habilidades refinadas le permiten ajustar cada prótesis con precisión milimétrica, asegurando una integración perfecta y una apariencia natural.',
    imgUrl: imgEduardo
  },
  {
    id: 2,
    name: 'Juan Manuel García',
    role: 'Especialista en diseño digital, zirconio y disilicato.',
    description: 'Su enfoque innovador y meticuloso asegura que cada prótesis se ajuste perfectamente y cumpla con los más altos estándares de durabilidad y estética.',
    imgUrl: imgJuanma
  },
  {
    id: 3,
    name: 'Germán Pérez',
    role: 'Especialista en diseño digital, nuevas tecnologías y cerámica estratificada.',
    description: 'Es un pionero en la implementación de nuevas tecnologías. Su habilidad para integrar técnicas avanzadas con materiales de última generación garantiza resultados excepcionales, maximizando la funcionalidad y la belleza de cada prótesis.',
    imgUrl: 'https://via.placeholder.com/150' 
  },
  {
    id: 4,
    name: 'Juan Díaz',
    role: 'Especialista en diseño digital, alta estética en cerámica dental, zirconio, disilicato y carillas.',
    description: 'Su pasión por la estética y su dominio de las tecnologías digitales aseguran prótesis de calidad superior, brindando sonrisas naturales y deslumbrantes.',
    imgUrl: imgJuan
  }
];

const Equipo = () => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Image src={imgcabecera} fluid className="portada shadow" />
        </Col>
      </Row>
      <Row>
        {equipoData.map((member, index) => (
          <Col md={12} key={member.id} className="mb-4">
            <Card className={`shadow ${index % 2 === 0 ? 'left' : 'right'}`}>
              <Row nogutters="true" className={`align-items-center ${index % 2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse'}`}>
                <Col md={4} className={`text-center`}>
                  <Image src={member.imgUrl} roundedCircle className="shadow mb-3 equipo-img" />
                </Col>
                <Col md={8} className={`text-center`}>
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                    <Card.Text>{member.description}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Equipo;
