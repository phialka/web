<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['server', 'class'])
const emit = defineEmits(['serverChoose'])

</script>


<template>
    <div
        class="container server"
        :class="props.class"
        @click="emit('serverChoose', props.server.server_id)"
    >
        <img
            :src="props.server.logo ? props.server.logo.download_id : 'https://png.pngtree.com/png-clipart/20190925/original/pngtree-vector-server-icon-png-image_4974814.jpg'"
            class="logo server"
        >
        <span class="title server">{{ props.server.title }}</span>
    </div>
</template>


<style>
.container.server {
    height: calc(0.5 * var(--domains-width));
    width: calc(0.5 * var(--domains-width));
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 8px;
    background-color: var(--color-bg-0);
    padding: 12px 10px 8px 10px;
    border-radius: 8%;
    box-shadow: 0 0 10px 3px var(--color-shadow);
    cursor: pointer;
    transition:
        transform 200ms,
        background-color 200ms;
}
.container.server:hover {
    transform: scale(1.15);
}

.container.server:active {
    transform: scale(0.75);
}

.container.server.active {
    background-color: var(--color-2);
    transform: scale(0.95);
}

.container.server.active:hover {
    background-color: var(--color-2);
    transform: scale(0.95);
}


.logo.server {
    width: calc(0.3 * var(--domains-width));
    height: calc(0.3 * var(--domains-width));
    border-radius: 50%;
}

.title.server {
    width: calc(0.5 * var(--domains-width));
    height: 1em;
    font-size: 10px;
    font-weight: bolder;
    text-align: center;
    color: var(--color-text-3);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 2px;
    transition: color 200ms;
}

.container.server.active .title.server {
    color: var(--color-text-0);
}
</style>