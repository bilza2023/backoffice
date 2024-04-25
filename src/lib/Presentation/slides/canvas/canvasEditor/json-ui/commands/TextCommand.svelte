<script>
    //@ts-nocheck
    
    export let item;
    function randNo(length=8){
    const digits = '0123456789';
  let result = '';
  const digitsLength = digits.length;
  for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digitsLength));
  }
  return result;
  }
    function applyTemplate(event) {
        switch (event.target.value) {
case 'ADD' :
        item.text = ' ➕';
        break;
case 'BALANCE' :
        item.text = '⚖️';
        break;
case 'BARCHART' :
        item.text = '📊';
        break;
case 'BOOK' :
        item.text = '📘';
        break;
case 'BOOKS' :
        item.text = '📚';
        break;
case 'BUS' :
        item.text = '🚌';
        break;
case 'BULB' :
        item.text = '💡'; 
        break;
case 'CAR' :
        item.text = '🚗';
        break;
case 'CHARTUP' :
        item.text = '📈';
        break;
case 'CHARTDOWN' :
        item.text = '📉';
        break;
case 'CLOCK' :
        item.text = '⏱️';
        break;
case 'COG' :
        item.text = '⚙';
        break;
case 'COMPUTER' :
        item.text = '💻';
        break;
case 'COPY' :
        item.text = '📋';
        break;
case 'CODE' :
        item.text = '📟';
        break;
case 'COLD' :
        item.text = '🥶';
        break;
case 'CROSS' :
        item.text = '❌';
        break;
case 'CLIP' :
        item.text = '📎';
        break;
case 'CLONE' :
        item.text = '🁜';
        break;
case 'DARK' :
        item.text = '🌃';
        break;
case 'DEL' :
        item.text = '🗑️';
        break;
case 'DOOR' :
        item.text = '🚪';
        break;
case 'DOWN' :
        item.text = '↓';
        break;
case 'EMAIL' :
        item.text = '📧';
        break;
case 'EYE' :
        item.text = '👁️';
        break;
case 'EYES' :
        item.text = '👀';
        break;
case 'EXPLOSION' :
        item.text = '💥';
        break;
case 'FILESBOX' :
        item.text = '🗃️';
        break;
case 'FLOWER' :
        item.text = '🌸';
        break;
case 'FROWNFACE' :
        item.text = '☹️';
        break;
case 'HAMMER_AND_WRENCH' :
        item.text = '🛠️';
        break;
case 'HEART' :
        item.text = '❤️';
        break;
case 'HIDE' :
        item.text = '🙈';
        break;
case 'HOT' :
        item.text = '🔥';
        break;
case 'HOURGLASS' :
        item.text = '⌛';
        break;
case 'HOUSE' :
        item.text = '🏠';
        break;
case 'ICE' :
        item.text = '🧊';
        break;
case 'KEY' :
        item.text = '🔑';
        break;
case 'LOCK' :
        item.text = '🔒';
        break;
case 'LEFT' :
        item.text = '←';
        break;
case 'MAGNIFYING_GLASS' :
        item.text = '🔍';
        break;
case 'MANAGER' :
        item.text = '💼';
        break;
case 'MCQ' :
        item.text = '🔱';
        break;
case 'MESSAGE' :
        item.text = '📨';
        break;
case 'MICROSCOPE' :
        item.text = '🔬';
        break;
case 'NET' :
        item.text = '🌐';
        break;
case 'NOTES' :
        item.text = '📋';
        break;
case 'NUMBER' :
        item.text = '❶'; 
        break;
case 'PALETTE' :
        item.text = '🎨';
        break;
case 'PENCIL' :
        item.text = ' ✏️';
        break;
case 'PHONE' :
        item.text = '📱';
        break;
case 'QUESTIONMARK' :
        item.text = '❓';
        break;
case 'RULER' :
        item.text = '📏';
        break;
case 'RIGHT' :
        item.text = '→';
        break;
case 'RECYCLE' :
        item.text = '♻️';
        break;
case 'RUN' :
        item.text = '🏃';
        break;
case 'ROCKET' :
        item.text = '🚀';
        break;
case 'SAVE' :
        item.text = '💾';
        break;
case 'SMILYFACE' :
        item.text = '😊';
        break;
case 'SPEAKER' :
        item.text = '📢';
        break;
case 'NOSPEAKER' :
        item.text = '🔇';
        break;
case 'STAIRS' :
        item.text = '🪜';
        break;
case 'STAR' :
        item.text = '⭐';
        break;
case 'SHEEP' :
        item.text = '🐑';
        break;
case 'START' :
        item.text = '▶';
        break;
case 'STOP' :
        item.text = '||';
        break;
case 'STUDENT' :
        item.text = '👨‍🎓';
        break;
case 'STUDENTCAP' :
        item.text = '🎓';
        break;
case 'SUN' :
        item.text = '☀️';
        break;
case 'SUBTRACT' :
        item.text = '➖';
        break;
case 'TAG' :
        item.text = '🏷️';
        break;
case 'TEAM' :
        item.text = '🧑‍🤝‍🧑';
        break;
case 'TICK' :
        item.text = '✔️';
        break;
case 'TEMPRATURE' :
        item.text = '🌡️';
        break;
case 'TEMPLATE' :
        item.text = '📜';
        break;
case 'TEST' :
        item.text = '🧪';
        break;
case 'TEXT' :
        item.text  = '📃';
        break;
case 'THUMBSUP' :
        item.text = '👍';
        break;
case 'THUMBSDOWN' :
        item.text = '👎';
        break;
case 'TRIANGULAR_RULER' :
        item.text = '📐';
        break;
case 'TREE' :
        item.text = '🌳';
        break;
case 'TV' :
        item.text = '📺';
        break;
case 'WRENCH' :
        item.text = '🔧';
        break;
case 'UP' :
        item.text = '↑';
        break;
/////////second                 
  case 'MONEYBAG' :
  item.text  = '💰';
  break;
  case 'MAGNET' :
  item.text  = '🧲';
  break;
  case 'MAGICWAND' :
  item.text  = '🪄';
  break;
  case 'MAP' :
  item.text  = '🗺️';
  break;
  case 'MEDAL' :
  item.text  = '🎖️';
  break;
  case 'MEGAPHONE' :
  item.text  = '📣';
  break;
  case 'MICROPHONE' :
  item.text  = '🎤';
  break;
  case 'MILK' :
  item.text  = '🥛';
  break;
  case 'MOON' :
  item.text  = '🌙';
  break;
  case 'MOUNTAIN' :
  item.text  = '⛰️';
  break;
  case 'MUSIC' :
  item.text  = '🎵';
  break;
  case 'NETWORK' :
  item.text  = '🔗';
  break;
  case 'NEWSPAPER' :
  item.text  = '📰';
  break;
  case 'NOTEBOOK' :
  item.text  = '📓';
  break;
  case 'OIL' :
  item.text  = '🛢️';
  break;
  case 'PANDA' :
  item.text  = '🐼';
  break;
  case 'PARACHUTE' :
  item.text  = '🪂';
  break;
  case 'PEACE' :
  item.text  = '☮️';
  break;
  case 'PENGUIN' :
  item.text  = '🐧';
  break;
  case 'PET' :
  item.text  = '🐾';
  break;
  case 'PIGGYBANK' :
  item.text  = '🐖';
  break;
  case 'PINEAPPLE' :
  item.text  = '🍍';
  break;
  case 'PIZZA' :
  item.text  = '🍕';
  break;
  case 'PLANET' :
  item.text  = '🪐';
  break;
  case 'PRINTER' :
  item.text  = '🖨️';
  break;
  case 'PUZZLE' :
  item.text  = '🧩';
  break;
  case 'QUILL' :
  item.text  = '🖋️';
  break;
  case 'RAINBOW' :
  item.text  = '🌈';
  break;
  case 'RECORD' :
  item.text  = '🎙️';
  break;
  case 'ROSE' :
  item.text  = '🌹';
  break;
  case 'SAILBOAT' :
  item.text  = '⛵';
  break;
  case 'SATELLITE' :
  item.text  = '🛰️';
  break;
  case 'SCISSORS' :
  item.text  = '✂️';
  break;
  case 'SCROLL' :
  item.text  = '📜';
  break;
  case 'SHIELD' :
  item.text  = '🛡️';
  break;
  case 'SNOWFLAKE' :
  item.text  = '❄️';
  break;
  case 'SQUIRREL' :
  item.text  = '🐿️';
  break;
  case 'SUITCASE' :
  item.text  = '💼';
  break;
  case 'SUNGLASSES' :
  item.text  = '🕶️';
  break;
  case 'SURFBOARD' :
  item.text  = '🏄‍♂️';
  break;
  case 'TADA' :
  item.text  = '🎉';
  break;
  case 'TEA' :
  item.text  = '🍵';
  break;
  case 'TELESCOPE' :
  item.text  = '🔭';
  break;
  case 'TENT' :
  item.text  = '⛺';
  break;
  case 'TOOLS' :
  item.text  = '🛠️';
  break;
  case 'TORNADO' :
  item.text  = '🌪️';
  break;
  case 'TROPHY' :
  item.text  = '🏆';
  break;
  case 'UMBRELLA' :
  item.text  = '☂️';
  break;
  case 'UNLOCK' :
  item.text  = '🔓';
  break;
  case 'VAN' :
  item.text  = '🚐';
  break;
  case 'VIAL' :
  item.text  = '🧪';
  break;
  case 'VIKING' :
  item.text  = '🛡️';
  break;
  case 'WALLET' :
  item.text  = '👛';
  break;
  case 'WATERMELON' :
  item.text  = '🍉';
  break;
  case 'WHALE' :
  item.text  = '🐋';
  break;
  case 'WIFI' :
  item.text  = '📶';
  break;
  case 'WIND' :
  item.text  = '💨';
  break;
  case 'WOLF' :
  item.text  = '🐺';
  break;
  case 'YIN_YANG' :
  item.text  = '☯️';
  break;

//////////////////////////////
            case 'title':
       item.font = "30px Arial";
       item.color = "yellow";
       item.shadowOffsetX =  6;
       item.shadowOffsetY =  6;
       item.globalAlpha =  1;
       item.shadowColor =  "black";
       item.shadowBlur =  3;
            break;
            case 'taleem':
       item.text = "https://taleem.help";
       item.font = "20px Arial";
       item.translate = true;
       item.x = 12;
       item.y = 12;
       item.color = "yellow";
       item.shadowOffsetX =  4;
       item.shadowOffsetY =  4;
       item.globalAlpha =  1;
       item.shadowColor =  "black";
       item.shadowBlur =  2;
            break;

            case 'jt' :
                item.name = "jt_"+ randNo();
                item.text= "Ex 8.2 Question 3 Pt 2";
                item.x= 4;
                item.y= 3;
                item.color= "#FAE500";
                item.font= "80px Arial";
                item.shadowOffsetX = 12;
                item.shadowOffsetY = 12;
                item.shadowColor = "#9D850B";
                item.shadowBlur = 12
            break;

            default:
                break;
        }
    }
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        <tr>
            <td class="border border-white p-1">Templates</td>
            <td class="border border-white p-1">
                <select on:change={applyTemplate} class="bg-gray-900 text-white p-1">
                    <option value="none">None</option>
                    <option value="taleem">taleem</option>
                    <option value="title">Title</option>
                    <option value="jt">JT</option>
