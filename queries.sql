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
  user_id SERIAL PRIMARY KEY,
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
  details VARCHAR(500) NOT NULL
);


-- Crear presupuesto_productos
CREATE TABLE quote_products (
  quote_product_id SERIAL NOT NULL PRIMARY KEY,
  quote_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL
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
('Corona de zirconio', 100, 'Es un zirconio monolítico que por sus características podemos realizar restauraciones tanto para el sector posterior como anterior.', 'Fijas', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Protesis-fija-sin-metal-Zirconio-Lava-Esthetic-2-Dentales-Beticos.jpg'),
('Corona de disilicato', 100, 'La prótesis se une al pilar mediante cementos dentales.', 'Fijas', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Implantes-cementados-Dentales-Beticos.jpg'),
('Corona de metal sintetizado', 100, 'Es una aleación de cromo níquel titanio y molibdeno. Se puede utilizar en pacientes alérgicos al cobalto.', 'Fijas', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Protesis-fija-con-metal-Tilite-Dentales-Beticos-768x768.jpg'),
('Estructura esquelética', 100, 'Aleación de cromo cobalto. Montaje en resina', 'Removibles', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Protesis-removible-esqueletica-Super-Nobilium-Dentales-Beticos-768x768.jpg'),
('Dentadura parcial', 100, 'Son dentaduras mucosoportadas que reemplazan parte de los dientes.', 'Removibles', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Protesis-removible-acrilica-Dentadura-parcial-3-Dentales-Beticos.jpg'),
('Dentadura completa', 100, 'Sustituye la totalidad de los dientes y se realiza mediante acrílico rígido.', 'Removibles', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Protesis-removible-acrilica-Dentadura-completa-2-Dentales-Beticos.jpg'),
('Prótesis Híbrida', 100, 'Las prótesis realizadas con fibra de carbono tienen como principal beneficio su absorción de carga, resistencia, bio-compatibilidad y bajo peso.', 'Implantes', 'https://www.dentalgalindo.com/wp-content/uploads/2022/02/protesis-hibrida02.jpg'),
('Atornillado', 100, 'Sustituyen la raíz que falta, se fija la prótesis al pilar mediante una rosca o tornillo.', 'Implantes', 'https://www.ledezmadental.com/wp-content/uploads/2019/10/zirconio-sobre-implantes.png'),
('SobreDentadura', 100, 'Es una prótesis mixta cuya base de resina cubre los implantes dentales osteo-integrados.', 'Implantes', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Implante-SobreDentadura-Dentales-Beticos.jpg'),
('Férula de descarga', 100, 'Pueden actuar como protectores de los dientes para evitar los desgastes y abrasiones, y también pueden cumplir una función de relajación muscular y reposición mandibular.', 'Férulas', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Ferula-relajacion-Michigan-2-Dentales-Beticos.jpg'),
('Férula de blanqueamiento', 100, 'Se realizan atendiendo los criterios mandibulares y maxilares de cada paciente.', 'Férulas', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Ferula-relajacion-Brux-Fit-Dentales-Beticos.jpg'),
('Férula de mantenimiento', 100, 'Se realizan atendiendo los criterios mandibulares y maxilares de cada paciente.', 'Férulas', 'https://dentales-beticos.com/wp-content/uploads/2017/10/Ferula-relajacion-Brux-Fit-Mixta-vista-superior-Dentales-Beticos.jpg');


-- Insertar datos en tabla presupuesto
INSERT INTO quotes (user_id, details)
VALUES
(2, 'corona zirconio'),
(2, 'corona cementada'),
(3, 'corona sobre implante atornillada'),
(3, 'parcial 6 piezas');

-- Insertar datos en tabla presupuesto_productos
INSERT INTO quote_products (quote_id, product_id, quantity)
VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 4, 1);

-- Foreign Key presupuestos
ALTER TABLE quotes ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

-- Foreign Keys presupuesto_productos
ALTER TABLE quote_products ADD FOREIGN KEY (product_id) REFERENCES products (product_id);
ALTER TABLE quote_products ADD FOREIGN KEY (quote_id) REFERENCES quotes (quote_id);




-----------------------------------------------------------------------------------------------------------------------

