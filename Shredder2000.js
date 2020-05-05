/* ----------------------------------------------------------------------------
Scramble2000.js – Extract the essence of your sound by shredding it into pieces
-------------------------------------------------------------------------------

DESCRIPTION
-----------
This script will displace random parts of the current file, making the sound
shattered and unrecognizable. The idea is to extract the actual 'essence' of 
the sound. It might be a bit similar to how granulizers work, but I wanted to 
have this functionality as a destructive function in my audio editor.

Note: You may want to perform Correct Errors on the resulting file to reduce
clicks and soften the cuts a bit.

AUTHOR
------
Henrik Cederblad | https://github.com/hced

COMPATIBILITY
-------------
Developed for WaveLab Pro 10+. May or may not work in lower WaveLab versions.

VERSION HISTORY
---------------
0.1 - First functional version. Removed commented pseudo-code.
0.1a - Initial version

-----------------------------------------------------------------------------*/

const FILELENGTH = activeWave.size(); // Total samples
const SNAPSHOTLENGTH = (FILELENGTH/100)*5; // 5% of the total length
const REPS = 200; // Todo: Make exponential, maybe via Math.pow( (FILELENGTH/100), 3 ) ?

/* Debug */
// Log timestamp
logWindow.clear();
var TS = new Date();
function timeStamp() {
	return TS.toISOString();
}
logWindow.printInfo(timeStamp());
// Log total length in samples of the active file
logWindow.printInfo("This file has a total of " + FILELENGTH + " samples");

function randomPos(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Scramble() {
	// Set thisEnd to a random location between 0 and FILELENGTH
	thisEnd = randomPos(0, FILELENGTH);
	logWindow.printInfo(thisEnd); // Debug
	// ...but not lower than SNAPSHOTLENGTH.
	if (thisEnd < SNAPSHOTLENGTH) {
		thisEnd = SNAPSHOTLENGTH;
	}

	// Make range selection
	activeWave.select( (thisEnd - SNAPSHOTLENGTH), SNAPSHOTLENGTH );

	// Cut the selected range
	activeWave.cut();

	// Move cursor to a random location
	cursorPos = randomPos(0, FILELENGTH);
	activeWave.setCursorPosition(cursorPos); //Todo: round up to prevent 0?
	logWindow.printInfo("Moved cursor to position " + cursorPos); // Debug

	// Paste the cut-out selection
	activeWave.paste();
	
}

// Repeat Scramble() for REPS amount of times
for (i = 0; i < REPS; i++) {
	logWindow.printInfo("This is scramble " + i + " at sample location:"); // Debug
	Scramble();
}