const app = require('./server.js');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

