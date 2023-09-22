I have a quiz object in my mongodb app. this quiz object saves questions which has content. These content can be of different types with different fields.

I have 2 options

        1: create different Models for each quiestion content type and use mongoose discriminators.
        2: pplace each question content type in its own array inside the question object (e.g question.content.images[] , question.content.text[] ) and then pick them using ids (keep a seperate list of sort order and draw them per that).
Question : 
Talk about both options and their merits and demoierits 
Give other suggestions        