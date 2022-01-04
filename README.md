# CS50flow
## About The Project
This repository and project builded for CS50x final project.
A chrome extension for to follow of study CS50

easy-flow and all-on-one-place targeted a study.
i need little time for complete this readme!
And helps for development!


## installation
1. installing extension;
(you can wach [this video](https://www.youtube.com/watch?v=hIRX1dpfqHc))

1.1 First goto chrome://extensions in address bar
1.2 Enable developer mode
1.3 click on Load unpacked
1.4 Select the extension file in folder where you downloaded

2. installing example cs50.me web pages. (optional)
2.1 Open your downloaded files. Enter the "offlineExamplePages" > "editedForTests" or "orginal" > (open HTM files in this dirs via a web browser)
2.2 Copy adress bar ([look this picture for that](https://img.webnots.com/2013/12/Chrome-Address-Bar.png))
2.3 open "manifest.json" in downloaded files via a text editor.
2.4 find "matches" under "content_scripts".
2.5 pastle your copied link in between (") after (,)  ["https://cs50.me/cs50x", "file:///C:/Users/ ... /CS50.me%20CS50x%202021.htm"]
2.6 you can add another dir befeore ( ] ) adding first ( , ) example from my:
"matches": ["https://cs50.me/cs50x", "file:///C:/Users/SK/Desktop/code/Final/offlineExamplePages/editedForTests/CS50.me%20CS50x%202021.htm", "file:///C:/Users/SK/Desktop/code/Final/offlineExamplePages/orginal/CS50.me%20CS50x%202021.htm"], 

## Usage
usage is simple now.
switch pages with arrows and clicking linkes

## Roadmap
I thought to develop this application like this ideas:
Functionality development:
- [x] Basic level program (only weeks can being redirect in weeks window)
- [ ] Add A button for jumping to the need be first complete
- [ ] Redirect directly links to non-compete labs and pset in a week window.
- [ ] functions that storing student's notes or cloud links within the weeks or like things
- [ ] alternation to collaborative study platforms
