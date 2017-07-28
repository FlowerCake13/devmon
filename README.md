# Devmon

You’re in charge of creating the starter layout for the newest edition of Devmon - Fire Flexbox. Players will be choosing their first Devmon for the game. Use your HTML, CSS, Flexbox, and JavaScript skills to craft the layout for this page.  

![Devball](https://github.com/junior-devleague/devmon/blob/master/images/alldevballs.png)

## Objective

Use **Flexbox** properties to style **HTML Elements** and **JavaScript Logic** and **Events** to change inner HTML on click of an image, manipulate image size, change the source of an image, create a button, and play sounds when the button and image are clicked.

## Prerequisites

To complete this project, students should have the following:
* Basic understanding of HTML structures and attributes.
* Basic understanding of Flexbox.
* Basic understanding of JavaScript and DOM.

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
* JS file
* Folder called `assets` to store your images and sound
3. Link all of your files correctly.
4. Create an `HTML` mockup of how you'd like the Devmon starter layout to look like. You can reference the layout in the `images` folder for inspiration. You will need at least the following on your page:
* 3 image sections to display the Devmons
* 1 textbox section to display the Devmon name
* 1 button
5. Show an instructor for approval! :)
6. Create the HTML and CSS for your page.

### Part II

To complete Part II, fulfill the following requirements:
1. Go to http://www.bfxr.net/ to create your Devmon battle cry. Export it as a wav file and place it in your `assets` folder. Create 3 or use the pre-made battle cries in the sound folder.
2. Create a **click function** on the Devball image. When you click an image, the following should happen:
* Play a battle cry
  * Add sound using JavaScript! Create a new Audio by following this syntax.
  ```javascript
  var audio1 = new Audio('assets/sound-1.wav');
  ```
  * Within the parenthesis is the path to the sound. The backslash represents a "jump" into a folder or file. In this case, we are jumping into the assets folder and selecting the sound-1.wav sound file. 
* Enlarge the image
* Change the inner HTML of the textbox to show the name of the Devmon  

### Part III

To complete Part III, fulfill the following requirements:
1. Create a **click function** on the button. When you click on the button, the following should happen:
* The enlarged Devball image will show a Devmon! You can use the Devmon images in the images folder or find your own
* The `theme.wav` sound will play

### Stretch Goals

* Pretty up your page.
* Add a CSS animation upon hovering over a Devball image.
* Use a `case switch` statement in your JavaScript logic.

## Resources
* https://www.w3schools.com/jsref/prop_html_innerhtml.asp
* https://www.w3schools.com/js/js_htmldom_events.asp
