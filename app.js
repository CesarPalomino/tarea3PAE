const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const perros = require('./routes/petRoutes');

app.listen(3000, () => console.log('Listening on port 3000'));
app.use('/api',perros);