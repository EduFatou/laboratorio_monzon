import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import imgFijas from '../../../../assets/fija.jpg';
import imgFerulas from '../../../../assets/ferula.jpg';
import imgImplantes from '../../../../assets/implante.jpg';
import imgRemovibles from '../../../../assets/removible.jpg';

const CategoriesList = () => {
  const categories = [
    { name: 'Fijas', img: `${imgFijas}`},
    { name: 'Implantes', img: `${imgImplantes}`},
    { name: 'Férulas', img: `${imgFerulas}`},
    { name: 'Removibles', img: `${imgRemovibles}`},
  ];

  return (
    <section className='categories'>
      <Carousel className="categories-carousel shadow">
        {categories.map((category, index) => (
          <Carousel.Item key={index}>
            <Link to={`/categorias/${category.name}`} className="category-card">
              <img
                className="d-block w-100 fixed-size-img"
                src={category.img}
                alt={category.name}
              />
              <Carousel.Caption>
                <h3>{category.name}</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default CategoriesList;


