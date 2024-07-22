const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    contact: {
      //! sólo visible para admin o divers para contactar en caso de problema en el servicio
      phoneNumber: { type: Number, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      password: { type: String, required: true, trim: true } //! invisible para todo el mundo, encriptado con bcrypt
    },
    img: { type: String },
    dogs: [{ type: mongoose.Types.ObjectId, ref: 'dogs' }]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('users', userSchema, 'users');
module.exports = User;
