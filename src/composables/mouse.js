import { ref, onMounted, onUnmounted } from 'vue'


export function useClick() {

  const click = ref(false)

  function update() {
    click.value = !click.value
  }

  onMounted(() => window.addEventListener('click', update))
  onUnmounted(() => window.removeEventListener('click', update))

  return { click }
}

