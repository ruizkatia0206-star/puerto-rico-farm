const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/granja-ruiz', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Basic Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Granja Ruiz server is running' });
});

// Products Route (placeholder)
app.get('/api/products', (req, res) => {
  res.json({ message: 'Get all products' });
});

// Users Route (placeholder)
app.get('/api/users', (req, res) => {
  res.json({ message: 'Get all users' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));