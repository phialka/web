<script setup>
import { inject, ref } from 'vue';
import DataPickerComponent from './DataPickerComponent.vue';
import '@vuepic/vue-datepicker/dist/main.css'
import { useStoreAuth } from '@/store/storeAuth';
import { useSignUp } from '@/composables/profile';
import { useStore } from '@/store/store';
import LoadingComponent from './LoadingComponent.vue';


//================================= VAR DEFENITION =================================

const storeAuth = useStoreAuth()
const store = useStore()
const profileForm = store.profileForm
const loading = ref(false)


//================================= PROPS PROVIDING =================================


//================================= PROPS INJECTING =================================


const profileValidator = inject('profileValidator')


//================================= SIGN UP =================================

async function signUp() {
    loading.value = true
    useSignUp(profileForm, profileValidator, storeAuth)
        .catch((error) => {
            console.log('ahahahah')
            console.error(error)
        })
        .finally(function () {
            loading.value = false
            store.profileFormReset()
        })
}


//================================= METHODS =================================

function redirectPopover(event) {
    event.preventDefault()
    document.getElementById('popover-sign-up').hidePopover()
    document.getElementById('popover-sign-in').showPopover()
}


//================================= CALLS =================================

</script>


<template>
    <button
        class="button close button-clear-icon"
        popovertarget="popover-sign-up"
        popovertargetaction="hide"
    >✖</button>
    <div class="container sign-up">
        <form
            id="form-sign-up"
            @submit.prevent=""
        >
            <span class="title form">
                Sign up
            </span>
            <div class="container input">
                <input
                    type="text"
                    :class="profileValidator.name.$errors[0] ? 'input-invalid' : ''"
                    placeholder="Enter your name"
                    v-model="profileForm.name"
                >
                <label
                    class="label input"
                    :class="profileValidator.name.$errors[0] ? 'error' : ''"
                >{{ profileValidator.name.$errors[0] ? profileValidator.name.$errors[0].$message : 'Name' }}</label>
            </div>
            <div class="container input">
                <data-picker-component
                    v-model="profileForm.birthdate"
                    input-class="input date-picker"
                    form-id="form-sign-up"
                ></data-picker-component>
            </div>
            <div class="container input">
                <input
                    :class="profileValidator.login.$errors[0] ? 'invalid' : ''"
                    type="text"
                    placeholder="Enter your login"
                    v-model="profileForm.login"
                >
                <label
                    class="label input"
                    :class="profileValidator.login.$errors[0] ? 'error' : ''"
                >{{
                    profileValidator.login.$errors[0] ? profileValidator.login.$errors[0].$message : 'Login'
                }}</label>
            </div>
            <div class="container input">
                <input
                    :class="profileValidator.password.$errors[0] ? 'invalid' : ''"
                    type="password"
                    placeholder="Enter your password"
                    v-model="profileForm.password"
                >
                <label
                    class="label input"
                    :class="profileValidator.password.$errors[0] ? 'error' : ''"
                >{{
                    profileValidator.password.$errors[0] ? profileValidator.password.$errors[0].$message : 'Password'
                }}</label>
            </div>
            <div class="container buttons">
                <button
                    class="button redirect popover-form-sign-in"
                    @click="redirectPopover"
                >Sign in</button>
                <button
                    class="button submit form-sign-up"
                    @click="signUp"
                    :disabled="Boolean(!profileForm.name || !profileForm.birthdate || !profileForm.login || !profileForm.password)"
                >Sign up</button>
            </div>
            <loading-component v-if="loading"/>
        </form>
    </div>
</template>


<style>
.container.sign-up {
    height: 400px;
    width: 300px;
}

#form-sign-up {
    height: 100%;
}

#form-sign-up .container.input {
    width: 70%;
}

#form-sign-up .container.input>input {
    width: 100%;
}

#form-sign-up .container.buttons {
    width: 70%;
}
</style>