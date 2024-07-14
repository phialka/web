
export async function useCreateChannel(requestBody, storeMessages) {
    return await storeMessages.createChannel(requestBody)
}