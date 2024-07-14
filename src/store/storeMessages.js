import { inject, ref } from "vue";
import { defineStore } from "pinia";
import { getMockServer } from "@/server-mock/server";

export const useStoreMessages = defineStore("storeMessages", () => {
  const axios = inject("axios");

  //================================= STATE =================================

  const servers = ref([]);
  const chats = ref([]);
  const channels = ref([]);

  //================================= GETTERS =================================

  //================================= ACTIONS =================================

  async function getServers() {
    const response = await axios.get("/servers");
    servers.value = response.data;
    return response;
  }

  async function getServer(requestBody) {
    return getMockServer(requestBody);
  }

  async function createServer(requestBody) {
    const response = await axios.post("/servers", requestBody);
    return response;
  }

  async function getChannels(pathParams) {
    const response = await axios.get(
      `/servers/${pathParams.server_id}/getChannels`
    );
    channels.value = response.data
    return response;
  }

  async function createChannel(requestBody) {
    const response = await axios.post("/channels", requestBody);
    channels.value = response.data
    return response;
  }

  return {
    servers,
    chats,
    channels,
    getServers,
    getServer,
    createServer,
    getChannels,
    createChannel,
  };
});
