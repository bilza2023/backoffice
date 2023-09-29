//@ts-nocheck
import {toast,BASE_URL} from "$lib/util";
import fs from "fs";


export default async function backupFn(){
// 
const token = localStorage.getItem('token');
const resp = await fetch( `${BASE_URL}/backup` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify( {token} )
    });
    if (resp.ok){
    const data = await resp.json();
              // Convert the data to a string
    const dataString = JSON.stringify(data.questions);
        debugger;
        fs.writeFile('backup.json', dataString, (err) => {
        if (err) {
            toast.push('Error writing file:');
        } else {
            toast.push('Successfully wrote file');
        }
        });
    }else {
    const data = await resp.json();
    toast.push(data.message);
    }


}