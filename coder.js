const fs = require('fs');

function convertMP3ToBase16(inputFilePath) {
  // Read the MP3 file
  fs.readFile(inputFilePath, (err, data) => {
    if (err) {
      console.error('Error reading the MP3 file:', err);
      return;
    }

    // Convert the data to base16
    const base16Data = data.toString('hex');

    // Create the output file path with a .txt extension
    const outputFilePath = inputFilePath.replace('.mp3', '.txt');

    // Save the base16 data to the new .txt file
    fs.writeFile(outputFilePath, base16Data, (err) => {
      if (err) {
        console.error('Error saving the base16 data:', err);
      } else {
        console.log('MP3 file converted to base16 and saved as', outputFilePath);
      }
    });
  });
}

// Usage
const mp3FilePath = './static/mathSounds/test.mp3';
convertMP3ToBase16(mp3FilePath);
