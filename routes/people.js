const router = require('express').Router();
const Person = require('../models/person');

router.get('/', function(req, res) {
    Person.find({}).then(function(datafromdb) {
        console.log('documents from mongo', datafromdb);
        res.send(datafromdb);
    }); //gets everybody
    // res.send([{name: 'ryan'}, {name: 'antoinette'}])
});

//we want to create a new person
router.post('/', function(req, res) {
    var name = req.body.name;
    var hometown = req.body.hometown;
    var favoritemovie = req.body.favoritemovie;

    console.log('name', name);
    console.log('hometown', hometown);
    console.log('favmovie', favoritemovie);

    //pass an empty object into our body constructor; in order to be able to call save() we have to create person; this happen asynchrouosly
    var personToSave = new Person({
        name: name,
        hometown: hometown,
        favoritemovie: favoritemovie

    });
    personToSave.save().then(function() {
        console.log('saved a new person');
        res.send(201);
    });

});

// //to save a new person
// var ryan = new Person({name: 'Ryan'});
// ryan.save().then(function(doc){
// console.log('saved a new doc', doc);
//
// })


module.exports = router;
