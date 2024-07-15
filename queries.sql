-- Crear producto
CREATE TABLE products (
  product_id SERIAL NOT NULL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  description VARCHAR(500) NOT NULL,
  url_photo VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL,
  CONSTRAINT chk_type CHECK (type IN ('producto', 'servicio'))
);

-- Crear presupuestos
CREATE TABLE quotes (
  quote_id SERIAL NOT NULL PRIMARY KEY,
  user_id INT NOT NULL,
  details VARCHAR(500) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Foreign Key presupuestos
ALTER TABLE quotes ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

-- Crear presupuesto_productos
CREATE TABLE quote_products (
  quote_product_id SERIAL NOT NULL PRIMARY KEY,
  quote_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (quote_id) REFERENCES quotes(quote_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Foreign Keys presupuesto_productos
ALTER TABLE quote_products ADD FOREIGN KEY (product_id) REFERENCES products (product_id);
ALTER TABLE quote_products ADD FOREIGN KEY (quote_id) REFERENCES quotes (quote_id);


-- Insertar datos en tabla producto
INSERT INTO products (product_name, price, description, url_photo, type)
VALUES
('corona zirconio', 100, 'corona monolítica', 'foto', 'producto'),
('corona cementada', 100, 'corona ceramizada', 'foto', 'producto'),
('corona sobre implante atornillada', 100, 'corona sobre implante', 'foto', 'producto'),
('parcial 6 piezas', 100, 'removible resina', 'foto', 'producto');

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


-- Crear users
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(40) NOT NULL,
);

-- Insertar datos en tabla users
INSERT INTO users (name, email, password, role)
VALUES
('Admin', 'admin@gmail.com', '123456', 'admin'),
('Edu', 'edu@gmail.com', '123456', 'user');
('Juan', 'juan@gmail.com', '123456', 'user');






-----------------------------------------------------------------------------------------------------------------------

