// @ts-nocheck
import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import { fade } from 'svelte/transition';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import checkToken from './checkToken';
import updateStoreArray from './updateStoreArray';
import checkAdminToken from './checkAdminToken';
import convertEqsToSlide from './convertEqToSlide.js';
import { BASE_URL } from './config';
import { isLoginStore,isAdminStore } from './appStore';
import Icons from './icons';
import uuid from './uuid';
// import chqLogin from './chqLogin';

            export {
            isLoginStore,isAdminStore,
            BASE_URL,
                    onMount,
                    toast,
                    fade,
                    get,
                    updateStoreArray,
                    convertEqsToSlide,
                    uuid,
                    goto,
                    browser,
                    Icons,
                    checkToken,
                    checkAdminToken
            }

/*<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} */