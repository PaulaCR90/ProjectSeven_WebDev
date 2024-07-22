const Dog = require('../models/dog');

const getDogs = async (res, req, next) => {
  //! Sólo para rol admin y driver
  try {
    const Dogs = await Dog.find().populate('drivers');
    return res.status(200).json(Dogs);
  } catch (error) {
    return res.status(400).json(`Error getting all dogs: ${error}`);
  }
};

const getDog = async (res, req, next) => {
  //! Sólo para admin y driver (ID)
  try {
    const Dogs = await Dog.find().populate('drivers');
    return res.status(200).json(Dogs);
  } catch (error) {
    return res.status(400).json(`Error getting all dogs: ${error}`);
  }
};
