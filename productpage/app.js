const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Sample products data
const products = [
    { name: "Mental Peace", price: 0 ,image:"download.png"},
    { name: "Good Sleep", price: 0,image:"download.png" },
    { name: "Happy Life", price: 0,image:"download.png" },
    { name: "Good Health", price: 0 ,image:"download.png"},
];

// Middleware to handle static files
app.use(express.static('public'));

// Route for the /products page
app.get('/products', (req, res) => {
    let filteredProducts = products;
    if (req.query.search) {
        const searchQuery = req.query.search.toLowerCase();
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchQuery)
        );
    }
    res.render('products', { products: filteredProducts });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
