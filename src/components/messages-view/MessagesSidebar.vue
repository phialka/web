<script setup lang="ts">
</script>

<template>
  <aside class="sidebar">
    <div class="servers-container">
      <div class="plate light create-server-button" role="button"></div>
    </div>
    <div class="chats-container"></div>
  </aside>
</template>

<style scoped>
.sidebar {
    grid-area: sidebar;

    display: grid;
    grid-template-areas: 'servers-container chats-container';
    grid-template-columns: var(--m) 1fr;
    gap: var(--plate-offset);
}

.servers-container {
  grid-area: servers-container;

  display: flex;
  flex-flow: column;
  align-items: center;
  gap: var(--plate-offset)
}

.create-server-button {
  width: var(--s);
  height: var(--s);
}

.chats-container {
  grid-area: chats-container;
}
</style>