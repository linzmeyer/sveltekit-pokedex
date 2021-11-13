const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const path = require('path');

app.use(cors());

console.log("path resolve:", path.resolve(__dirname, 'build', 'index.html'));

app.use(express.static('build'));
app.get('*', (req, res) => {
  console.log("req.url:", req.url);
  console.log("sending file:", path.resolve(__dirname, 'build', 'index.html'));
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
