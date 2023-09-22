
import { isLoginStore, isAdminStore } from './appStore';


export default function chqLogin(){
 const teacher_token = localStorage.getItem('teacher_token');
 const teacher_status = localStorage.getItem('teacher_status');
 
      if ( teacher_token==null || teacher_status==null ){
      return false;
      }else {
        isLoginStore.set(true);
                if (teacher_status == 'admin'){
                    isAdminStore.set(true)
                }else{
                    isAdminStore.set(false)
                }
      return true;                  
      }


}