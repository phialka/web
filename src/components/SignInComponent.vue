<script setup>
import { inject } from 'vue'
import { useSignIn } from '@/composables/profile'
import { useStore } from '@/store/store';
import { useStoreAuth } from '@/store/storeAuth';


//================================= VAR DEFENITION =================================

const storeAuth = useStoreAuth()
const store = useStore()
const profileForm = store.profileForm

//================================= VALIDATION =================================

const profileValidator = inject('profileValidator')


//================================= SIGN IN =================================

function signIn() {
    useSignIn({ login: profileForm.login, password: profileForm.password }, profileValidator, storeAuth)
}

function redirectPopover(event) {
    event.preventDefault()
    document.getElementById('popover-sign-in').hidePopover()
    document.getElementById('popover-sign-up').showPopover()
}

</script>


<template>
    <button
        class="btn-close btn-clear-icon"
        popovertarget="popover-sign-in"
        popovertargetaction="hide"
    >✖</button>
    <div class="sign-in-content">
        <form
            id="form-sign-in"
            @submit.prevent="signIn"
        >
            <span class="title title-form">
                Sign in
            </span>
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
                >{{ profileValidator.login.$errors[0] ? profileValidator.login.$errors[0].$message : 'Login'
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
                >{{ profileValidator.password.$errors[0] ? profileValidator.password.$errors[0].$message : 'Password'
                    }}</label>
            </div>
            <div class="container-btns-form">
                <button
                    class="btn-redirect-form-sign-up"
                    @click="redirectPopover"
                >Sign up</button>
                <button
                    class="btn-submit-form-sign-in"
                    :disabled="Boolean(!profileForm.login || !profileForm.password)"
                >Sign in</button>
            </div>
        </form>
    </div>
</template>


<style>
.sign-in-content {

    --input-horizontal-pad: 4px;
    --form-height: 250px;
    --button-margin: 20px;

    height: 250px;
    width: 300px;
    display: flex;
    align-items: center;
}

#form-sign-in {
    height: var(--form-height);
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}

.btn-close {
    position: absolute;
    right: 10px;
    top: 10px;
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
}

.label-input {
    width: calc(70% + 10px);
}

.container-input>input {
    width: 100%;
}

.container-btns-form {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 15px;
}
</style>