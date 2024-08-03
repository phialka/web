import axios from '@/axios'
import type { SearchUsers } from '@/types/types'
import { defineStore } from 'pinia'

export const useStoreUsers = defineStore(
  'users',
  () => {

    //_________________________________ ACTIONS _________________________________

    async function getUsersBySearch(query: SearchUsers) {
      const response = await axios.get('/users/search', {
        params: query
      })
      return response
    }

    async function getUserById(user_id: string) {
      const response = await axios.get(`/users/${user_id}`)
      return response
    }

    return {
      getUsersBySearch,
      getUserById
    }
  },
  {
    persistedState: {
      includePaths: ['accessJWT']
    }
  }
)
