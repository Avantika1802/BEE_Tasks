const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');



let tasks = [];

// GET /todo - Display the form and task list
app.get('/todo', (req, res) => {
    res.render('todo', { tasks });
});

// POST /todo - Add new task to the list
app.post('/todo', (req, res) => {
    const newTask = req.body.newTask;
    if (newTask) {
        tasks.push(newTask);
    }
    res.redirect('/todo');
});

// POST /delete - Delete a task from the list
app.post('/delete', (req, res) => {
    const taskIndex = req.body.taskIndex;
    tasks.splice(taskIndex, 1);
    res.redirect('/todo');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});