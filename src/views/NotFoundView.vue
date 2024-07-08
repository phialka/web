<script setup>

</script>


<template>
    <div class="not-found">
        <span>404 Похоже здесь ничего нет...</span>
    </div>
</template>


<style>
.not-found {
    position: relative;
    top: var(--header-height);
    height: calc(100vh - var(--header-height));
    background-color: var(--color-bg-2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.not-found span {
    color: var(--color-text-3);
    font-size: 30px;
}
</style>