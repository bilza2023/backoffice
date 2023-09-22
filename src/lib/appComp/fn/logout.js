
import {isLoginStore} from '$lib/cmn/appStore';
import {goto} from '$lib/util';

export default function logout(){
isLoginStore.set(false);
localStorage.setItem("token", '');
goto('/');
}