<script>
//@ts-nocheck
export let applyTheme;
</script>



    <select on:change={(e) => applyTheme(e.target.value)}
    class="p-1 m-0 mx-2 rounded-md bg-gray-900 text-yellow-500    text-xs">
    <option value="redGray">RedGray</option>
    <option value="basic">Basic</option>
    <option value="earthyElegance">Earthy Elegance</option>
    <option value="oceanic">Oceanic</option>
    </select>
