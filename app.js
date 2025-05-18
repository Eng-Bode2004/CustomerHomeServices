// Connect To DataBase
require('./Config/DataBase');
const express = require('express');


// Set Up Port and Make Server listen To requests
const app = express();
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
app.use(express.json()); // Middleware to parse JSON



                                // Main Routes
                         // Customer Home Routes  //
const CustomerHomeRoutes = require('./Routes/CustomerHomeRoutes');
app.use('/api/customer-home', CustomerHomeRoutes);

