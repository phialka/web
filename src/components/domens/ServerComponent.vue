<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['server', 'class'])
const emit = defineEmits(['serverChoose'])

</script>


<template>
    <div
        class="server"
        :class="props.class"
        @click="emit('serverChoose', props.server.server_id)"
    >
        <img
            :src="props.server.logo ? props.server.logo.download_id : 'https://png.pngtree.com/png-clipart/20190925/original/pngtree-vector-server-icon-png-image_4974814.jpg'"
            class="server-logo"
        >
        <span class="server-title">{{ props.server.title }}</span>
    </div>
</template>


<style>
.server {
    height: calc(0.5 * var(--domens-width));
    width: calc(0.5 * var(--domens-width));
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
        /* box-shadow 200ms, */
        transform 200ms,
        background-color 200ms;
}

.server.active {
    background-color: var(--color-2);
}

.server:hover {
    /* outline: 1px solid var(--color-2); */
    transform: scale(1.08);
    /* box-shadow: 0 0 5px 1px var(--color-fcs-glow); */
}

.server-logo {
    width: calc(0.3 * var(--domens-width));
    height: calc(0.3 * var(--domens-width));
    border-radius: 50%;
}

.server-title {
    width: calc(0.5 * var(--domens-width));
    height: 1em;
    font-size: 10px;
    font-weight: bolder;
    color: var(--color-text-3);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 2px;
}

.server.active .server-title {
    color: var(--color-text-0);
}
</style>