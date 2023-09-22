//@ts-nocheck
import {toast,Agent} from '$lib/util';

export default async function save(item) {
    try {
        // debugger;

        item.classId = '';
        //--after converting quiz to OOP we need to remove objects and assign the questions array back
        let itemToSave = JSON.parse(JSON.stringify(item));

        itemToSave.questions = item.questions.questionsArray ; 
       
        const resp = await Agent.update('test', { item : itemToSave });

        if (resp.ok) {
            const data = await resp.json();
            toast.push("saved");
        } else {
            const data = await resp.json();
            toast.push(data.message);
        }

    } catch (e) {
        toast.push('Failed to save');
    }
    }