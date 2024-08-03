<script setup lang="ts">
import MessagesSidebar from '@/components/messages-view/MessagesSidebar.vue'
import MessagesArea from '@/components/messages-view/MessagesArea.vue';

</script>


<template>
    <div class="messages-view">
        <messages-sidebar></messages-sidebar>
        <messages-area></messages-area>
    </div>
</template>


<style scoped>
.messages-view {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-areas: "sidebar messages-area";
    grid-template-columns: 25rem 1fr;
}
</style>