<option value="ADD">ADD</option>
<option value="BALANCE">BALANCE</option>
<option value="BARCHART">BARCHART</option>
<option value="BOOK">BOOK</option>
<option value="BOOKS">BOOKS</option>
<option value="BUS">BUS</option>
<option value="BULB">BULB</option>
<option value="CAR">CAR</option>
<option value="CHARTUP">CHARTUP</option>
<option value="CHARTDOWN">CHARTDOWN</option>
<option value="CLOCK">CLOCK</option>
<option value="COG">COG</option>
<option value="COMPUTER">COMPUTER</option>
<option value="COPY">COPY</option>
<option value="CODE">CODE</option>
<option value="COLD">COLD</option>
<option value="CROSS">CROSS</option>
<option value="CLIP">CLIP</option>
<option value="CLONE">CLONE</option>
<option value="DARK">DARK</option>
<option value="DEL">DEL</option>
<option value="DOOR">DOOR</option>
<option value="DOWN">DOWN</option>
<option value="EMAIL">EMAIL</option>
<option value="EYE">EYE</option>
<option value="EYES">EYES</option>
<option value="EXPLOSION">EXPLOSION</option>
<option value="FILESBOX">FILESBOX</option>
<option value="FLOWER">FLOWER</option>
<option value="FROWNFACE">FROWNFACE</option>
<option value="HAMMER_AND_WRENCH">HAMMER_AND_WRENCH</option>
<option value="HEART">HEART</option>
<option value="HIDE">HIDE</option>
<option value="HOT">HOT</option>
<option value="HOURGLASS">HOURGLASS</option>
<option value="HOUSE">HOUSE</option>
<option value="ICE">ICE</option>
<option value="KEY">KEY</option>
<option value="LOCK">LOCK</option>
<option value="LEFT">LEFT</option>
<option value="MAGNIFYING_GLASS">MAGNIFYING_GLASS</option>
<option value="MANAGER">MANAGER</option>
<option value="MCQ">MCQ</option>
<option value="MESSAGE">MESSAGE</option>
<option value="MICROSCOPE">MICROSCOPE</option>
<option value="NET">NET</option>
<option value="NOTES">NOTES</option>
<option value="NUMBER">NUMBER</option>
<option value="PALETTE">PALETTE</option>
<option value="PENCIL">PENCIL</option>
<option value="PHONE">PHONE</option>
<option value="QUESTIONMARK">QUESTIONMARK</option>
<option value="RULER">RULER</option>
<option value="RIGHT">RIGHT</option>
<option value="RECYCLE">RECYCLE</option>
<option value="RUN">RUN</option>
<option value="ROCKET">ROCKET</option>
<option value="SAVE">SAVE</option>
<option value="SMILYFACE">SMILYFACE</option>
<option value="SPEAKER">SPEAKER</option>
<option value="NOSPEAKER">NOSPEAKER</option>
<option value="STAIRS">STAIRS</option>
<option value="STAR">STAR</option>
<option value="SHEEP">SHEEP</option>
<option value="START">START</option>
<option value="STOP">STOP</option>
<option value="STUDENT">STUDENT</option>
<option value="STUDENTCAP">STUDENTCAP</option>
<option value="SUN">SUN</option>
<option value="SUBTRACT">SUBTRACT</option>
<option value="TAG">TAG</option>
<option value="TEAM">TEAM</option>
<option value="TICK">TICK</option>
<option value="TEMPRATURE">TEMPRATURE</option>
<option value="TEMPLATE">TEMPLATE</option>
<option value="TEST">TEST</option>
<option value="TEXT">TEXT</option>
<option value="THUMBSUP">THUMBSUP</option>
<option value="THUMBSDOWN">THUMBSDOWN</option>
<option value="TRIANGULAR_RULER">TRIANGULAR_RULER</option>
<option value="TREE">TREE</option>
<option value="TV">TV</option>
<option value="WRENCH">WRENCH</option>
<option value="UP">UP</option>

