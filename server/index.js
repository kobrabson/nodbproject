const express = require('express');
const ctrl = require('./ctrl');
const app= express();
const port = 4020;

app.use(express.json());


app.get('/api/recipes', ctrl.getRecipes)
// app.post('/api/note/:id', ctrl.addNote)



app.listen(port, () => console.log(`Titans are coming in ${port}`))