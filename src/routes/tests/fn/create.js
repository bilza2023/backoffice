// @ts-nocheck
import { toast,goto,Agent } from '$lib/util';
import {itemsStore,showNewDialogueStore} from '../store';



export default async function create(title){
        try {
        // debugger;
        // const item = getSurvey(title);
        const resp = await Agent.create('test', {title});
        if (resp.ok){
            const data = await resp.json();
            const item = data.item;
            // console.log("new test" , item);
            
                itemsStore.update(cur  => {
                    // manipulate data
                return cur.concat(item);
                });
            showNewDialogueStore.set(false);
            goto(`/editTest?quizId=${item._id}`);
            toast.push('New Test created');

            // console.log("items" , items);
        }else {
            toast.push('failed to load');
        }
    } catch (e) {
        toast.push( e.message);
    }


}

///////////////////////////////////////
function getSurvey(incomming_title = "New Test") {
   const svy = { 
        userId : '',
        title : incomming_title,
        saveResponse : false,
        showIntro : true,
        introText : "Welcome",
        published : false,
        showResult : true,
        showfarewellText : true,
        farewellText : "Goodbye",
        members : [],
        questions : []
   }
 return svy;   
}
