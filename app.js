const express = require('express');
const app = express();

const records = require('./src/functions');

app.use(express.json());


// Send a GET request to "/list" to READ list of record
app.get( '/list', async (req, res) => {
  try {
    const list = await records.tableList();
    res.json(list);
  } catch(err){
    res.json({message: err.message})
  }
});

// Send a POST request to "/list" to CREATE record
// Send a PUT request to "/list/:id" to UPDATE records
// Send a DELETE request to "/list/:id" to DELETE records




app.listen(3000, () => console.log('Quote API listening on port 3000!'));

