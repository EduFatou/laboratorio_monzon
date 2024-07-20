const express = require("express");
const cors = require('cors');
const path = require('path');
require('dotenv').config(); 

const app = express();
const port = process.env.RENDER_PORT || 3000;


app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

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


app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

const server = app.listen(port, () => {
    console.log(`Laboratorio Monzón listening on port ${port}`);
});