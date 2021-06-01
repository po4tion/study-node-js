const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const publicPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicPath));

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'sunny',
    location: 'seoul',
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
