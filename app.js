const express = require('express');
const app = express();
const fs = require('fs');

const records = require('./src/functions');

app.use(express.json());


// Send a GET request to "/list" to READ list of record
app.get( '/records', async (req, res) => {
  try {
    const list = await records.getRecords();
    res.json(list);
  } catch(err){
    res.json({message: err.message})
  }
});

// Send a POST request to "/list" to CREATE record
app.post( '/records', async (req , res) => {
  const list = await records.getRecords();
  const recordsJson = list.records;
  recordsJson.push(req.body);
  const jsonRecords = JSON.stringify({records: recordsJson}, null, 2);
  fs.writeFile('./data/data.json', jsonRecords, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
})

// Send a DELETE request to "/list/:id" to DELETE records
app.delete( '/records', async (req, res) => {
  const list = await records.getRecords();
  console.log(list);


})

// Send a PUT request to "/list/:id" to UPDATE records





app.listen(3000, () => console.log('Quote API listening on port 3000!'));

