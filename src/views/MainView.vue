<script setup>
import { RouterView } from 'vue-router';

</script>


<template>
    <main>
        <router-view/>
    </main>
</template>


<style>
main {
    display: flex;
    position: relative;
    top: var(--header-height);
    height: calc(100% - var(--header-height));
    background-color: var(--color-bg-2);
}
</style>