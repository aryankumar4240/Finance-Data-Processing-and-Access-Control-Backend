require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send("API running successfully");
});

// DB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));
app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
app.use('/users', require('./routes/userRoutes'));
app.use('/records', require('./routes/recordRoutes'));
app.use('/dashboard', require('./routes/dashboardRoutes'));
// app.userRoutes = require('./routes/userRoutes');
// app.use('/users', userRoutes);
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
//   });