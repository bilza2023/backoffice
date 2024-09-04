Here are come of my svelte components.

CanvasEditorPlayer.svelte

it display items on canvas and if one of the item is selected it creates a SelectedItem object for it and use it.

SelectedObject:
This allow user to interact with the item on screen and edit it. it display handles (using which user can grab , widen etc using mouse). 
    SelectedObject has following duties
        1: draw handles
        2: select handle if hit
        3: if handle selected then on mouse move update item values and update handle position
    ....?

Handles:(handle in name used for the code which diplay a visual handle on canvas/screen).
There are 2 types of handles 
    1: DraggerHandle : This is used to drag item from place to place. it edits the x and y property of the item.
    2: AdderHandle : This is used to edit any one property of the item which is given at creation time of this object.

What I want:

    - please read the code and suggest SMALL improvements (not a rewrite).
    - any problems you see? 
    

