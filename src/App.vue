<script setup lang="ts">

import HeaderLayout from '@/layouts/HeaderLayout.vue'

import { RouterView } from 'vue-router'


</script>

<template>
  <header-layout></header-layout>
  <main>
    <router-view />
  </main>
</template>

<style></style>
