<script setup>
import { computed, provide, inject, onMounted } from 'vue';
import HeaderLayout from '@/layouts/HeaderLayout.vue';
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, minLength, maxLength } from '@vuelidate/validators';
import { RouterView } from 'vue-router';
import { useStore } from './store/store';
import { useStoreAuth } from './store/storeAuth';
import { useStoreMessages } from './store/storeMessages';



//================================= VAR DEFINITION =================================


const store = useStore()
const storeAuth = useStoreAuth()
const storeMessages = useStoreMessages()
const axios = inject('axios')
const style = {

    '--header-height': '70px',

    '--menu-width': '25%',

    '--aside-messages-width': '500px',
    '--domains-width': '120px',
    '--chats-width': '60%',

    '--messages-header-height': '60px',
    '--messages-footer-height': '50px',

    '--font-family': '"Comfortaa", sans-serif',

    '--color-bg': 'rgb(5, 5, 5)',
    '--color-bg-0': 'rgb(25, 25, 25)',
    '--color-bg-1': 'rgb(36, 36, 36)',
    '--color-bg-2': 'rgb(50, 50, 50)',
    '--color-bg-3': 'rgb(80, 80, 80)',
    '--color-0': 'rgb(140, 140, 140)',
    '--color-1': 'rgb(200, 200, 200)',
    '--color-2': 'rgb(240,240,240)',
    '--color-btn': 'var(--color-2)',
    '--color-btn-alt': 'var(--color-0)',
    '--color-btn-hvr': 'var(--color-bg-3)',
    '--color-btn-dlt': 'rgb(240, 200, 200)',
    '--color-btn-dlt-glow': 'rgba(240, 200, 200, 0.4)',
    '--color-text-0': 'var(--color-bg)',
    '--color-text-1': 'var(--color-bg-1)',
    '--color-text-2': 'var(--color-bg-3)',
    '--color-text-3': 'var(--color-2)',
    '--color-fcs-glow': 'rgba(240, 240, 240, 0.3)',
    '--color-err': 'rgb(240, 30, 30)',
    '--color-err-glow': 'rgba(240, 30, 30, 0.6)',
    '--color-shadow': 'rgba(5, 5, 5, 0.6)',
}

//================================= VALIDATION =================================

const profileValidationRules = computed(() => ({
    name: {
        required: helpers.withMessage('Required', required)
    },
    login: {
        required: helpers.withMessage('Required', required),
        minLength: helpers.withMessage('It must be at least 5 characters', minLength(5)),
        maxLength: helpers.withMessage('It must be less than 15 characters', maxLength(15))
    },
    password: {
        required: helpers.withMessage('Required', required),
        minLength: helpers.withMessage('It must be at least 8 characters', minLength(8)),
        maxLength: helpers.withMessage('It must be less than 20 characters', maxLength(20))
    },
}))

const profileValidator = useVuelidate(profileValidationRules, store.profileForm)

//================================= PROPS PROVIDING =================================

provide('profileValidator', profileValidator)

//================================= CALLS =================================

onMounted(() => {
    if (storeAuth.authJWT) {
        storeAuth.authRefresh()
            .then(() => {
                axios.defaults.headers.common["Authorization"] = `Bearer ${storeAuth.authJWT.token}`
                storeMessages.getServers()
                    .then((response) => {
                        if (!response || !response.data) {
                            console.warn('Empty server list')
                            storeMessages.servers = []
                        }
                        else if (store.choosenServer) {
                            storeMessages.getChannels({ server_id: store.choosenServer })
                        }
                    })
            })
            .catch((error) => {
                console.error(error)
                storeMessages.servers = []
            })
    } else {
        storeMessages.servers = []
    }
})

</script>


<template>
    <div :style="style">
        <header-layout></header-layout>
        <router-view />
    </div>
</template>


<style>
body {
    margin: 0 0;
    overflow: hidden;
}

