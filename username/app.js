const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Sample user data
const users = {
    john: { age: 25, hobby: 'Playing Guitar' },
    emily: { age: 30, hobby: 'Reading Books' },
    michael: { age: 28, hobby: 'Cycling' }
};

// Route to handle dynamic profile based on username
app.get('/profile/:username', (req, res) => {
    const username = req.params.username.toLowerCase();
    
    // Check if the user exists in the hardcoded data
    const user = users[username];

    if (user) {
        // If user exists, render the profile page with user details
        res.render('profile', { username, age: user.age, hobby: user.hobby });
    } else {
        // If user doesn't exist, send a 404 response
        res.status(404).send('User not found');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
