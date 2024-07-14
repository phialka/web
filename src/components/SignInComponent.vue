<script setup>
import { inject, ref } from 'vue'
import { useSignIn } from '@/composables/profile'
import { useStore } from '@/store/store';
import { useStoreAuth } from '@/store/storeAuth';
import LoadingComponent from '@/components/LoadingComponent.vue'
import { useStoreMessages } from '@/store/storeMessages';


//================================= VAR DEFENITION =================================


const store = useStore()
const loading = ref(false)

//================================= VALIDATION =================================

const profileValidator = inject('profileValidator')


//================================= SIGN IN =================================

async function signIn() {
    loading.value = true
    useSignIn({ username: store.profileForm.login, userpass: store.profileForm.password }, profileValidator, useStoreAuth(), useStoreMessages())
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            loading.value = false
        })
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
                    v-model="store.profileForm.login"
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
                    v-model="store.profileForm.password"
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
                    :disabled="Boolean(!store.profileForm.login || !store.profileForm.password)"
                >Sign in</button>
            </div>
            <loading-component v-if="loading" />
        </form>
    </div>
</template>


<style>
.sign-in-content {

    --input-horizontal-pad: 4px;
    --button-margin: 20px;

    height: 250px;
    width: 300px;
    display: flex;
    align-items: center;
}

#form-sign-in {
    height: 100%;
    width: 100%;
}

#form-sign-in .container-input {
    width: 70%;
}

#form-sign-in .container-input>input {
    width: 100%;
}

#form-sign-in .container-btns-form {
    width: 70%;
}
</style>