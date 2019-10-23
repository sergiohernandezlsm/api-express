const express = require('express');
const app = express();
const User = require('./src/database/models/User');

app.use(express.json());

// Send a GET request to "/api/users" to READ list of record
app.get( '/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch(err){
    res.status(500).json({message: err.message});
  }
});

// Send a GET request to "/users/:id" to READ specific record
app.get( '/api/users/:id' , async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch(err){
    res.status(500).json({message: err.message});
  }
});

// Send a POST request to "/api/users" to CREATE record
app.post( '/api/users', async (req,res) => {
  try {
    const newUser = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name
    });
    await newUser.save();
    res.status(201).send(newUser.toJSON()); 
  } catch (err) {
    res.status(500).json({message: err.message});
  }  
});

// Send a DELETE request to "/users/:id" to DELETE users
app.delete( '/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.status(204).send();
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

// Send a PUT request to "/users/:id" to UPDATE users
app.put( '/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    res.status(202).send(user.toJSON());
  } catch(err) {
    res.status(500).json({message: err.message})
  }
});


app.listen(3000, () => console.log('users API listening on port 3000!'));

