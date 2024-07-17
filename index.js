const express = require("express");
const cors = require('cors');
const path = require('path');
require('dotenv').config(); 

const app = express(); //inicializa servidor
const port = 3000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json()); // Habilito recepción de JSON en servidor
app.use(express.urlencoded({ extended: true })); // Habilito recepción de formularios en servidor

// Routes
const productsRoutes = require("./routes/products.routes");
const quotesRoutes = require("./routes/quotes.routes");
const quote_productsRoutes = require("./routes/quote_products.routes");
const usersRoutes = require("./routes/users.routes");

app.use(cors());

// API Routes
app.use('/api/products', productsRoutes);
app.use('/api/quotes', quotesRoutes);
app.use('/api/quote_products', quote_productsRoutes);
app.use('/api/users', usersRoutes);


app.get("/", (req, res) => {
    res.send("Hello World! lets go for coffee!!");
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const server = app.listen(port, () => {
    console.log(`Lab app listening on http://localhost:${port}`);
});

module.exports = server;