var path = require("path");
var express = require("express");


function init(){
    var port = 80;

    var app = express();
    configureExpress(app);
    
    app.listen(port, function(){
        console.log("Healthier YOUniversity express server listening on port %d", port);
    });
}

init();

function configureExpress(app){
    app.configure(function(){
        app.use(express.bodyParser());
        app.use(express.methodOverride());

        app.use(express.cookieParser('There exists a rather exotic'
                +'animal in the wild'));
        app.use(express.session());

        app.get('/', function (req, res) {
            res.sendfile('public/index.html');
        });

        app.use(app.router);
        app.use(express.static(__dirname + '/public'));
        app.use(express.static(__dirname + '/public/css'));
        app.use(express.static(__dirname + '/public/js'));
        app.use(express.static(__dirname + '/public/img'));
        app.use(express.static(__dirname + '/public/img/icons'));
        app.use(express.static(__dirname + '/public/img/thumbs'));
    });
}

