// nodejs module imports
const fs = require('fs');
const path = require('path');

// create a random number generator that returns a random number between 1 and user input
const rng = (max) => { return Math.floor(Math.random() * max) + 1; };

// define the file paths for adds.txt and teas.txt
const addsPath = path.join(__dirname, '../lists/adds.txt');
const teasPath = path.join(__dirname, '../lists/teas.txt');


/*
    CONVERT EACH LIST INTO AN ARRAY
    1. Declare readFileSync variables for each list.
    2. Split the list by newline.
*/

// import the lists via fs.readFileSync
const addsList = fs.readFileSync(addsPath, 'utf-8');
const teasList = fs.readFileSync(teasPath, 'utf-8');

// split each list into an array
const addsArray = addsList.split(/\r?\n/).filter(line => line.trim() !== '');
const teasArray = teasList.split(/\r?\n/).filter(line => line.trim() !== '');

/*

    GENERATE A RANDOM BOBA ORDER
    1. Create empty arrays for the teas and adds.
    2. Determine if the order will consist of 1 or 2 teas.
    3. Determine if the order will consist of 1 or 2 adds.
    4. Push random teas and adds to their respective arrays.
*/

// create empty arrays for the teas and adds
var teasRes = [];
var addsRes = [];

// determine if the order will consist of 1 or 2 teas/adds
var numTeas = rng(2);
var numAdds = rng(2);

// push random teas to the teasRes array
for (let i = 0; i < numTeas; i++) { teasRes.push(teasArray[rng(teasArray.length) - 1]); }
// push random adds to the addsRes array
for (let i = 0; i < numAdds; i++) { addsRes.push(addsArray[rng(addsArray.length) - 1]); }

// UNCOMMENT THE CONSOLE.LOG LINE TO TEST THE SCRIPT IN CONSOLE
// console.log(`${teasRes.join(' + ')} with ${addsRes.join(' + ')}`);

/*

    Implement issue catching in case of error.
    1. Check if the file path does not exist.
    2. Indicate in console that the file is not found in file path.
    3. Stop the script after indication.

*/

// check if the adds.txt and teas.txt file paths do not exit.
if (!fs.existsSync(addsPath)) {
    console.error(`adds.txt not found at: ${addsPath}`);
    process.exit(1); // this line will stop the script.
}

if (!fs.existsSync(teasPath)) {
    console.error(`teas.txt not found at: ${teasPath}`);
    process.exit(1); // this line will stop the script.
}