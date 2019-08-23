const hbs = require('express-handlebars');
const path = require('path');
const bodyParser=require('body-parser');
const express = require('express');
const app = express();
const routes = require('./routs/routs');



app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes)

app.engine('.hbs', hbs ({
    defaultLayout: 'layout',
    extname: '.hbs'
}))
app.set('view engine', '.hbs');



// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.post('/', async(req, res) => {
//     let location = req.body.location;
//     console.log(location);

//     let data = await getWeather(location);
//     console.log(data)

//     let temp = data.list[0].main.temp;
//     let humidity = data.list[0].main.humidity;
//     res.render('index', {data: {temp, humidity}})
//   })

  app.listen(3000, () => {
   console.log('server listening on port 3000');
 });

