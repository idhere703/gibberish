var fs = require('fs');

// If we don't have a file.
if(process.argv.length < 3) {
  process.exit(1);
}

// Takes an array then returns the same array all mixed up.
function shuffleWords(data) {
  let j, x, i;
  for (i = data.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = data[i - 1];
      data[i - 1] = data[j];
      data[j] = x;
  }
  return data;
}

// Takes a file name as the arg, reads the file and returns when ready.
function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err);
      // Split the array.
      console.log(data);
      data = data.split("\n");
      resolve(data);
    });
  });
}

let file = process.argv[2];

readFile(file).then((val) => {
  console.log(val);
});
