var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todoapp', {useMongoClient: tue})
.then(()=> {console.log('Succesfully connected to the mongodb database at URL : mongodb://127.0.0.1:27017/todoapp')})
.catch(()=> {console.log('Error connecting to the mongodb database at URL : mongodb://127.0.0.1:27017/todoapp  ')})

//Cors configuration
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

var bluebird = require('bluebird');

/*

Others codes or dependencies

*/

var mongoose = require ('mongoose');
mongoose.Promise =  bluebird;
mongoose.connect('mongodb://127.0.0.1:27017/todoapp', {useMongoClient: true})
.then(()=> {console.log('Succesfully coonect to the mongodb database at URL : mongodb://127.0.0.1:27017/todoapp')})
.catch((=> {console.log('Error connecting to the mongo database at URL : mongodb://127.0.0.1:27017/todoapp')}))