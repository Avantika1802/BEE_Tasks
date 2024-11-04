const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// In-memory array to store blog posts
const posts = [];

// Route to render the list of blog posts and a form to add new posts
app.get('/posts', (req, res) => {
    res.render('posts', { posts });
});

// Route to handle form submission and add a new blog post
app.post('/posts', (req, res) => {
    const { title, body } = req.body;
    if (title && body) {
        // Add the new post to the array
        posts.push({ title, body });
    }
    res.redirect('/posts');
});

// Route to display a single post in detail
app.get('/posts/:title', (req, res) => {
    const postTitle = req.params.title;
    const post = posts.find(p => p.title === postTitle);
    if (post) {
        res.render('post', { post });
    } else {
        res.send('Post not found!');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
