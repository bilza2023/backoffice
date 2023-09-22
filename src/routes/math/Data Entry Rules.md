
# Math Data Format (15-Sep-2023)

The MP: Main panel is used to display the main content / equations of the question.
The SP: Side Panel is to show more details about what is currently being highlighted on MP.

## questionDetails
//-math data names are like ptbb_math_9th_chap03_q13_item33.js or mp3
    - details : 
## eqs

- The eqs is an array of objects containing the main math data that is displayed in the main panel (MP). Each object contains
  - time : "startTime" there is no end time but that is calculated at the onMount. This is the time (seconds at which the eq object will get focused), it is in sync with sound time.We must check that the "time" (startTime) are in sequence and can not be out of sequence i.e time 10 can not appear after time 30 for any object in the eqs array.
  - isf : "is Focused" . The fild 'isf' is also not inserted into data since it is required at run time and thus is added at onMount.
  - code: This is the main content field which can contain CODE or TEXT. This can not contain Images or any other data in MP however in SidePanel that is different.


#  spContent
    - Though eqs are displayed in the MP where as spContent is displayed in SP other then this the main difference between them are:
        - eqs can contain only Code and Text where as spContent can contain Code, Text as well as Images.
        - The eqs are sequential, when first one ends the following one starts. Where as spContent start and end in the order they are given. they can overlap but there is no compulsion that there shuold be next one when the first starts.

    - A big important behaviour spContent is that once there are no content the SP will hide. ** SP is not guaranteed to be displayed all the time.
    - If we want to display the SP for the entire duration of the presentation we put some thing in it that has startTime as 0 and endTime = null; 
    - This must contain start time and end time (startTime , endTime). Since they do not wait for the next item to start before they can finish (like in eqs). Every item in spContent is removed after it has finished.
    - endTime : null. The endTime can be null which means that the content will not be visible for the entire duration of the presentation from STARTTIME on wards.
    - hideMP : This will ask the app to hide MP to make more room for the SP. We can not assign hideMP = true with endTime = null since that will hide the MP for ever. Once the item in spContent with hideMP is done the MP is made visible again.

# permContent
    - This is displayed on the SP  always and every time but they do not cause appearance or disapperance of the SP. it is just there to be seen when the SP is open.