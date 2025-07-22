const express = require('express');
const app = express();


const connectDB = require('./Connection/db'); 

connectDB();


app.use(express.json());

// app.use(nocache());

app.use(express.json());



const apiRoutes = require('./Routes/api');
const PORT = process.env.PORT || 3000;

app.use('/api', apiRoutes);


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});