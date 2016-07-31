let fs = require('fs');
let files = [];

// If we don't have a file.
if(process.argv.length < 3) {
  process.exit(1);
}

// Sentence case for first word.
function sentenceCase(word) {
  return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
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
      data = data.split("\n");
      resolve(shuffleWords(data));
    });
  });
}


function getFiles() {
  // Main process block.
  let promises = [];
  process.argv.map((file, index) => {
    // Ignore the first two args.
    if(index >= 2) {
      promises.push(readFile(file));
    }
  });

  Promise.all(promises).then(vals => {
    let combined = vals.map((words, index) => {

    });
  });
}

// Get the files and print them.
getFiles();
