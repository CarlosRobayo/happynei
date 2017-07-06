var express = require('express');

var app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {

    if (req.url == '/') {
        res.sendFile('index.html');
    } else {
        res.sendFile(__dirname + '/public/views/hpbd.html');
    }

});

app.listen(port);