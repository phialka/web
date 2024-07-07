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
    grid-area: main;
    display: flex;
    background-color: var(--color-bg-3);
}
</style>