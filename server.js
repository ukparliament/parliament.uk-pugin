const express = require('express'),
      app     = express();

app.use(express.static(`${__dirname}/_public`));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
