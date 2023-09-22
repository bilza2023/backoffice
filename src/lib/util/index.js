// @ts-nocheck
import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import { fade } from 'svelte/transition';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import Icons from './icons';
import ajaxPost from './ajaxPost';
import ajaxGet from './ajaxGet';
import Agent from './Agent';

            export {
                    onMount,
                    toast,
                    fade,
                    get,
                    goto,
                    browser,
                    Icons,
                    ajaxPost,
                    ajaxGet,
                    Agent
            }

/*<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} */