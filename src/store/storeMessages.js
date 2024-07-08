import { ref } from "vue";
import { defineStore } from "pinia";
import { getMockServers, getMockServer, getMockChannels } from "@/server-mock/server";

export const useStoreMessages = defineStore("storeMessages", () => {


  //================================= STATE =================================

    const servers = ref([])
    const chats = ref([])
    const channels = ref([])

  //================================= GETTERS =================================



  //================================= ACTIONS =================================

    async function getServers(requestHeaders) {
      servers.value =  getMockServers(requestHeaders)
    }

    async function getServer(requestBody) {
      return getMockServer(requestBody)
    }

    async function getChannels(requestBody) {
      channels.value = getMockChannels(requestBody)
    }

  return {
    servers,
    chats,
    channels,
    getServers,
    getServer,
    getChannels
  };
});