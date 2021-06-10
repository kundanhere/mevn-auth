const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');

// Initialize the app
const app = express();

// Middlewares
// Form data parser
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Json body parser
app.use(express.json());

// for handling cross-origin errors
// https://enable-cors.org/server_expressjs.html
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });
app.use(cors());

// define static directory
app.use(express.static(`${__dirname}/public`));
app.use(passport.initialize());
require('./config/passport')(passport);

// bring in the database config
const connectionString = require('./config/keys').mongoURI;
const PORT = process.env.PORT || 3000;

// connect with the database and run the server
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Database connected successfully!');
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  })
  .catch((err) => console.log(`Unable to connect with database ${err}`));

// Routes
const userRouter = require('./routes/api/users');
app.use('/api/users', userRouter);
app.get('*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));
