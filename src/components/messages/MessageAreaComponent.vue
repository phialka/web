<script setup>
    import MessagesHeaderComponent from './MessagesHeaderComponent.vue'
    import MessagesFooterComponent from './MessagesFooterComponent.vue'

</script>


<template>
    <div class="messages-area">
        <messages-header-component></messages-header-component>
        <div class="messages"></div>
        <messages-footer-component></messages-footer-component>
    </div>
</template>


<style>
    .messages-area {
        display: flex;
        flex-direction: column;
        width: calc(100% - (var(--chats-width) + var(--domens-width)));
        background-color: var(--color-bg-3);
    }

    .messages {
        height: calc(100% - 100px);
        width: 100%;
    }
</style>