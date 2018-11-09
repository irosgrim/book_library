let express = require('express');
const bodyParser = require('body-parser');
const mongoDB = require('./controllers/controller.mongo');
const path = require('path');
let fs = require('fs');

let app = express();
const jsonFileName = './db/books.json';
const jsonParser = bodyParser.json();

app.set('views', './views/')
app.set('view engine', 'pug');

app.use(jsonParser);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response)=>{
    console.log(mongoDB.connectToMongo());
    console.log(request);
    response.send('./public/index.html');
})

app.get('/cards/', (request, response) =>{
    fs.readFile(jsonFileName, 'utf-8', function(err, data) {
        if (err) throw err
        var booksArray = JSON.parse(data)
   
    response.render('cards', { 
        books: booksArray
    })
});
});

app.get('/list/', (request, response) =>{
    fs.readFile(jsonFileName, 'utf-8', function(err, data) {
        if (err) throw err
        var booksArray = JSON.parse(data)
   // response.send(booksArray);
    response.render('list', { 
        books: booksArray
    })
});
});

app.get('/p/', function (request, response) {
    
  })

app.listen(3000, () => console.log(`Server is running `));