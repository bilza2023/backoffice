// @ts-nocheck
import { templatesStore,testsStore,runsStore,studentsStore ,classStore} from '$lib/cmn/appStore';

import {Agent,LocalStorage} from '$lib/ajax';
///////////////////////////////////////////////
///////////////////////////////////////////////

export default async function loadApp(){
      try {
   // debugger;    
   await uploadStore( 'template' , 'templates', templatesStore, 
      LocalStorage.updateTemplates  );

   await uploadStore( 'test' , 'tests', testsStore , 
      LocalStorage.updateTests  );

   await uploadStore( 'run' , 'runs', runsStore, 
      LocalStorage.updateRuns  );

   await uploadStore( 'student' , 'students', studentsStore, 
      LocalStorage.updateStudents  );

   await uploadStore( 'class' , 'classes', classStore, 
      LocalStorage.updateClasses  );

 
    } catch(err){
        throw err;
    
    }

}      
/**
 * @param {*} itemName : Name for use with Agent (non plural for API) 
 * @param {*} itemSlug : Plural name used for local storage
 * @param {*} storeVariable : Variable where it is stored in store
 * @param {*} updateFn : Update local storage
 */
 
async function uploadStore( itemName ,itemSlug, storeVariable , updateFn ){
const stored = JSON.parse( localStorage.getItem( itemSlug ));
      if( stored == null || stored.length == 0 ){
     const resp = await Agent.read( itemName ,{});
     const data = await resp.json();
              await storeVariable.set(data.items);
      updateFn();
      }else {
         await storeVariable.set(stored);
      } 
}
/////////////////////////////////////////////////////////