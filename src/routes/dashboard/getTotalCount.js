//@ts-nocheck
import {Agent} from '$lib/util';

export default async function getTotalCount(slug){
  const resp  = await Agent.read(slug);
    if (resp.ok){
      const data = await resp.json();
      return  data.items.length;
    }else {
        return 0;
    }
}  
