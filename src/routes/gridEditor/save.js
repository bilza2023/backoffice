//@ts-nocheck

import {BASE_URL ,  toast} from "$lib/util";

export default async function saveFn(question,global,rows,sp=[],fs=[]){
  try{
  debugger;
       question.questionType = "grid";
       question.grid = {};
       question.grid.sp = [];
       question.grid.fs = [];
       question.grid.global = global;
       question.grid.rows = rows;
       /////////////////////////////////////// 
       const token = localStorage.getItem("token");
       const response = await fetch(`${BASE_URL}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token,question})
        });
        if (response.ok) {
            toast.push('Data uploaded successfully');
        }else {
              toast.push('Response not ok');
        } 
      }catch (e) {
              toast.push('Unknown Error');
      }
}