const express = require('express'),
      app     = express(),
      port    = process.env.PORT || 5000,
      path    = require('path');

app.use('/_public', express.static(__dirname + '/_public'));

// app root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/_public/index.html'));
});

// requested views
// using regexp to match request to path
app.get( /([^\/]+)$/g, (req, res) => {
  res.sendFile(path.join(__dirname + req.path));
});

app.listen(port, () => {
  console.log('Server started on port :' + port);
});
