//@ts-nocheck
import {toast,Agent} from '$lib/util';
import {visibleDialogStore} from '../store';

//////////////////////////////////
export default async function clone(incommingItem , title) {
try {
    // debugger;
    const resp = await Agent.create('test', { title });
    if (resp.ok) {
//-- To clone we need 3 things 1: a new id 2: a deep copy of item 3: assign the new id to deep copy and make other edits.         

        const data = await resp.json();
        const newItem = data.item;
        //--step 1
        const newId = newItem._id; 
        //-- step 2
        let itemForClone = JSON.parse(JSON.stringify(incommingItem));
        //-- step 3
        itemForClone._id = newId;
        // itemForClone.title = title; //already done
        itemForClone.classId = ''; //dont save classId
        itemForClone.questions = incommingItem.questions.questionsArray ;

        const resp2 = await Agent.update('test', { item : itemForClone });

        if (resp2.ok) {
            toast.push("Cloned");
            visibleDialogStore.set('');
        } else {
            toast.push("failed to clone");
        }
    } else {
        toast.push("failed to clone");
    }
        } catch (e) {
            console.log(e);
        }
    }