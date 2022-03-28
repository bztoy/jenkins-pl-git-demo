import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Plutooo, I am Venus. how are youuuuu?');
});

app.get('/pluto', (req, res) => {
  res.send('I want to eat popcorn so much');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

