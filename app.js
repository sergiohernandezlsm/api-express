const express = require('express');
const app = express();
const fs = require('fs');

const records = require('./src/functions');

app.use(express.json());


// Send a GET request to "/records" to READ list of record
app.get( '/records', async (req, res) => {
  try {
    const list = await records.getRecords();
    res.json(list);
  } catch(err){
    res.json({message: err.message})
  }
});

// Send a POST request to "/records" to CREATE record
app.post( '/records', async (req , res) => {
  const list = await records.getRecords();
  const recordsJson = list.records;
  recordsJson.push(req.body);
  const jsonRecords = JSON.stringify({records: recordsJson}, null, 2);
  
  // rewrite data.json to update obj
  fs.writeFile('./data/data.json', jsonRecords, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});

// Send a DELETE request to "/records/:id" to DELETE records
app.delete( '/records/:id', async (req, res) => {
  const list = await records.getRecords();
  const recordId = req.params.id;  
  list.records = list.records.filter(item => item.id != recordId);
  const jsonRecords = JSON.stringify({records: list.records}, null, 2);

  // rewrite data.json to update obj
  fs.writeFile('./data/data.json', jsonRecords, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});


// Send a PUT request to "/records/:id" to UPDATE records
app.put( '/records/:id', async (req, res) => {
  const list = await records.getRecords();
  const recordId = req.params.id; 
  const toChange = list.records.find( item => item.id == recordId );
  toChange.name = req.body.name;
  toChange.lastname = req.body.lastname;
  const jsonRecords = JSON.stringify({records: list.records}, null, 2);
  
  // rewrite data.json to update obj
  fs.writeFile('./data/data.json', jsonRecords, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  
});


app.listen(3000, () => console.log('Quote API listening on port 3000!'));

