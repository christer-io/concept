const express = require('express');
const cors = require('cors');
const app = express();
const concepts = require('./concepts');
const conceptsNb = require('./conceptsnb');


app.use(cors());

app.get('/api/concepts/nb/', (req, res) => {
  //res.json(level);
  res.json(conceptsNb);

});

app.get('/api/concepts/', (req, res) => {
  //res.json(level);
  res.json(concepts);

});

// en static folder
//app.use(express.static(path.join(__dirname, 'web')));


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
