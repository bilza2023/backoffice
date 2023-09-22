// @ts-nocheck
import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import { fade } from 'svelte/transition';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import Icons from './icons';
import chqLogin from './chqLogin';
import {BASE_URL} from './config';

            export {
                    onMount,
                    toast,
                    fade,
                    get,
                    goto,
                    browser,
                    Icons,
                    BASE_URL,
                    chqLogin
            }

/*<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} */