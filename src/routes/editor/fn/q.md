I have an  array of objects (slides) with each slide has a  filed "slide.startTime" and a field 'slide.endTime'. 

Here are the rules for start time and end time
    1: the startTime for slides[0] is always = 0;
    2: Each slide startTime (after first slide (slides[0])) must be = previous slide endTime. 
    3: the startTime of each slide must be smaller than the endTime of that slide (obviously)
    4: Any slide can not have overlapping timings of slide above it or below it (or any other slide)

Here is an example of correct timings

    slides[0].startTime = 0  ; slides[0].endTime = 10  
    slides[1].startTime = 10  ; slides[1].endTime = 20  
    slides[2].startTime = 20  ; slides[2].endTime = 30  
    slides[3].startTime = 30  ; slides[3].endTime = 40  

Write me a function "shiftTime" which when ever the end time of a slide is changed by the user

I want the function to adjest all the subsequent timings be adjested.
suppose the end time of slides[0] is change the startTime of slides[1] will also be changed , after that the difference between slides[1].startTime (with old startTime)  and slides[1].endTime be calculated and the slides[1].endTime also be adjested so that the total duration of the slide remains the same and the same process should be repeated for all subsequent slides.

example change slides[0] endtime from 10 to 12

slides[0].startTime = 0  ; slides[0].endTime = 12  
    slides[1].startTime = 12  ; slides[1].endTime = 22  
    slides[2].startTime = 22  ; slides[2].endTime = 32  
    slides[3].startTime = 32  ; slides[3].endTime = 42  
