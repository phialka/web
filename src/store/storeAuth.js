import { ref } from "vue";
import { defineStore } from "pinia";
import { getMockProfile, createMockProfile } from "@/server-mock/profile";
import { authMock, authMockRefresh } from "@/server-mock/auth";

export const useStoreAuth = defineStore("storeAuth", () => {


  //================================= STATE =================================

  const authJWT = ref();
  const profile = ref();


  //================================= GETTERS =================================



  //================================= ACTIONS =================================

  async function auth(requestBody) {
    authJWT.value = authMock(requestBody);
  }

  async function authRefresh(requestBody) {
    authJWT.value = authMockRefresh(requestBody);
  }

  async function getProfileByJWT(requestHeaders) {
    profile.value = getMockProfile(requestHeaders);
  }

  async function createProfile(requestBody) {
    createMockProfile(requestBody);
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

