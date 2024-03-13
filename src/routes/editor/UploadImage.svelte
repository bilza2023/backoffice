<script>
    //@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import {Icons,toast} from '$lib/util';

export let tcode;
// export let item;
async function uploadImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = false; // Allow only single file selection
    input.accept = 'image/*'; // Allow all image file types
    input.click(); // Click the hidden input element
    input.addEventListener('change', handleImageSelection);
  }

  async function image_exists(file,tcode) {
    try {
      debugger;
    const url = `https://taleem-media.blr1.digitaloceanspaces.com/images/${tcode}/${file.name}`;
        debugger;
    // const resp = await ajaxGet(url);
    const resp = await fetch( url, {
    method: 'GET',
      headers: {
    'Content-Type': 'application/json'
    // 'Authorization': `Bearer ${token}`,
    }
    });  

         if(resp.ok){
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error checking MP3 file existence:', error);
        return false;
    }
}




/////////////////////////////////////////////////////////
async function handleImageSelection(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    formData.append('tcode', tcode);

    try {
      const exists = await image_exists(file,tcode);
      if(exists){toast.push('file aready exists');return;}

        const resp = await fetch(`${BASE_URL}/upload_image`, {
            method: 'POST',
            body: formData,
        });

        if (resp.ok) {
            const data = await resp.json();
            // console.log('Uploaded image file:', data.url);
            toast.push("file uploaded");
        } else {
          toast.push("failed to upload file");
            // console.error('Failed to upload image file:', resp.statusText);
        }
    } catch (error) {
        // console.error('Error uploading image file:', error);
    }
}



</script>


<NavBtn2 title='Upload Jpg' icon={Icons.TREE}  clk={uploadImage} />
