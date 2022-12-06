const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 4000;

// connecting to database
require('./config/dbConnect');

// consting routes

const noteRoutes = require('./routers/noteRoutes');



const app = express();
app.use(cors());
app.use(express.json());

app.use('/notes', noteRoutes);


// catch all routes not on the server
app.all('*', (req, res, next) => {
  res
    .status(404)
    .json({ message: `Cannot find ${req.originalUrl} on the server` });
});

//
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ message: error.message });
});

module.exports = app.listen(port, () =>
  console.log(`Server up and running ${port}`)
);
