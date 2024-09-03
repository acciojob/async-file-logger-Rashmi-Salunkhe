const fileNames = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
];

// Function to read a file and return a promise
function readFile(fileName) {
  return fetch(fileName)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok for ${fileName}`);
      }
      return response.text();
    })
    .catch(error => {
      console.error(`Failed to fetch ${fileName}:`, error);
      return ''; // Return an empty string in case of error
    });
}

// Read all files and log their content
Promise.all(fileNames.map(fileName => readFile(fileName)))
  .then(contents => {
    contents.forEach((content, index) => {
      console.log(`Content from ${fileNames[index]}: ${content}`);
    });
  })
  .catch(error => {
    console.error('Error reading files:', error);
  });
