<script setup>
    import {inject} from 'vue'


    const popUp = inject('popUp')


</script>


<template>
    <dialog
    class="pop-up"
    ref="popUp"
    >
    <slot></slot>
    </dialog>
</template>


<style>

    .pop-up {
        background-color: var(--color-bg-1);
        border: 2px solid var(--color-2);
        border-radius: 10px;
        padding: 10px;
        overflow: visible;
    }

    .pop-up::backdrop {
        backdrop-filter: blur(10px);
    }

</style>