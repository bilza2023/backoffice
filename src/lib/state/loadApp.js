// @ts-nocheck

import { templatesStore,testsStore,runsStore,studentsStore ,classStore} from '../cmn/appStore.js';

 
import Agent from '../ajax/Agent.js';
import LocalStorage from './localStorage.js';

/////////////////////////////////////////////////////////
function needsLoading(itemSlug){
const stored = JSON.parse( localStorage.getItem( itemSlug ));
//|| stored.length == 0 remove since there maybe [] array but they get called again and again.
      if( stored == null ){
         return true;
      }else {
         return false;
      } 
}
/////////////////////////////////////////////////////////
async function fetchStoreData( itemName, storeVariable ){
     const resp = await Agent.read( itemName ,{});
     const data = await resp.json();
    await storeVariable.set(data.items);
}
/////////////////////////////////////////////////////////

export default async function load(forced = false) {
  try {
    if (needsLoading('templates') || forced) {
      fetchStoreData('template', templatesStore);
    }

    if (needsLoading('tests') || forced) {
      fetchStoreData('test', testsStore);
    }

    if (needsLoading('runs') || forced) {
      fetchStoreData('run', runsStore);
    }

    if (needsLoading('students') || forced) {
      fetchStoreData('student', studentsStore);
    }

    if (needsLoading('classes') || forced) {
      fetchStoreData('class', classStore);
    }

    //--important / ********************************
    LocalStorage.updateAll();
  } catch (err) {
    //   throw err;
  }
}      
