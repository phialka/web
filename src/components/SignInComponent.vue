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
    useSignIn({ username: store.profileForm.login, userpass: store.profileForm.password }, profileValidator, useStoreAuth(), useStoreMessages(), store)
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
        class="button close button-clear-icon"
        popovertarget="popover-sign-in"
        popovertargetaction="hide"
    >✖</button>
    <div class="container form sign-in">
        <form
            id="form-sign-in"
            @submit.prevent="signIn"
        >
            <span class="title form sign-in">
                Sign in
            </span>
            <div class="container input">
                <input
                    class="input login"
                    :class="profileValidator.login.$errors[0] ? 'invalid' : ''"
                    type="text"
                    placeholder="Enter your login"
                    v-model="store.profileForm.login"
                >
                <label
                    class="label input"
                    :class="profileValidator.login.$errors[0] ? 'error' : ''"
                >{{ profileValidator.login.$errors[0] ? profileValidator.login.$errors[0].$message : 'Login'
                    }}</label>
            </div>
            <div class="container input">
                <input
                    class="input password"
                    :class="profileValidator.password.$errors[0] ? 'invalid' : ''"
                    type="password"
                    placeholder="Enter your password"
                    v-model="store.profileForm.password"
                >
                <label
                    class="label input"
                    :class="profileValidator.password.$errors[0] ? 'error' : ''"
                >{{ profileValidator.password.$errors[0] ? profileValidator.password.$errors[0].$message : 'Password'
                    }}</label>
            </div>
            <div class="container buttons">
                <button
                    class="button redirect popover-form-sign-up"
                    @click="redirectPopover"
                >Sign up</button>
                <button
                    class="button submit form sign-in"
                    :disabled="Boolean(!store.profileForm.login || !store.profileForm.password)"
                >Sign in</button>
            </div>
            <loading-component v-if="loading"/>
        </form>
    </div>
</template>


<style>
.container.sign-in {

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

#form-sign-in .container.input {
    width: 70%;
}

#form-sign-in .container.input>input {
    width: 100%;
}

#form-sign-in .container.buttons {
    width: 70%;
}
</style>