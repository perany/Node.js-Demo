var express = require('express');
var app = express();
app.use(express.basicAuth(function(user, pass) {
   return user === 'testUser' && pass === 'testPass';
}));
app.get('/', function(req, res) {
   res.send('���');
});
app.listen(1337, "127.0.0.1");