const mongoose = required('mongoose');

const dogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    owner: { type: mongoose.Types.ObjectId, ref: 'users' },
    img: { type: String, trim: true },
    age: { type: Number, required: true, trim: true },
    breed: { type: String, required: true, trim: true },
    specialNeeds: { type: String, trim: true },
    medicalNeeds: { type: String, trim: true },
    mood: { type: String, required: true, trim: true },
    castrated: {
      type: String,
      enum: ['yes', 'no'],
      required: true,
      trim: true
    },
    //* cuando el programa pueda tramitar trips, cada vez que finalice uno (con comprobación en usuario) este número aumenta +1
    trips: { type: Number, required: true, trim: true },
    drivers: [{ type: mongoose.Types.ObjectId, ref: 'drivers' }]
  },
  {
    timestamps: true
  }
);

const Dog = mongoose.model('dogs', dogSchema, 'dogs');
module.exports = Dog;
