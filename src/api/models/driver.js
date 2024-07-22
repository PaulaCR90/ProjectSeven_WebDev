const mongoose = required('mongoose');

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phoneNumber: { type: Number, required: true, trim: true },
  car: { type: String, required: true, trim: true },
  totalTrips: { type: Number, required: true, trim: true },
  tripsWithThisUser: { type: Number, default: 0 }, //* cada vez que finalice uno (con comprobación en usuario) este número aumenta +1
  dogs: [{ type: mongoose.Types.ObjectId, ref: 'dogs' }]
});

const Driver = mongoose.model('drivers', driverSchema, 'drivers');
module.exports = Driver;
