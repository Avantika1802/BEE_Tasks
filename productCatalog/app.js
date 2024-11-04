const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Sample product data
const products = [
    { image: '/images/product1.jpg', name: 'Product 1', description: 'Description for Product 1' },
    { image: '/images/product2.jpg', name: 'Product 2', description: 'Description for Product 2' },
    { image: '/images/product3.jpg', name: 'Product 3', description: 'Description for Product 3' }
];

// Route to render the product catalog
app.get('/catalog', (req, res) => {
    res.render('catalog', { products });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
