<script setup>
import { inject } from 'vue';
import DataPickerComponent from './DataPickerComponent.vue';
import '@vuepic/vue-datepicker/dist/main.css'
import { useStoreAuth } from '@/store/storeAuth';
import { useSignUp } from '@/composables/profile';
import { useStore } from '@/store/store';


//================================= VAR DEFENITION =================================

const storeAuth = useStoreAuth()
const store = useStore()
const profileForm = store.profileForm


//================================= PROPS PROVIDING =================================


//================================= PROPS INJECTING =================================


const profileValidator = inject('profileValidator')


//================================= SIGN UP =================================

function signUp() {
    useSignUp(profileForm, profileValidator, storeAuth)
    store.profileFormReset()
}


//================================= METHODS =================================



//================================= CALLS =================================

</script>


<template>
    <button
        class="btn-close btn-clear-icon"
        popovertarget="popover-sign-up"
        popovertargetaction="hide"
    >✖</button>
    <div class="sign-up-content">
        <form
            id="form-sign-up"
            @submit.prevent=""
        >
            <span class="title title-form">
                Sign up
            </span>
            <div class="container-input">
                <input
                    type="text"
                    class="input-name"
                    :class="profileValidator.name.$errors[0] ? 'input-invalid' : ''"
                    placeholder="Enter your name"
                    v-model="profileForm.name"
                >
                <label
                    class="label-input"
                    :class="profileValidator.name.$errors[0] ? 'label-input-error' : ''"
                >{{ profileValidator.name.$errors[0] ? profileValidator.name.$errors[0].$message : 'Name' }}</label>
            </div>
            <div class="container-input">
                <data-picker-component
                    v-model="profileForm.birthdate"
                    input-class="input-date-picker"
                    form-id="form-sign-up"
                ></data-picker-component>
            </div>
            <div class="container-input">
                <input
                    class="input-login"
                    :class="profileValidator.login.$errors[0] ? 'input-invalid' : ''"
                    type="text"
                    placeholder="Enter your login"
                    v-model="profileForm.login"
                >
                <label
                    class="label-input"
                    :class="profileValidator.login.$errors[0] ? 'label-input-error' : ''"
                >{{
                    profileValidator.login.$errors[0] ? profileValidator.login.$errors[0].$message : 'Login'
                }}</label>
            </div>
            <div class="container-input">
                <input
                    class="input-password"
                    :class="profileValidator.password.$errors[0] ? 'input-invalid' : ''"
                    type="password"
                    placeholder="Enter your password"
                    v-model="profileForm.password"
                >
                <label
                    class="label-input"
                    :class="profileValidator.password.$errors[0] ? 'label-input-error' : ''"
                >{{
                    profileValidator.password.$errors[0] ? profileValidator.password.$errors[0].$message : 'Password'
                }}</label>
            </div>
            <div class="container-btns-form">
                <button class="btn-redirect-form-sign-in">Sign in</button>
                <button
                    class="btn-submit-form-sign-up"
                    @click="signUp"
                    :disabled="Boolean(!profileForm.name || !profileForm.birthdate || !profileForm.login || !profileForm.password)"
                >Sign up</button>
            </div>
        </form>
    </div>
</template>


<style>
.sign-up-content {
    height: 400px;
    width: 300px;
}

#form-sign-up {
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}

.container-input {
    width: 70%;
}
</style>