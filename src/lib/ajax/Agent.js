// @ts-nocheck
/**
* 14-july-2023
- Agent is a wrapper over ajaxPost and ajaxPost is wrapper over normal fetch request.
- In addition to that my back end API (at cyclic.sh) needs data to be sent in 
data : { item : {}} . so we can wrap the data object here and just send item/items to it.
- This is a static class does not need to be instiantiated.
- It has no logic is just an administrative / wiring object.
*/
import ajaxPost from "./ajaxPost";
import { BASE_URL } from '../cmn/config.js';

/////////////////////////////////////////////////
export default class Agent {

static async create(route,despData={}){
const response = await ajaxPost(`${BASE_URL}/${route}/create` , {data:despData} );
return response;
}

static async update(route,despData={}){
const response = await ajaxPost(`${BASE_URL}/${route}/update` , {data:despData} );
return response;
}

static  async read(route,despData={}){
const response = await ajaxPost(`${BASE_URL}/${route}/read` , {data:despData} );
return response;
}

static async readone(route,despData={}){
const response = await ajaxPost(`${BASE_URL}/${route}/readone` , {data:despData} );
return response;
}

static async del(route,despData={}){
const response = await ajaxPost(`${BASE_URL}/${route}/delete` , {data:despData} );
return response;
}

}//class ends
