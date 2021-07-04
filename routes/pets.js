const express = require('express');
const router = express.Router();

const Pet = require('../models/pet.js');

const pets = [
    new Pet('Rocket', 2, 'dog', 'Golden Retriever', '/dogs/rocket.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus pulvinar eros non euismod. Aliquam egestas felis ac semper vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
    new Pet('Sigmund', 1, 'dog', 'Cairn Terrier', '/dogs/sigmund.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus pulvinar eros non euismod. Aliquam egestas felis ac semper vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
    new Pet('Pluto', 3, 'dog', ' Collie', '/dogs/pluto.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus pulvinar eros non euismod. Aliquam egestas felis ac semper vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
    new Pet('Phoenix', 3, 'dog', ' Labradoodle', '/dogs/phoenix.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus pulvinar eros non euismod. Aliquam egestas felis ac semper vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
    new Pet('Kelso', 1, 'dog', 'Shih Tzu', '/dogs/kelso.webp', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus pulvinar eros non euismod. Aliquam egestas felis ac semper vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
];

router.get('/', function(req, res) {
    const page = req.query.page ?? 1;
    const limit = req.query.limit ?? 3;

    let paginatedResult = pets.slice((page -1) * limit, page * limit);

    res.json(paginatedResult);
});

router.post('/', function(req, res) {
    const name = req.body.name;
    const age = req.body.age;
    const species = req.body.species;
    const race = req.body.race;
    const picture = req.body.picture;
    const description = req.body.description;
    
    const pet = new Pet(name, age, species, race, picture, description);
    
    let pets = mongodb.getPetsCollection();

    pets.insertOne(pet);

    res.sendStatus(200);
});

router.get('/:id', function(req, res) {
    const id = req.params.id;
  
    let pets = mongodb.getPetsCollection();
  
    const pet = pets.find({_id: new ObjectId(id)}).toArray((err, result) => {
      if (err) {
        res.sendStatus(500);
      } else if (result.length === 0) {
        res.sendStatus(404);
      } else {
        res.json(result);
      }
    });
  });

router.delete('/:id', function(req, res){
    console.log(1);
    const id = req.params.id;
  
    let pets = mongodb.getPetsCollection();
  
    pets.deleteOne({_id: new ObjectId(id)});
  
    res.sendStatus(200);
  });
  
res.redirect('/');

