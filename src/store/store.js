import { reactive } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {


  //================================= STATE =================================

  const profileForm = reactive({
    name: "",
    description: "",
    birthdate: "",
    tag: "",
    login: "",
    password: "",
  });


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


  return {
    profileForm,
    profileFormReset,
  };
});
