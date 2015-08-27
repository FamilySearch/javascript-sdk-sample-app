var express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs');
    
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res){
  res.render('index');
});
app.get('/examples/:example', function(req, res){
  fs.readFile(path.join(__dirname, 'views', 'examples', req.params.example + '.js'), {encoding:'utf8'}, function(err, data){
    if(err){
      res.render(500);
    } else {
      res.render('globals/examples', {
        exampleSource: data,
        exampleName: req.params.example
      });
    }
  });
});

var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('listening at http://%s:%s', host, port);
});