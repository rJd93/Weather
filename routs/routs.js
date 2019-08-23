const { Router } = require('express');
const router = Router();
const getWeather = require ('../lib/getWeather');

router.get('/', (req, res) => {

    let query = req.query.location;
    console.log(query);
   res.render('index');
});

router.post('/', async(req, res) => {
   let location = req.body.location;
   let country = req.body.country;

   let data = await getWeather(location, country);

   if (data.list[0]) {
       let Temperature = data.list[0].main.temp;
       let Humidity = data.list[0].main.humidity;
       let Pressure = data.list[0].main.pressure;
       
       let Clouds = data.list[0].clouds.all;

       let Rain = data.list[0].rain;

       if (Rain === null ) {
            Rain = 'No rain, how lucky you are!';
       };
        
       
       res.render('index', {data: {Rain, Temperature, Humidity, Pressure, Clouds}});
   } else {
       res.render('index', {err: "The location you entered doesn't exist!"});
   }
});

module.exports=router;