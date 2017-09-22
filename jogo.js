const express = require('express')
const app = express()
const path = require('path')
const public = __dirname + "/statico/"
 let min = 0;
 let max = 0;
 let numeroRandom = 0;

app.get('/update/:min/:max', function(request, response){
  min = request.params.min
  max = request.params.max
  numeroRandom = getRandom(min, max);
  response.send('Digite /guess');
})

app.get('/guess/:number', function(request, response){
  let number = request.params.number
  if(number ==  numeroRandom){
    response.send('Acertou mizeravi!');
  } else {
    response.send('ERROOOOOOOOU '+ numeroRandom);
  }
})

app.get('/help', function(request, response){
  response.sendFile(public + 'help.html');
})

app.use ('/', express.static(public));

app.listen(8000, function(){
  console.log("DEU");
})

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
