
export async function useCreateServer(requestBody, storeMessages) {
    return await storeMessages.createServer(requestBody)
}

export async function useGetServers(storeMessages) {
    return await storeMessages.getServers()
}

export async function useGetChannels(pathParams, storeMessages) {
    return await storeMessages.getChannels(pathParams)
}