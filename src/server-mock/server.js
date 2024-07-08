import { servers } from "./data_base";
import { channels } from "./data_base";


export function getMockServers(requestHeaders) {
    requestHeaders

    return servers
}

export function getMockServer(requestBody) {
    return servers.find((server) => server.server_id == requestBody.server_id)
}

export function getMockChannels(requestBody) {
    return channels.filter((channel) => channel.server_id == requestBody.server_id)
}