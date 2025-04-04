const express = require('express');
const bodyParser = require('body-parser');
const gradesRoutes = require('./routes/gradesRoutes');
const dbConfig = require('./config/dbConfig');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/grades', gradesRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});