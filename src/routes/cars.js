const express = require('express');
const router = express.Router();
const Cars = require('../database/models/Cars');


// Send a GET request to "/cars" to READ list of record
router.get( '/cars', async (req, res) => {
  try {
    const cars = await Cars.findAll();
    res.status(200).json(cars);
  } catch(err){
    res.status(500).json({message: err.message});
  }
});

// Send a GET request to "/cars/:id" to READ specific record
router.get( '/cars/:id' , async (req, res) => {
  try {
    const car = await Cars.findByPk(req.params.id);
    res.status(200).json(car);
  } catch(err){
    res.status(500).json({message: err.message});
  }
});

// Send a POST request to "/cars" to CREATE record
router.post( '/cars', async (req,res) => {
  try {
    const newCars = new Cars({
      first_name: req.body.first_name,
      last_name: req.body.last_name
    });
    await newCars.save();
    res.status(201).send(newCars.toJSON()); 
  } catch (err) {
    res.status(500).json({message: err.message});
  }  
});

// Send a DELETE request to "/cars/:id" to DELETE cars
router.delete( '/cars/:id', async (req, res) => {
  try {
    const car = await Cars.findByPk(req.params.id);
    await car.destroy();
    res.status(204).send();
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

// Send a PUT request to "/cars/:id" to UPDATE cars
router.put( '/cars/:id', async (req, res) => {
  try {
    const car = await Cars.findByPk(req.params.id);
    await car.update(req.body);
    res.status(202).send(car.toJSON());
  } catch(err) {
    res.status(500).json({message: err.message})
  }
});

module.exports = router;