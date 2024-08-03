import axios from '@/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStoreAuth = defineStore(
  'auth',
  () => {
    //_________________________________ STATE _________________________________

    const accessJWT = ref('')

    //_________________________________ ACTIONS _________________________________

    async function auth(body: { username: string; userpass: string }) {
      const response = await axios.post('/auth', body)
      accessJWT.value = response.data
      setAuthorizationHeader()
      return response
    }

    function setAuthorizationHeader() {
      if (accessJWT.value) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessJWT.value}`
      }
    }

    function reset() {
      accessJWT.value = ''
      axios.defaults.headers.common['Authorization'] = null
    }

    return {
      accessJWT,
      auth,
      setAuthorizationHeader,
      reset
    }
  },
  {
    persistedState: {
      includePaths: ['accessJWT']
    }
  }
)
