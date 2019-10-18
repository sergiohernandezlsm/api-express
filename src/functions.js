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


module.exports = {
  getRecords
}