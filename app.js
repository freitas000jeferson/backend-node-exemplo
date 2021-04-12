const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('get');
  return res.status(200).json({ data: 'GET' });
});
app.get('/hello', (req, res) => {
  console.log('get hello');
  return res.status(200).json({ data: 'GET hello' });
});

app.post('/', () => {
  console.log('post');
});

app.listen(port, () => {
  console.log(`INICIOU SERVIDOR: ${port}`);
});
