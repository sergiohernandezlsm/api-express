const fs = require('fs');

/**
 * Gets all list
 * @param None
 */
const getRecords = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('data/data.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

/**
 * Rewrite data in jason file
 * @param route path of json file
 * @param jsonRecord all record to update as string in json file need JSON.strinify
 * desc: rewrite data.json to update obj
 */
const reWriteFile = (route , jsonRecord) => {
  fs.writeFile('./data/data.json', jsonRecord, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}


module.exports = {
  getRecords,
  reWriteFile
}