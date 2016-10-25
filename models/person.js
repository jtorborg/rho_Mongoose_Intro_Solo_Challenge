const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
  name: String,
  hometown: String,
  favoritemovie: String

});





module.exports = Person;
