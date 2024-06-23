import { ref } from 'vue'
import { useEventListener } from './event_listener'

export function useMousePosition(element) {
    const mouseX = ref(0)
    const mouseY = ref(0)

    useEventListener(element, 'mousemove', (event) => {
        mouseX.value = event.pageX
        mouseY.value = event.pageY
    })

    return {mouseX, mouseY}
}

