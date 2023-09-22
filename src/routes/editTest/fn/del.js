//@ts-nocheck
import {toast,Agent,goto} from '$lib/util';
import {visibleDialogStore} from '../store';

//////////////////////////////////
export default async function del(item,title) {
    try {
        // debugger;

        if (title !== item.title) {
            toast.push('Title does not match');
            return;
        }

        const resp = await Agent.del('test', { id: item._id });

        if (resp.ok == true) {
            visibleDialogStore.set('');
            goto("/tests");
            toast.push('deleted');
        } else {
            const data = await resp.json();
            toast.push(data.message);
        }
    } catch (e) {
        console.log(e);
    }
}