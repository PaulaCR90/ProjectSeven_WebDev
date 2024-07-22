const User = require('../models/user');
const bcrypt = require('bcrypt');
const { generateSign } = require('../utils/jwt');

const register = async (req, res, next) => {
  //postUser = register
  try {
    const newUser = new User(req.body);
    const userDuplicated = await User.findOne({ email: req.body.email });
    if (userDuplicated) {
      return res.status(400).json('This user already exists!');
    }
    const userSaved = await newUser.save();
    return res.status(201).json(userSaved);
  } catch (error) {
    return res.status(400).json(`Registration error: ${error}`);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json(`Wrong user/password`);
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateSign(user._id);
      return res.status(200).json({ token, user });
    } else {
      return res.status(400).json(`Wrong user/password`);
    }
  } catch (error) {
    return res.status(400).json(`Login error: ${error}`);
  }
};

const getMyDogs = async (res, req, next) => {
  //! Sólo para rol user
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate({
      path: 'dogs',
      populate: { path: 'drivers' }
    });

    return res.status(200).json(User.dogs);
  } catch (error) {
    return res.status(400).json(`Error getting user dogs: ${error}`);
  }
};

const getUser = async (req, res, next) => {
  //! sólo para rol admin entero
  //! sólo para mi propio user
  //! sólo para driver para contacto
  try {
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(`Error getting this user: ${error}`);
  }
};

const getUsers = async (req, res, next) => {
  //! sólo para rol admin
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(`Error getting all users: ${error}`);
  }
};

//updateUser
//! Actualizar datos para user
const updateUser = async (req, res, next) => {
  try {
  } catch (error) {}
};

//deleteUser
//! Eliminar propia cuenta
//! Eliminar user para admin
