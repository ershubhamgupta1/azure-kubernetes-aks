const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
  res.send([{ id: 1, name: 'John Doe' }]);
});

app.listen(8000, () => {
  console.log('User service running on port 8000');
});
