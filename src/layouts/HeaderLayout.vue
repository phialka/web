<script setup>
import { ref } from 'vue';
import { useSignOut } from '@/composables/profile';
import SignInComponent from '@/components/SignInComponent.vue';
import SignUpComponent from '@/components/SignUpComponent.vue';
import { useStoreAuth } from '@/store/storeAuth';



const storeAuth = useStoreAuth()
const isOpenSignIn = ref(false)
const isOpenSignUp = ref(false)



function signOut() {
  useSignOut(storeAuth)
}



</script>


<template>
  <header>
    <div class="menu">
      <div class="menu-line"></div>
      <div class="menu-line"></div>
      <div class="menu-line"></div>
    </div>
    <span class="title title-header">
      Phialka
    </span>
    <div class="container-profile">
      <img
        class="photo-profile"
        v-if="storeAuth.profile"
        :src="storeAuth.profile.photo ? storeAuth.profile.photo.download_id : 'https://cdn-icons-png.flaticon.com/512/4794/4794936.png'"
        @click="signOut"
      >
      <button
        class="btn-sign-in"
        v-if="!storeAuth.profile"
        popovertarget="popover-sign-in"
      >
        Sign in
      </button>
    </div>
    <div
      id="popover-sign-in"
      @beforetoggle="isOpenSignIn = !isOpenSignIn"
      popover
    >
      <sign-in-component></sign-in-component>
    </div>
    <div
      id="popover-sign-up"
      @beforetoggle="isOpenSignUp = !isOpenSignUp"
      popover
    >
      <sign-up-component></sign-up-component>
    </div>
  </header>
</template>


<style>
header {
  background-color: var(--color-bg-0);
  position: fixed;
  width: 100vw;
  height: var(--header-height);
  display: grid;
  grid-template-areas: 'menu title profile';
  grid-template-columns: calc(1.5 * var(--header-height)) 1fr calc(1.5 * var(--header-height));
  align-items: center;
  justify-items: center;
  box-shadow: 0 1px 8px 0 var(--color-shadow)
}

.menu {
  grid-area: menu;
  height: calc(0.5 * var(--header-height));
  width: calc(0.5 * var(--header-height));
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  cursor: pointer;
}

.menu-line {
  height: 3px;
  border-radius: 1px;
  width: 100%;
  background-color: var(--color-2);
}

.title-header {
  grid-area: title;
  color: var(--color-2);
  font-size: 40px;
  justify-self: start;
  margin: 0 20px;
  user-select: none;
}

.container-profile {
  grid-area: profile;
  cursor: pointer;
  height: calc(0.8 * var(--header-height));
  display: flex;
  align-items: center;
  user-select: none;
}

.btn-sign-in {
  text-align: center;
  cursor: pointer;
}

.photo-profile {
  height: calc(0.8 * var(--header-height));
  width: calc(0.8 * var(--header-height));
  border-radius: 100%;
  outline: 3px solid var(--color-2);
  outline-offset: -3px;
  overflow: hidden;
}

#popover-sign-up {
  overflow: visible;
}
</style>