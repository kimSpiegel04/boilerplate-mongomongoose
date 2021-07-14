require('dotenv').config();
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let Person;

let arrayOfPeople = [
  {name: 'George Lucas', age: 88, favoriteFoods:['spaghetti', 'mushrooms']}, 
  {name: "Camel Camel", age: 3, favoriteFoods:['water', 'straw']}
]

const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: {
    type: Array,
    unique: true
  }
})

Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const drewBarry = new Person({
    name: "Drew Barry",
    age: 33,
    favoriteFoods: ['sushi', 'duck', 'vanilla ice cream']
  })

  drewBarry.save(function(err, data){
    if(err) return console.error(err);
    done(null, data);
  });
};
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, people){
    if (err) return console.log(err);
    done(null, people)
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, person){
    if (err) return console.log(err);
    done(null, person);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
