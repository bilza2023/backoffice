I am developing a Presentation app in svelte (node mongodb).

I have objects like presentation , slides .

I want to implement a theme system so that if the presentation them is change then all the slides should implement the same theme.

My idea is to create an object called "theme" . the "theme" is just an object with collection of colors

 theme = {
    backgroundcolor : 'red',
    midColor : 'green',
    frontColor : 'yellow',
    boldColor : 'green',
 }

 Is this correct approch or you can suggest some theme system for components 

 how are themes made . i think there is a palette of 4-5 colors which go well with each other and they are names such backgroundColor , foreGroundColor  , ... they are just colors and not shadowColor ... it is then upto the component writer to implement them as he feels fits . for example rather than being forced for the text to be always of textColor the author can use boldColor  , backgroundColor etc .. so i am thinking of a theme object with colors and what there shade is good for and not fields like linkColor