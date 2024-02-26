const express = require('express');
const app = express();

let visitCount = 0;

app.get('/', (req, res) => {
  // Increment the visit count on each request
  visitCount++;
  res.send(`Welcome! You are visitor number ${visitCount}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