<!-- second -->
<option value="MONEYBAG">MONEYBAG</option>
<option value="MAGNET">MAGNET</option>
<option value="MAGICWAND">MAGICWAND</option>
<option value="MAP">MAP</option>
<option value="MEDAL">MEDAL</option>
<option value="MEGAPHONE">MEGAPHONE</option>
<option value="MICROPHONE">MICROPHONE</option>
<option value="MILK">MILK</option>
<option value="MOON">MOON</option>
<option value="MOUNTAIN">MOUNTAIN</option>
<option value="MUSIC">MUSIC</option>
<option value="NETWORK">NETWORK</option>
<option value="NEWSPAPER">NEWSPAPER</option>
<option value="NOTEBOOK">NOTEBOOK</option>
<option value="OIL">OIL</option>
<option value="PANDA">PANDA</option>
<option value="PARACHUTE">PARACHUTE</option>
<option value="PEACE">PEACE</option>
<option value="PENGUIN">PENGUIN</option>
<option value="PET">PET</option>
<option value="PIGGYBANK">PIGGYBANK</option>
<option value="PINEAPPLE">PINEAPPLE</option>
<option value="PIZZA">PIZZA</option>
<option value="PLANET">PLANET</option>
<option value="PRINTER">PRINTER</option>
<option value="PUZZLE">PUZZLE</option>
<option value="QUILL">QUILL</option>
<option value="RAINBOW">RAINBOW</option>
<option value="RECORD">RECORD</option>
<option value="ROSE">ROSE</option>
<option value="SAILBOAT">SAILBOAT</option>
<option value="SATELLITE">SATELLITE</option>
<option value="SCISSORS">SCISSORS</option>
<option value="SCROLL">SCROLL</option>
<option value="SHIELD">SHIELD</option>
<option value="SNOWFLAKE">SNOWFLAKE</option>
<option value="SQUIRREL">SQUIRREL</option>
<option value="SUITCASE">SUITCASE</option>
<option value="SUNGLASSES">SUNGLASSES</option>
<option value="SURFBOARD">SURFBOARD</option>
<option value="TADA">TADA</option>
<option value="TEA">TEA</option>
<option value="TELESCOPE">TELESCOPE</option>
<option value="TENT">TENT</option>
<option value="TOOLS">TOOLS</option>
<option value="TORNADO">TORNADO</option>
<option value="TROPHY">TROPHY</option>
<option value="UMBRELLA">UMBRELLA</option>
<option value="UNLOCK">UNLOCK</option>
<option value="VAN">VAN</option>
<option value="VIAL">VIAL</option>
<option value="VIKING">VIKING</option>
<option value="WALLET">WALLET</option>
<option value="WATERMELON">WATERMELON</option>
<option value="WHALE">WHALE</option>
<option value="WIFI">WIFI</option>
<option value="WIND">WIND</option>
<option value="WOLF">WOLF</option>
<option value="YIN_YANG">YIN_YANG</option>



                </select>
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Name</td>
            <td class="border border-white p-1">
                <input type="text" bind:value={item.name} class="bg-gray-900 text-white p-1" >
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Translate</td>
            <td class="border border-white p-1">
                <input type="checkbox" bind:checked={item.translate} class="bg-gray-900 text-white p-1">
            </td>
        </tr>
        
        <tr>
            <td class="border border-white p-1">Text</td>
            <td class="border border-white p-1">
                <input type="text" bind:value={item.text} class="bg-gray-900 text-white p-1" placeholder="Text">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">X</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.x} class="bg-gray-900 text-white p-1" placeholder="X">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Y</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.y} class="bg-gray-900 text-white p-1" placeholder="Y">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Color</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={item.color} class="bg-gray-900 text-white p-1" placeholder="Color">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">Font</td>
            <td class="border border-white p-1">
                <input type="text" bind:value={item.font} class="bg-gray-900 text-white p-1" placeholder="Font">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">shadowOffsetX</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.shadowOffsetX} class="bg-gray-900 text-white p-1" placeholder="Y">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">shadowOffsetY</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.shadowOffsetY} class="bg-gray-900 text-white p-1" placeholder="Y">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">shadowBlur</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.shadowBlur} class="bg-gray-900 text-white p-1" placeholder="Y">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">shadowColor</td>
            <td class="border border-white p-1">
                <input type="color" bind:value={item.shadowColor} class="bg-gray-900 text-white p-1" placeholder="Color">
            </td>
        </tr>
        <tr>
            <td class="border border-white p-1">globalAlpha</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.globalAlpha} class="bg-gray-900 text-white p-1" min="0" max="1" step="0.1">
            </td>
        </tr>
    </table>
</div>



