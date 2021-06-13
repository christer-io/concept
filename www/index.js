const express = require('express');
const path = require('path');
const app = express();
const concepts = require('./concepts');
const conceptsNb = require('./conceptsnb');
const images = require('./images');



// en static folder
app.use(express.static(path.join(__dirname, 'web')));

app.get('/api/images/', (req, res) => {
  //res.json(level);
  res.json(images);
});

//endpoint listing all images with a spesific license
app.get('/api/images/license/:license', (req, res) => {
  const found = images.some(image => image.license === req.params.license);

  if(found){
    res.json(images.filter(image => image.license === req.params.license));
  } else {
    res.status(400).json({msg: "License not found"});
  }

});

app.get('/api/concepts/nb/', (req, res) => {
  //res.json(level);
  res.json(conceptsNb);
});

app.get('/api/concepts/', (req, res) => {
  res.json(concepts);
});

//start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('server is running on 8080'));
