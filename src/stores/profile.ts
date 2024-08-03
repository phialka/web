import axios from '@/axios'
import type { EditProfile, CreateProfile, Profile } from '@/types/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStoreProfile = defineStore(
  'profile',
  () => {
    //_________________________________ STATE _________________________________

    const profile = ref<Profile>({
      user_id: '',
      name: '',
      description: '',
      tag: '',
      birthdate: '',
      photo: null
    })

    //_________________________________ ACTIONS _________________________________

    async function getProfile() {
      const response = await axios.get('/profile')
      profile.value = response.data
      return response
    }

    async function createProfile(body: CreateProfile) {
      const response = await axios.post('/profile', body)
      return response
    }

    async function editProfile(body: EditProfile) {
      const response = await axios.patch('/profile', body)
      return response
    }

    async function delProfile() {
      const response = await axios.delete('/profile')
      return response
    }

    async function setProfilePhoto(photo: any) {
      const response = await axios.put('/profile/photo', photo)
      return response
    }

    async function delProfilePhoto() {
      const response = await axios.delete('/profile/photo')
      return response
    }

    function resetProfile() {
      profile.value.user_id = ''
      profile.value.name = ''
      profile.value.description = ''
      profile.value.tag = ''
      profile.value.birthdate = ''
      profile.value.photo = null
    }

    function reset() {
      resetProfile()
    }

    return {
      profile,
      resetProfile,
      getProfile,
      createProfile,
      editProfile,
      delProfile,
      setProfilePhoto,
      delProfilePhoto,
      reset
    }
  },
  {
    persistedState: {
      includePaths: ['profile']
    }
  }
)
