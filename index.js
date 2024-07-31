const fs = require('fs');

// File path
const filePath = 'data.txt';

// Function to write initial content to the file
function writeInitialContent() {
    fs.writeFile(filePath, 'First content\n', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Initial content written to file.');
        writeSecondContent();
    });
}

// Function to write second content to the file
function writeSecondContent() {
    fs.writeFile(filePath, 'Second content\n', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Second content written to file.');
        appendContent();
    });
}

// Function to append new content to the file
function appendContent() {
    fs.appendFile(filePath, 'Appended content\n', (err) => {
        if (err) {
            console.error('Error appending to file:', err);
            return;
        }
        console.log('Content appended to file.');
    });
}

// Start the process
writeInitialContent();

