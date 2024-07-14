<script setup></script>


<template>
    <div class="loading">
        <div class="loading-icon"></div>
    </div>
</template>


<style>
.loading {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loading-icon {
    height: 40px;
    width: 40px;
    background-color: transparent;
    border-radius: 50%;
    border-width: 4px;
    border-style: solid;
    border-top-color: var(--color-2);
    border-left-color: var(--color-2);
    border-right-color: rgba(0,0,0,0);
    border-bottom-color: rgba(0,0,0,0);
    transform: rotate(0);
    animation: 1s linear 0s infinite rotate-animation;
}

@keyframes rotate-animation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>