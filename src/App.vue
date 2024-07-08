<script setup>
import { computed, provide } from 'vue';
import HeaderLayout from '@/layouts/HeaderLayout.vue';
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, minLength, maxLength } from '@vuelidate/validators';
import { useRouter, RouterView } from 'vue-router';
import { useStore } from './store/store';


//================================= VAR DEFINITION =================================

const router = useRouter()
router

const store = useStore()
const profileForm = store.profileForm
const style = {

    '--header-height': '70px',

    '--menu-width': '25%',

    '--aside-messages-width': '400px',
    '--domens-width': '120px',
    '--chats-width': '60%',

    '--messages-header-height': '60px',
    '--messages-footer-height': '50px',

    '--font-family': '"Comfortaa", sans-serif',

    '--color-bg': 'rgb(5, 5, 5)',
    '--color-bg-0': 'rgb(25, 25, 25)',
    '--color-bg-1': 'rgb(30, 30, 30)',
    '--color-bg-2': 'rgb(50, 50, 50)',
    '--color-bg-3': 'rgb(80, 80, 80)',
    '--color-0': 'rgb(140, 140, 140)',
    '--color-1': 'rgb(200, 200, 200)',
    '--color-2': 'rgb(240,240,240)',
    '--color-btn': 'var(--color-2)',
    '--color-btn-alt': 'var(--color-0)',
    '--color-btn-hvr': 'var(--color-bg-3)',
    '--color-text-0': 'var(--color-bg)',
    '--color-text-1': 'var(--color-bg-1)',
    '--color-text-2': 'var(--color-0)',
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

const profileValidator = useVuelidate(profileValidationRules, profileForm)

//================================= PROPS PROVIDING =================================

provide('profileValidator', profileValidator)


//================================= CALLS =================================


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

input {
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
}

input::selection {
    background-color: var(--color-bg-3);
}

input:focus,
input.focus {
    box-shadow: 0 0 10px 1px var(--color-fcs-glow);
    outline: 2px solid var(--color-2);
}

.label-input {
    display: block;
    height: 0;
    width: 100%;
    font-size: 12px;
    color: var(--color-2);
    z-index: -1;
    text-align: left;
    position: relative;
    transition: transform 100ms;
}

input:focus+.label-input,
input.focus+.label-input-date-picker,
.label-input-error {
    transform: translateY(-20px);
}

input::placeholder {
    font-size: smaller;
    opacity: 0.6;
}

input:focus::placeholder,
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
    background-color: var(--color-bg);
    color: var(--color-2);
    outline: 2px solid var(--color-2);
    box-shadow: 0 0 15px 5px var(--color-fcs-glow);
}

button:disabled {
    background-color: var(--color-bg-2);
    color: var(--color-bg);
    pointer-events: none;
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
</style>