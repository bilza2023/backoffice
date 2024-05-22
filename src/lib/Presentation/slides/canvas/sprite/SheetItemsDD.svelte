<script>
    //@ts-nocheck
    export let sheet;
    export let sheetItem;
   
</script>

    {#if sheet == "figs"}
        <option value="fig1" selected={sheetItem === 'fig1'}>Fig1</option>
        <option value="fig2" selected={sheetItem === 'fig2'}>Fig2</option>
    {/if}




    {#if sheet == "students"}
        <option value="student_w_tablet" selected={sheetItem === 'student_w_tablet'}>student_w_tablet</option>
        
        <option value="student_red" selected={sheetItem === 'student_red'}>student_red</option>
        
        <option value="student_black" selected={sheetItem === 'student_black'}>student_black</option>

        <option value="student_female" selected={sheetItem === 'student_female'}>student_female</option>
        
        <option value="three_students" selected={sheetItem === 'three_students'}>three_students</option>
    {/if}
