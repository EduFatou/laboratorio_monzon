-- Crear tabla products
CREATE TABLE products (
  product_id SERIAL NOT NULL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  description VARCHAR(500) NOT NULL,
  category VARCHAR(40) NOT NULL,
  url_photo VARCHAR(255) NOT NULL
);

-- Crear users
CREATE TABLE users (
  user_id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(40) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(40) NOT NULL,
  CONSTRAINT chk_role CHECK (role IN ('admin', 'user'))
);

-- Crear presupuestos
CREATE TABLE quotes (
  quote_id SERIAL NOT NULL PRIMARY KEY,
  user_id INT NOT NULL,
  details VARCHAR(500) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);

-- Crear presupuesto_productos
CREATE TABLE quote_products (
  quote_product_id SERIAL NOT NULL PRIMARY KEY,
  quote_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (quote_id) REFERENCES quotes (quote_id),
  FOREIGN KEY (product_id) REFERENCES products (product_id)
);

-- Insertar datos en tabla users
INSERT INTO users (name, email, phone, password, role)
VALUES
('Admin', 'admin@gmail.com', '+34 600 000 000', '123456', 'admin'),
('Edu', 'edu@gmail.com','+34 600 000 001', '123456', 'user'),
('Juan', 'juan@gmail.com','+34 600 000 002', '123456', 'user');

-- Insertar datos en tabla producto
INSERT INTO products (product_name, price, description, category, url_photo)
VALUES
('Corona de zirconio', 100, 'Descubre la resistencia del zirconio monolítico, perfecto para restauraciones impecables tanto en el sector posterior como anterior.', 'Fijas', 'https://www.resycam.com/wp-content/uploads/2020/01/contorno-completo-corona.jpg'),
('Corona de disilicato', 100, 'Una prótesis que se adhiere con precisión al pilar mediante cementos dentales avanzados.', 'Fijas', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Implantes-cementados-Dentales-Beticos.jpg'),
('Corona de metal sintetizado', 100, 'La durabilidad superior de la corona de metal sintetizado, hecha de una innovadora aleación perfecta para pacientes alérgicos al cobalto.', 'Fijas', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Protesis-fija-con-metal-Tilite-Dentales-Beticos-768x768.jpg'),
('Estructura esquelética', 100, 'Resistencia y ligereza en la estructura esquelética de cromo cobalto, combinada con un montaje en resina de alta calidad.', 'Removibles', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Protesis-removible-esqueletica-Super-Nobilium-Dentales-Beticos-768x768.jpg'),
('Dentadura parcial', 100, 'Las dentaduras parciales mucosoportadas están diseñadas para reemplazar con naturalidad parte de los dientes.', 'Removibles', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Protesis-removible-acrilica-Dentadura-parcial-3-Dentales-Beticos.jpg'),
('Dentadura completa', 100, 'dentadura completa hecha de acrílico rígido, reemplazando la totalidad de tus dientes con comodidad.', 'Removibles', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Protesis-removible-acrilica-Dentadura-completa-2-Dentales-Beticos.jpg'),
('Prótesis Híbrida', 100, 'Estabilidad y funcionalidad en las prótesis híbridas sobre implantes, fusionando lo mejor de ambos mundos.', 'Implantes', 'https://www.dentalgalindo.com/wp-content/uploads/2022/02/protesis-hibrida02.jpg'),
('Atornillado', 100, 'Las prótesis atornilladas, sustituyen la raíz que falta, se fijan con precisión al pilar mediante una rosca o tornillo, asegurando un ajuste perfecto.', 'Implantes', 'https://www.ledezmadental.com/wp-content/uploads/2019/10/zirconio-sobre-implantes.png'),
('Sobre Dentadura', 100, 'La Sobre Dentadura, una solución mixta que cubre los implantes dentales osteo-integrados con una base de resina.', 'Implantes', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Implante-SobreDentadura-Dentales-Beticos.jpg'),
('Férula de descarga', 100, 'Protege tus dientes y alivia la tensión muscular con nuestras férulas de descarga, diseñadas para evitar desgastes y promover la relajación mandibular.', 'Férulas', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Ferula-relajacion-Michigan-2-Dentales-Beticos.jpg'),
('Férula de blanqueamiento', 100, 'Logra una sonrisa brillante con nuestras férulas de blanqueamiento, adaptadas a las necesidades mandibulares y maxilares de cada paciente.', 'Férulas', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Ferula-relajacion-Brux-Fit-Dentales-Beticos.jpg'),
('Férula de mantenimiento', 100, 'Mantén tu sonrisa perfecta con nuestras férulas de mantenimiento, diseñadas para prolongar los resultados de tus tratamientos dentales.', 'Férulas', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Ferula-relajacion-Brux-Fit-Mixta-vista-superior-Dentales-Beticos.jpg');

-- Insertar datos en tabla presupuesto
INSERT INTO quotes (user_id, details)
VALUES
(2, 'coronas zirconio en piezas 6, 7 y 8'),
(2, 'coronas cementadas'),
(3, 'coronas sobre implante atornilladas'),
(3, 'parcial con 6 piezas');

-- Insertar datos en tabla presupuesto_productos
INSERT INTO quote_products (quote_id, product_id, quantity)
VALUES
(1, 1, 3),
(2, 1, 2),
(3, 2, 4),
(4, 5, 1);
