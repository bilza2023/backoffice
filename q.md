I am creating a component based presentation app (slide show)  in javascript / svelte / sveltekit mongobd environment.

Each slide is a component.
I have to create a theme object that is passed on to each component , this theme object has colors and other information. 
each author of component is responsible to implement this theme object in his component so that the theme of the slides can be changed from outside and all slides look the same theme.

NOW : How to create the theme object ? 
Options
Option 1: should i name fileds like primaryColor,secondaryColor,backgroundColor , textColor , highlightColor OR
Option    2: should i name the theme object fields like borderColor , backgroundColor , primaryButton , dangerButton 
    OR
Option    3 : create a mix and match of option 1 and 2 ?

Here is the prblem is option 1 : 
if i use 5 variables primaryColor,secondaryColor,backgroundColor , textColor , highlightColor (since the color themes for websites avaialble online also has 5 set of colors) . Then how do i know which of these 5 colors is suitable for border color which for focused element color ????
