const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const path = require('path');

const result = require('dotenv');
result.config();

app.use(cors());

app.use(express.static('build'));


app.get('/test/:id', (req, res) => {
  res.send({ok: true})
})


app.get('*', (req, res) => {
  console.log(req.url);
  res.sendFile(path.resolve(__dirname, '.svelte/', 'index.html'));
});


app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
