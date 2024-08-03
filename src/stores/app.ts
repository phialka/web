import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  //================================= STATE =================================

  const choosenServer = ref('')

  const choosenChannel = ref('')

  const profileForm = reactive({
    name: '',
    description: '',
    birthdate: '',
    tag: '',
    login: '',
    password: ''
  })

  const serverForm = reactive({
    title: '',
    description: ''
  })

  const channelForm = reactive({
    title: '',
    description: ''
  })

  //================================= GETTERS =================================

  //================================= ACTIONS =================================

  function choosenServerReset() {
    choosenServer.value = ''
  }

  function choosenChannelReset() {
    choosenChannel.value = ''
  }

  function profileFormReset() {
    profileForm.name = ''
    profileForm.description = ''
    profileForm.birthdate = ''
    profileForm.tag = ''
    profileForm.login = ''
    profileForm.password = ''
  }

  function serverFormReset() {
    serverForm.title = ''
    serverForm.description = ''
  }

  function channelFormReset() {
    channelForm.title = ''
    channelForm.description = ''
  }

  function reset() {
    choosenServerReset()
    choosenChannelReset()
    profileFormReset()
    serverFormReset()
    channelFormReset()
  }

  return {
    choosenServer,
    choosenServerReset,
    choosenChannel,
    choosenChannelReset,
    profileForm,
    // profileValidator,
    profileFormReset,
    serverForm,
    serverFormReset,
    channelForm,
    channelFormReset,
    reset
  }
})
