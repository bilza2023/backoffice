//@ts-nocheck
import { get } from '$lib/util';
import { pageStateStore,itemStore } from '../store';

///////////////////////////////////////////////////
export default function nextPageState ( ){
  // debugger;
  const state = get( pageStateStore  ); 
  const quiz = get( itemStore  ); 
  // pageState == '' is only at start after resp.ok
  if ( state  == '' ) { //--> In onMount
          pageStateStore.set('loginForm');
  }
///////////////////////////////////////////
  if ( state  == 'loginForm' ) { //-->from inside login form
          pageStateStore.set('showQuiz');
        return;
  }    
///////////////////////////////////////////
//-->Save Response()
///////////////////////////////////////////
  if ( state  == 'showQuiz') { //-->inside Save Response
      if (quiz.showResult == true){
          pageStateStore.set('result');
        return;
      }else {
          pageStateStore.set('goodbye');
        return;
      }    
  }
  
///////////////////////////////////////////|
}//                                        | 
///////////////////////////////////////////|
