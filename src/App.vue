<script setup>
  import HeaderComponent from './components/HeaderComponent.vue'
  import MessagesHeaderComponent from './components/messages/MessagesHeaderComponent.vue'
  import MessagesFooterComponent from './components/messages/MessagesFooterComponent.vue'
  // import { useStore } from 'vuex'

  // import { useMousePosition } from './composables/mouse_position'

  const styleControls = {

        '--header-height': '70px',

        '--domens-width': '100px',
        '--chats-width': '200px',

        '--messages-header-height': '60px',
        '--messages-footer-height': '50px',

        '--gray-3': 'rgb(20, 20, 20)',
        '--gray-2': 'rgb(30, 30, 30)',
        '--gray-1': 'rgb(50, 50, 50)',
        '--gray-0': 'rgb(80, 80, 80)',
  }
  // const {mouseX, mouseY} = useMousePosition(window)

  // const store = useStore()

  // store.dispatch('auth', {
  //   login: 'valentine',
  //   password: 'mega_backender228',
  // })

  // store.dispatch('authRefresh', {
  //   refresh: store.state.auth.refresh
  // })

</script>


<template>
  <div class="style-controls" :style="styleControls">
    <header-component></header-component>
    <div class="parent-area">
      <div class="domens-area"></div>
      <div class="chats-area"></div>
      <div class="messages-area">
        <messages-header-component></messages-header-component>
        <div class="messages"></div>
        <messages-footer-component></messages-footer-component>
      </div>
    </div>
  </div>
</template>


<style>

  body {
    margin: 0 0;
  }

  #app {
    height: 100vh;
  }

  .style-controls {
    height: 100%;
  }

  .parent-area {
    height: calc(100% - var(--header-height));
    display: flex;
  }

  .parent-area > div{
    height: 100%;
  }

  .domens-area {
    width: var(--domens-width);
    background-color: var(--gray-2);
  }

  .chats-area {
    width: var(--chats-width);
    background-color: var(--gray-1);
  }

  .messages-area {
    display: flex;
    flex-direction: column;
    width: calc(100% - (var(--chats-width) + var(--domens-width)));
    background-color: var(--gray-0);
  }

  .messages {
    height: calc(100% - 100px);
    width: 100%;
  }

</style>
