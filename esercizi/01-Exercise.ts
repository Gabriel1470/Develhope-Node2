fs = require('fs');
fs.writeFile('./txt/helloworld.txt', 'Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('helloworld.txt  > scritto con successo');
});