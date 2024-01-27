const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const config = require('./config');

const app = express();
const port = 3000;


// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Example middleware for handling JSON requests
// Middleware
app.use(bodyParser.json());

// Errpr handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Routes
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
