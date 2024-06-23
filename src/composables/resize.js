import { ref } from 'vue'

export function useResize(element, event, directions, offset) {

    const res = ref(false)
    
    const mouseX = event.clientX
    const mouseY = event.clientY

    const el_rect = element.getBoundingClientRect()

    if ('right' in directions) {
        if (Math.abs(el_rect.right - mouseX) <= offset) {
            
        }
    }

}