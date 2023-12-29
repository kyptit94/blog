const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const env = require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  exposedHeaders: ['X-Total-Count'],
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Routes
app.use('/api/posts', require('./routes/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;