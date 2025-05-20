const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('MediLedger running at http://localhost:3000');
});