#app>div {
    height: 100vh;
    width: 100vw;
    font-family: var(--font-family);
    font-weight: 400;
    font-style: normal;
    -webkit-tap-highlight-color: transparent;
}

[popover] {
    background-color: var(--color-bg-1);
    border: 2px solid var(--color-2);
    border-radius: 3%;
}

[popover]::backdrop {
    background-color: var(--color-shadow);
    backdrop-filter: blur(10px);
    position: relative;
    top: var(--header-height);
}

form {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}

input,
textarea {
    outline: none;
    height: 30px;
    width: 100%;
    background-color: var(--color-bg-0);
    color: var(--color-2);
    border-radius: 2px;
    border: 0;
    padding: 0 5px;
    box-sizing: border-box;
    font-family: inherit;
    z-index: 2;
}

textarea {
    padding-top: 7px;
    resize: none;
}

input::selection,
textarea::selection {
    background-color: var(--color-bg-3);
}

input:focus,
input.focus,
textarea:focus {
    box-shadow: 0 0 10px 1px var(--color-fcs-glow);
    outline: 2px solid var(--color-2);
}

.label-input {
    display: block;
    height: 0;
    width: 100%;
    font-size: 12px;
    color: var(--color-2);
    z-index: 1;
    text-align: left;
    position: relative;
    left: 1px;
    transition: transform 100ms;
}

input:focus+.label-input,
textarea:focus~.label-input,
input.focus+.label-input-date-picker,
.label-input-error {
    transform: translateY(-20px);
}

textarea:focus+.sym-counter {
    color: var(--color-2);
}

input::placeholder,
textarea::placeholder {
    font-size: smaller;
    opacity: 0.6;
}

textarea::placeholder {
    position: relative;
    top: 3px;
}

input:focus::placeholder,
textarea:focus::placeholder,
input.focus::placeholder {
    visibility: hidden;
}

.input-invalid,
.input-invalid:focus {
    color: var(--color-err);
    box-shadow: 0 0 10px 1px var(--color-err-glow);
    outline: 2px solid var(--color-err);
}

.input-invalid::placeholder,
.label-input-error {
    color: var(--color-err);
}

button {
    height: 30px;
    border: 0;
    border-radius: 4px;
    background-color: var(--color-btn);
    color: var(--color-bg);
    font-weight: 600;
    cursor: pointer;
    user-select: none;
    font-family: inherit;
}

button:hover {
    background-color: var(--color-bg-2);
    color: var(--color-2);
    outline: 2px solid var(--color-1);
    transition: box-shadow 150ms;
}

button:active {
    background-color: transparent;
    color: var(--color-2);
    outline: 2px solid var(--color-2);
    box-shadow: 0 0 15px 5px var(--color-fcs-glow);
}

button:disabled {
    background-color: var(--color-bg-2);
    color: var(--color-bg);
    pointer-events: none;
}

.btn-delete {
    background-color: var(--color-btn-dlt);
}

.btn-delete:hover {
    color: var(--color-btn-dlt);
    outline-color: var(--color-btn-dlt);
}

.btn-delete:active {
    color: var(--color-btn-dlt);
    outline-color: var(--color-btn-dlt);
    box-shadow: 0 0 15px 5px var(--color-btn-dlt-glow);
}

.btn-close {
    position: absolute;
    right: 10px;
    top: 10px;
}

.btn-clear-icon {
    background: none;
    padding: 0;
    height: fit-content;
    color: var(--color-2);
}

.btn-clear-icon:hover,
.btn-clear-icon:active {
    background: none;
    outline: none;
    box-shadow: none;
}

.title-form {
    width: 100%;
    font-size: 25px;
    margin: 10px 0 0 0;
    color: var(--color-text-3);
    text-transform: uppercase;
}

.title-form,
.container-input {
    display: flex;
    flex-flow: column-reverse;
    align-items: center;
    position: relative;
}

.container-btns-form {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin-bottom: 15px;
}
</style>