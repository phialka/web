import { reactive, ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {


  //================================= STATE =================================

  const choosenServer = ref()

  const choosenChannel = ref()

  const profileForm = reactive({
    name: "",
    description: "",
    birthdate: "",
    tag: "",
    login: "",
    password: "",
  });

  const serverForm = reactive({
    title: "",
    description: "",
  })

  const channelForm = reactive({
    title: "",
    description: "",
  })


  //================================= GETTERS =================================



  //================================= ACTIONS =================================

  function profileFormReset() {
    profileForm.name = ''
    profileForm.description = ''
    profileForm.birthdate = ''
    profileForm.tag = ''
    profileForm.login = ''
    profileForm.password = ''
  }

  function serverFormReset() {
    serverForm.title = '',
    serverForm.description = ''
  }

  function channelFormReset() {
    channelForm.title = '',
    channelForm.description = ''
  }


  return {
    choosenServer,
    choosenChannel,
    profileForm,
    serverForm,
    channelForm,
    profileFormReset,
    serverFormReset,
    channelFormReset
  };
});
