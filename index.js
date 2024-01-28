const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const groupRoutes = require('./routes/groupRoutes');
const messageRoutes = require('./routes/messageRoutes');
const authRoutes = require('./routes/authRoutes');
const config = require('./config');

const app = express();
const port = 3000;


// Connect to MongoDB
mongoose.connect(config.mongoURI);

// Example middleware for handling JSON requests
// Middleware
app.use(bodyParser.json());

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/groups', groupRoutes);
app.use('/messages', messageRoutes);


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
