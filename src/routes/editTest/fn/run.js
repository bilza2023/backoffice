//@ts-nocheck
import {toast,Agent} from '$lib/util';
import {visibleDialogStore,errorsArrayStore} from '../store';
import checkBeforePub from './check/checkBeforePub';
//////////////////////////////////
export default async function run(item) {
        try {
    // debugger;        
    const chq =  checkBeforePub(item);
        if (chq.length > 0) {
        errorsArrayStore.set(chq);
        visibleDialogStore.set('errors');            
        return; 
        }
    // ////////////========== Test
    if (item.title === '') {
        toast.push('Missing title');
        return;
    }
    // ////////////========== Test
    if (item.private === true) { // if private only then needs classId
        if (item.classId === '' || item.classId === null) {
            toast.push('Assign a Class to the test');
            return;
        }
    }
    item.testId = item._id;
    item._id = null;
    // item.title = title; //-use later to set new title
    item.published = true; //changed ??????
    item.createdAt = new Date();
    //////////////////////////////////////
    //--here stringify ---not required in the new setup
    // item = await quizStringify(item);
    //////////////////////////////////////
    const resp = await Agent.create('run', { item });
    if (resp.ok) {
        visibleDialogStore.set('');
        toast.push("Test is Running now");
    } else {
        toast.push("Failed to Run test");
    }

        } catch (e) {
            toast.push(e.message);
        }
    }