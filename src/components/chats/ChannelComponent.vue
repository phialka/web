<script setup>
import { defineProps } from 'vue';

const props = defineProps(['channel'])

</script>


<template>
    <div class="channel">
        <img
            :src="props.channel.logo ? props.channel.logo.download_id : 'https://png.pngtree.com/png-clipart/20190925/original/pngtree-vector-server-icon-png-image_4974814.jpg'"
            class="channel-logo"
        >
    </div>
</template>


<style>
.channel {
    width: 80%;
    height: 100px;
    overflow: hidden;
}
</style>