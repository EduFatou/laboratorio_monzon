import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import imgFijas from '../../../../assets/fijas3.png';
import imgFerulas from '../../../../assets/ferula.jpg';
import imgImplantes from '../../../../assets/implante.jpg';
import imgRemovibles from '../../../../assets/removible.jpg';

const CategoriesList = () => {
  const categories = [
    { name: 'Prótesis Fijas', img: `${imgFijas}`},
    { name: 'Implantes Dentales', img: `${imgImplantes}`},
    { name: 'Férulas Dentales', img: `${imgFerulas}`},
    { name: 'Prótesis Removibles', img: `${imgRemovibles}`},
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


