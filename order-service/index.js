const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send([{ id: 1, name: 'order for John' }]);
});

app.listen(8001, () => {
  console.log('Order service running on port 8001');
});
