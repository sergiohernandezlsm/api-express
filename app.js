const express = require('express');
const app = express();
const records = require('./src/functions');

app.use(express.json());


// Send a GET request to "/records" to READ list of record
app.get( '/records', async (req, res) => {
  try {
    const list = await records.getRecords();
    res.json(list);
  } catch(err){
    res.json({message: err.message});
  }
});

// Send a GET request to "/records/:id" to READ specific record
app.get( '/records/:id' , async (req, res) => {
  try {
    const list = await records.getRecords();
    const recordId = req.params.id; 
    const recordToRead = list.records.find( item => item.id == recordId );
    res.json(recordToRead);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

// Send a POST request to "/records" to CREATE record
app.post( '/records', async (req,res) => {
  try {
    const list = await records.getRecords();
    const recordsJson = list.records;
    recordsJson.push(req.body);
    const jsonRecords = JSON.stringify({records: recordsJson}, null, 2);
    // rewrite data.json to update obj
    records.reWriteFile('./data/data.json',jsonRecords);
    res.json(list);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

// Send a DELETE request to "/records/:id" to DELETE records
app.delete( '/records/:id', async (req, res) => {
  try{
    const list = await records.getRecords();
    const recordId = req.params.id;  
    list.records = list.records.filter(item => item.id != recordId);
    const jsonRecords = JSON.stringify({records: list.records}, null, 2);
    // rewrite data.json to update obj
    records.reWriteFile('./data/data.json',jsonRecords);
    res.json(list);
  } catch(err) {
    res.status(500).json({message: err.message})
  }
});

// Send a PUT request to "/records/:id" to UPDATE records
app.put( '/records/:id', async (req, res) => {
  try{
    const list = await records.getRecords();
    const recordId = req.params.id; 
    const toChange = list.records.find( item => item.id == recordId );
    toChange.name = req.body.name;
    toChange.lastname = req.body.lastname;
    const jsonRecords = JSON.stringify({records: list.records}, null, 2);
    // rewrite data.json to update obj
    records.reWriteFile('./data/data.json',jsonRecords);
    res.json(list);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});


app.listen(3000, () => console.log('Records API listening on port 3000!'));

