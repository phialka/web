<script setup lang="ts">

</script>

<template>
  <header>
    <div class="plate light menu-button" role="button"></div>
    <div class="plate light header-middle"></div>
    <div class="plate light profile"></div>
  </header>
</template>

<style scoped>
header {

  width: 100%;
  height: var(--m);

  margin-bottom: var(--plate-offset);

  display: grid;
  grid-template-areas: "menu-button header-middle profile";
  grid-template-columns: var(--m) 1fr var(--m);
  gap: var(--plate-offset);
}

.menu-button {
  grid-area: menu-button;
}

.header-middle {
  grid-area: header-middle;
}

.profile {
  grid-area: profile;
}
</style>
