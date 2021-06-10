const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const clientSecret = require('./../../config/keys').client_secret;
const User = require('./../../model/User');

/**
 * @route   POST /api/users/register
 * @description Register the new user
 * @public
 */
router.post('/register', (req, res) => {
  let { name, username, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Password not match',
    });
  }
  //   Check for the unique username
  User.findOne({ username }).then((user) => {
    if (user) {
      return res.status(400).json({
        status: 'fail',
        message: 'Username is already taken',
      });
    }
  });
  //   Check for the unique email
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({
        status: 'fail',
        message: 'Email is already taken',
      });
    }
  });

  let newUser = new User(req.body);
  newUser
    .save()
    .then((data) => res.status(201).json({ status: 'success', data }));
});

/**
 * @route   POST /api/users/login
 * @description Login the user
 * @public
 */
router.post('/login', (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid Username',
      });
    }

    //   check password
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(403).json({
          status: 'fail',
          message: 'Invalid password',
        });
      }

      let payload = {
        _id: user._id,
        username: user.username,
        name: user.name,
        email: user.email,
      };

      jwt.sign(payload, clientSecret, { expiresIn: '7 days' }, (err, token) => {
        return res.status(200).json({
          status: 'success',
          user: user,
          token: `Bearer ${token}`,
        });
      });
    });
  });
});

/**
 * @route   get /api/users/profile
 * @description Return the user's data
 * @private
 */
router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    return res.status(200).json({ status: 'success', user: req.user });
  }
);
module.exports = router;
