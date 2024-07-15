const express = require("express");
const app = express(); //inicializa servidor
const port = 3000;

app.use(express.static('public')); // Serve static files
app.use(express.json()); // Habilito recepción de JSON en servidor
app.use(express.urlencoded({ extended: true })); // Habilito recepción de formularios en servidor

// Routes
const productsRoutes = require("./routes/products.routes");
const quotesRoutes = require("./routes/quotes.routes");
const quote_productsRoutes = require("./routes/quote_products.routes");

// API Routes
app.use('/api/products', productsRoutes);
app.use('/api/quotes', quotesRoutes);
app.use('/api/quote_products', quote_productsRoutes);



app.get("/", (req, res) => {
    res.send("Hello World! lets go for coffee!!");
});

const server = app.listen(port, () => {
    console.log(`Lab app listening on http://localhost:${port}`);
});

module.exports = server;