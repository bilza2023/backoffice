<script>
    //@ts-nocheck
import {NavBtn2} from 'sveltetools_bils/src/cmp';
import {Icons,toast,API_URL} from '$lib/util';

export let tcode;
export let item;

async function uploadMp3() {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = false; // Allow only single file selection
    input.accept = '.mp3'; // Allow only MP3 files
    input.click(); // Click the hidden input element
    input.addEventListener('change', handleMp3Selection);
  }

async function handleMp3Selection(event) {
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append('mp3', file, item.filename + ".mp3");

    formData.append('tcode', tcode);
    formData.append('exercise', item.exercise);
    
    try {
      ////////////////////////////////////////////
        const resp = await fetch(`${API_URL}/upload_mp3`, {
            method: 'POST',
            body: formData,
        });

        if (resp.ok) {
            const data = await resp.json();
            toast.push("File Uploaded");
        } else {
          const data = await resp.json();
                if(data.message){
                toast.push(data.message);
                }else{
                toast.push("Failed to upload MP3 file");
                }
        }
    } catch (error) {
        console.error('Error uploading MP3 file:', error);
    }
}
</script>


<NavBtn2 title='Upload Mp3' icon={Icons.SPEAKER}  clk={uploadMp3} />