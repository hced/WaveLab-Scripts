/* ----------------------------------------------------------------------------
Scramble2000.js – Extract the essence of your sound by shredding it into pieces


DESCRIPTION
-----------
This script will displace random parts of the current file, making the sound
shattered and unrecognizable. The idea is to extract the actual 'essence' of 
the sound. It might be a bit similar to how granulizers work, but I wanted to 
have this functionality as a destructive function in my audio editor.

AUTHOR
------
Henrik Cederblad | https://github.com/hced

COMPATIBILITY
-------------
Developed for WaveLab Pro 10+. May or may not work in lower WaveLab versions.

VERSION HISTORY
---------------
0.1a - Initial version


PSEUDO CODE (there were slight difference in the actual code)
-----------
- Define FILELENGTH as active wave's total length in samples.
- Define SNAPSHOTLENGTH as a 5% percentage of FILELENGTH in samples.
- Define REPS as the number of times the scramble should be repeated. (Note: in
  the future, I wish to make this an exponential formula (more repetitions 
  the longer the FILELENGTH is).

- Scramble() function:
	- Pick a random location for a 5% snapshot (range) of the current file.
	- Cut the snapshot.
	- Paste the snapshot in a random location.

- Repeat Scramble() 50 times. (Note: Might want this value to be increasingly 
  higher, the longer the audio file is, later on.)
-----------------------------------------------------------------------------*/

// Set constants
FILELENGTH = activeWave.size(); // Total samples
SNAPSHOTLENGTH = (FILELENGTH/100)*5; // 5% of the total length
REPS = 50; // Todo: Make exponential, maybe via Math.pow( (FILELENGTH/100), 3 ) ?

// Debug: Clear log
logWindow.clear();
// Debug: Log timestamp
logWindow.printInfo(Date.now());
// Debug: Log total length in samples of the active file
logWindow.printInfo("This file has a total of " + FILELENGTH + " samples");

function randomEndLoc(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Scramble() {

	// Set thisEnd to a random location between 0 and FILELENGTH
	thisEnd = randomEndLoc(0, FILELENGTH);
	logWindow.printInfo(thisEnd); // Debug

	// ...but not lower than SNAPSHOTLENGTH.
	if (thisEnd < SNAPSHOTLENGTH) {
		thisEnd = SNAPSHOTLENGTH;
	}

	// Make range selection
	activeWave.select( (thisEnd - SNAPSHOTLENGTH), SNAPSHOTLENGTH );

	// Cut the selected range
	activeWave.cut();

	// Move cursor
	activeWave.setCursorPosition(thisEnd - SNAPSHOTLENGTH); //Todo: round up to prevent 0?

	// Paste the cut-out selection
	activeWave.paste();
	
}

// Repeat Scramble() for REPS amount of times
/*
for (i in REPS) {
	logWindow.printInfo(i); // Debug
	Scramble();
}
*/
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();
Scramble();