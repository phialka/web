import { ref } from "vue";
import { defineStore } from "pinia";
import { mockProfileGet, mockProfileCreate } from "@/server-mock/profile";
import { mockAuth, mockAuthRefresh } from "@/server-mock/auth";

export const useStoreAuth = defineStore("storeAuth", () => {


  //================================= STATE =================================

  const authJWT = ref();
  const profile = ref();


  //================================= GETTERS =================================



  //================================= ACTIONS =================================

  async function auth(requestBody) {
    authJWT.value = mockAuth(requestBody);
  }

  async function authRefresh(requestBody) {
    authJWT.value = mockAuthRefresh(requestBody);
  }

  async function getProfileByJWT(requestHeaders) {
    profile.value = mockProfileGet(requestHeaders);
  }

  async function createProfile(requestBody) {
    mockProfileCreate(requestBody);
  }


  return {
    authJWT,
    profile,
    auth,
    authRefresh,
    getProfileByJWT,
    createProfile,
  };
});

