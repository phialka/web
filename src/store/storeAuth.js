import { ref, inject } from "vue";
import { defineStore } from "pinia";

export const useStoreAuth = defineStore(
  "storeAuth",
  () => {
    const axios = inject("axios");

    //================================= STATE =================================

    const authJWT = ref();
    const profile = ref();

    //================================= GETTERS =================================

    //================================= ACTIONS =================================

    async function auth(requestBody) {
      const response = await axios.post("/auth", requestBody);
      authJWT.value = response.data;
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      return response.data;
    }

    async function authRefresh() {
      const response = await axios.post("/auth/refresh", {
        refresh_token: authJWT.value.refresh,
      });
      authJWT.value = response.data;
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      return response.data;
    }

    async function getMyProfile() {
      const response = await axios.get("/profile");
      profile.value = response.data;
      return response.data;
    }

    async function createProfile(requestBody) {
      const response = await axios.post("/profile", requestBody);
      return response.status;
    }

    return {
      authJWT,
      profile,
      auth,
      authRefresh,
      getMyProfile,
      createProfile,
    };
  },
  {
    persistedState: {
      includePaths: ["authJWT", "profile"],
    },
  }
);
