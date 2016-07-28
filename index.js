var fs = require('fs');

// If we don't have a file.
if(process.argv.length < 3) {
  process.exit(1);
}

let file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  // Split the array.
  data = data.replace(/\r?\n|\r/g, "").split(" ");

  let j, x, i;
  for (i = data.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = data[i - 1];
      data[i - 1] = data[j];
      data[j] = x;
  }
  console.log(data.join());

});
