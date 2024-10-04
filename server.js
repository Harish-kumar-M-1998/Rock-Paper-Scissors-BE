const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const gameRoutes = require('./routes/games');

const app = express();

const corsOptions = {
    origin: 'https://rps-fe.netlify.app', // Allow your Netlify frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (if needed)
};
// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://harishmano98:Harish%402024@harish-mongo.uf15eex.mongodb.net/RPS',)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

// API Routes
app.use('/api/games', gameRoutes);

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
