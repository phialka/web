import axios from '@/axios'
import type {
  Channel,
  Chat,
  CreateChannel,
  CreateServer,
  EditChannel,
  GetMessages,
  Message,
  Search,
  Server
} from '@/types/types'
import { responseStatus } from '@/constants/constants'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStoreMessages = defineStore('messages', () => {
  //_________________________________ STATE _________________________________

  const servers = ref<Server[] | []>([])
  const channels = ref<Channel[] | []>([])
  const chats = ref<Chat[] | []>([])

  //_________________________________ ACTIONS _________________________________

  function serversReset() {
    servers.value = []
  }

  function channelsReset() {
    channels.value = []
  }

  function chatsReset() {
    chats.value = []
  }

  function reset() {
    serversReset()
    channelsReset()
    chatsReset()
  }

  async function getServers() {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.get('/servers')
    servers.value = response.data
    return response
  }

  async function createServer(body: CreateServer) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.post('/servers', body)
    return response
  }

  async function getServersBySearch(query: Search) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.get('/servers/search', {
      params: query
    })
    return response
  }

  async function editServer(server_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.patch(`/servers/${server_id}`)
    return response
  }

  async function delServer(server_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.delete(`/servers/${server_id}`)
    return response
  }

  async function getServer(server_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.get(`/servers/${server_id}`)
    return response
  }

  async function setServerLogo(server_id: string, photo: any) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.put(`/servers/${server_id}/logo`, {
      logo: photo
    })
    return response
  }

  async function delServerLogo(server_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.delete(`/servers/${server_id}/logo`)
    return response
  }

  async function getServerMembers(server_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.get(`/servers/${server_id}/getMembers`)
    return response
  }

  async function joinServer(server_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.post(`/servers/${server_id}/join`)
    return response
  }

  async function inviteToServer(server_id: string, user_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.post(`/servers/${server_id}/join`, {
      user_id
    })
    return response
  }

  async function getChannels(server_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.get(`/servers/${server_id}/getChannels`)
    channels.value = response.data
    return response
  }

  async function createChannel(body: CreateChannel) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.post('/channels', body)
    return response
  }

  async function editChannel(channel_id: string, body: EditChannel) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.patch(`/channels/${channel_id}`, body)
    return response
  }

  async function getChannel(channel_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.get(`/channels/${channel_id}`)
    return response
  }

  async function delChannel(channel_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.delete(`/channels/${channel_id}`)
    return response
  }

  async function setChannelPhoto(channel_id: string, photo: any) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.put(`/channels/${channel_id}/logo`, {
      logo: photo
    })
    return response
  }

  async function delChannelPhoto(channel_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.delete(`/channels/${channel_id}/logo`)
    return response
  }

  async function getChats() {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.get('/private')
    chats.value = response.data
    return response
  }

  async function getChat(chat_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.get(`/private/${chat_id}`)
    return response
  }

  async function delChat(chat_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.delete(`/private/${chat_id}`)
    return response
  }

  async function sendMessageToChannel(channel_id: string, body: Message) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.post(`/channels/${channel_id}/sendMessage`, body)
    return response
  }

  async function getChannelMessages(channel_id: string, query: GetMessages | null = null) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.get(`/channels/${channel_id}/messages`, {
      params: query
    })
    return response
  }

  async function sendMessageToUser(user_id: string, body: Message) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.post(`/users/${user_id}/sendMessage`, body)
    return response
  }

  async function getChatMessages(chat_id: string, query: GetMessages | null = null) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.delete(`/private/${chat_id}`, {
      params: query
    })
    return response
  }

  async function getMessage(message_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.get(`/messages/${message_id}`)
    return response
  }

  async function delMessage(message_id: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.delete(`/messages/${message_id}`)
    return response
  }

  async function editMessage(message_id: string, content: string) {
    if (!axios.defaults.headers.common['Authorization']) return responseStatus.NOT_AUTHORIZED
    const response = await axios.patch(`/messages/${message_id}`, {
      content
    })
    return response
  }

  return {
    servers,
    serversReset,
    getServers,
    createServer,
    getServersBySearch,
    editServer,
    delServer,
    getServer,
    setServerLogo,
    delServerLogo,
    getServerMembers,
    joinServer,
    inviteToServer,
    channels,
    channelsReset,
    getChannels,
    createChannel,
    editChannel,
    getChannel,
    delChannel,
    setChannelPhoto,
    delChannelPhoto,
    chats,
    chatsReset,
    getChats,
    getChat,
    delChat,
    sendMessageToChannel,
    getChannelMessages,
    sendMessageToUser,
    getChatMessages,
    getMessage,
    editMessage,
    delMessage,
    reset
  }
})
