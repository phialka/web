import axios from '@/axios'
import { defineStore } from 'pinia'

export const useStoreFiles = defineStore('files', () => {

  //_________________________________ ACTIONS _________________________________

  async function uploadFile(file: any) {
    const response = await axios.post('/files', { file })
    return response
  }

  async function getFile(file_id: string) {
    const response = await axios.get(`/files/${file_id}`)
    return response
  }

  async function downloadFile(download_id: string) {
    const response = await axios.get(`/files/download/${download_id}`)
    return response
  }

  function getDownloadLink(download_id: string) {
    return axios.defaults.baseURL + `/files/download/${download_id}`
  }

  return {
    uploadFile,
    getFile,
    downloadFile,
    getDownloadLink
  }
})
