const express = require('express');
const app = express();
const port = 4000;
const bc = require('./controllers/books_controller')

app.use(express.json());

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);


app.listen(port, () => console.log(`server is listening to ${port}`));