const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//import routes
const userRoutes = require('./routes/user');

//app
const app = express();

//db
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => console.log('DB Connected'));

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//routes middleware

app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Module-3, Lesson-2 finish