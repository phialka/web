<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['channel'])
const emit = defineEmits(['channel-choose'])

</script>


<template>
    <div class="channel" @click="emit('channel-choose', props.channel.channel_id)">
        <img
            :src="props.channel.logo ? props.channel.logo.download_id : 'https://png.pngtree.com/png-clipart/20190925/original/pngtree-vector-server-icon-png-image_4974814.jpg'"
            class="channel-logo"
        >
        <span class="channel-title">{{ props.channel.title }}</span>
        <span class="last-message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita error laborum maxime quos eos, tempore reiciendis. Laborum unde numquam dolores voluptatum cumque facilis ut, atque, vel commodi reprehenderit saepe praesentium!</span>
    </div>
</template>


<style>
.channel {
    width: calc(100% - 30px);
    height: calc(0.5 * var(--domains-width) + 20px);
    overflow: hidden;
    background-color: var(--color-bg-1);
    border-radius: 6px;
    box-shadow: 0 0 15px 0 var(--color-shadow);
    display: grid;
    grid-template-areas: 'logo title' 'logo message';
    grid-template-columns: 80px 1fr;
    align-items: center;
    justify-items: center;
    cursor: pointer;
    transition: 
        transform 200ms;
}

.channel:hover {
    transform: scale(1.03);
}

.channel:active {
    transform: scale(0.85);
}

.channel.active {
    background-color: var(--color-2);
    transform: scale(0.97);
}

.channel-logo {
    grid-area: logo;
    width: calc(0.35 * var(--domains-width));
    height: calc(0.35 * var(--domains-width));
    border-radius: 50%;
}

.channel-title {
    grid-area: title;
    align-self: self-end;
    justify-self: start;
    width: 90%;
    color: var(--color-text-3);
    font-size: calc(0.15 * var(--domains-width));
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.channel.active .channel-title {
    color: var(--color-text-0);
}

.last-message {
    grid-area: message;
    justify-self: start;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: var(--color-text-2);
    width: 90%;
    font-size: calc(0.1 * var(--domains-width));
}
</style>