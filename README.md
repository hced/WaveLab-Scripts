# WaveLab-Scripts
Scripts for various WaveLab operations, mostly intended for sound design.

## How to use
Unless I decide to some day write my own how-to, I'll refer to [Steinberg's own documentation](https://steinberg.help/wavelab_pro/v10/en/wavelab/topics/customizing/scripting_c.html) for managing scripts in WaveLab.

## List of scripts

### Shredder2000.js
This script will displace random parts of the current file, making the sound
shattered and unrecognizable. The idea of this script is to extract the actual
'essence' of the sound. It's a bit related to how granulizers work, but I 
wanted to have this functionality as a destructive function in my audio editor.

Note: You may want to perform Correct Errors on the resulting file to soften
up hard cuts a bit. I haven't found a good way to strip silence, otherwise I 
would have recommended doing that as well because for some reason, there's 
short, occasional micro bits of silence in the resulting audio.