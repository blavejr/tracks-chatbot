const express = require('express');
const env = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const botRoutes = require('./routes/botRoutes');
app.use('/bot', botRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
