<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useSignOut } from '@/composables/profile';
import SignInComponent from '@/components/SignInComponent.vue';
import SignUpComponent from '@/components/SignUpComponent.vue';
import { useStoreAuth } from '@/store/storeAuth';



const storeAuth = useStoreAuth()
const isOpenSignIn = ref(false)
const isOpenSignUp = ref(false)

const menuPopover = ref()
const menuButton = ref()

const isMounted = ref(false)



function signOut() {
  useSignOut(storeAuth)
}

function onOpenMenu(event) {
  if (isMounted.value) {
    const classList = event.target.classList
    const isBtnClick = classList.contains('btn-menu') || classList.contains('menu-line')

    if (isBtnClick) {
      if (!menuPopover.value.checkVisibility()) {
        menuButton.value.classList.add('active')
      }
      else {
        menuButton.value.classList.remove('active')
      }
    }
    else if (!classList.contains('menu-popover')) {
      menuButton.value.classList.remove('active')
    }
  }
}

window.addEventListener('click', onOpenMenu)


onMounted(() => {
  isMounted.value = true
})

onUnmounted(() => {
  isMounted.value = false
})


</script>


<template>
  <header>
    <button
      class="btn-menu btn-clear-icon"
      ref="menuButton"
      popovertarget="menu-popover"
    >
      <div class="menu-line"></div>
      <div class="menu-line"></div>
      <div class="menu-line"></div>
      <div class="menu-line"></div>
    </button>
    <div
      id="menu-popover"
      class="menu-popover"
      ref="menuPopover"
      popover
    ></div>
    <span class="title title-header">
      Phialka
    </span>
    <div class="container-profile">
      <img
        class="photo-profile"
        v-if="storeAuth.profile"
        :src="storeAuth.profile.photo ? storeAuth.profile.photo.download_id : 'https://forum-ru-cdn.warthunder.com/optimized/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1_2_1000x1000.jpeg'"
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
  z-index: 100;
  box-shadow: 0 1px 8px 0 var(--color-shadow)
}

.btn-menu {
  grid-area: menu;
  height: calc(0.5 * var(--header-height)) !important;
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
  transition: transform 400ms;
}

.menu-line:nth-child(2) {
  position: absolute;
  width: calc(0.5 * var(--header-height));;
}

.btn-menu.active .menu-line:nth-child(1) {
  transform: scale(0);
}

.btn-menu.active .menu-line:nth-child(2) {
  transform: rotate(45deg);
}

.btn-menu.active .menu-line:nth-child(3) {
  transform: rotate(-45deg);
}

.btn-menu.active .menu-line:nth-child(4) {
  transform: scale(0);
}

#menu-popover:popover-open {
  margin: 0;
  transform: translateX(0);
}

#menu-popover::backdrop {
  background-color: transparent;
  backdrop-filter: none;
}

#menu-popover {
  margin: 0;
  top: var(--header-height);
  height: calc(100% - var(--header-height));
  width: var(--menu-width);
  border: 0;
  border-radius: 0;
  background-color: var(--color-bg-0);
  /* box-shadow: 2px 0 8px 0 var(--color-shadow); */
  z-index: 99;
  transform: translateX(-100%);

  transition:
    transform 300ms,
    overlay 300ms allow-discrete,
    display 300ms allow-discrete;
}

@starting-style {
  #menu-popover:popover-open {
    transform: translateX(-100%);
  }
}

.title-header {
  grid-area: title;
  color: var(--color-2);
  font-size: calc(0.5 * var(--header-height));
  height: 1em;
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
  outline: 2px solid var(--color-2);
  outline-offset: -2px;
  overflow: hidden;
}

#popover-sign-up {
  overflow: visible;
}
</style>