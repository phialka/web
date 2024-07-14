<script setup>
import { useStoreMessages } from '@/store/storeMessages';
import ServerComponent from '@/components/domains/ServerComponent.vue'
import ChannelComponent from '@/components/chats/ChannelComponent.vue'
import CustomScrollbar from 'custom-vue-scrollbar';
import 'custom-vue-scrollbar/dist/style.css';
import { useRouter } from 'vue-router';
import { useStore } from '@/store/store';
import { useGetServers, useGetChannels } from '@/composables/servers';

const store = useStore()
const storeMessages = useStoreMessages()
const router = useRouter()

async function chooseServer(server_id) {
    store.choosenServer = server_id
    try {
        useGetChannels({ server_id: server_id }, storeMessages)
    }
    catch (error) {
        console.error(error)
    }
}

async function chooseChannel(channel_id) {
    store.choosenChannel = channel_id
}

setInterval(() => {
    useGetServers(storeMessages)
    useGetChannels({ server_id: store.choosenServer }, storeMessages)
}, 5000)

</script>


<template>
    <div class="view-messages">
        <aside class="aside-messages">
            <custom-scrollbar
                :style="{ height: '100%' }"
                :wrapper-style="{ height: '100%' }"
                :content-style="{ overflow: 'hidden' }"
                wrapper-class="section-servers-wrapper"
                content-class="section-servers-content"
                direction="vertical"
            >
                <button
                    class="btn-create-server"
                    @click="router.push({ name: 'new-server' })"
                >
                    <span>+</span>
                </button>
                <server-component
                    v-for="server in storeMessages.servers"
                    :key="server.server_id"
                    @server-choose="(server_id) => chooseServer(server_id)"
                    :class="(server.server_id == store.choosenServer) ? 'active' : ''"
                    :server="server"
                />
            </custom-scrollbar>
            <custom-scrollbar
                :style="{ height: '100%' }"
                :wrapper-style="{ height: '100%' }"
                :content-style="{ overflow: 'hidden' }"
                wrapper-class="section-chats-wrapper"
                content-class="section-chats-content"
                direction="vertical"
            >
                <channel-component
                    v-for="channel in storeMessages.channels"
                    :channel="channel"
                    :key="channel.channel_id"
                    @channel-choose="(channel_id) => chooseChannel(channel_id)"
                    :class="(channel.channel_id == store.choosenChannel) ? 'active' : ''"
                />
                <button class="btn-create-channel" @click="router.push({ name: 'new-channel' })">+</button>
            </custom-scrollbar>
        </aside>
        <section class="section-messages"></section>
    </div>
</template>


<style>
.view-messages {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
}

.aside-messages {
    width: var(--aside-messages-width);
    display: flex;
    flex-flow: row nowrap;
}

.section-servers-wrapper {
    width: var(--domains-width);
    height: 100%;
    background-color: var(--color-bg-0);
}

.section-servers-content {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 18px;
    padding: 20px 0;
}

.btn-create-server {
    height: calc(0.4 * var(--domains-width));
    width: calc(0.5 * var(--domains-width) + 20px);
    margin: 10px 0;
    box-shadow: 0 0 10px 2px var(--color-shadow);
    border-radius: 8%;
    font-size: 40px;
    transition: 
        transform 200ms,
        color 200ms,
        background-color 200ms;
    background-color: transparent;
    color: var(--color-text-2);
}

.btn-create-server:hover {
    outline: none;
    background-color: transparent;
    color: var(--color-text-3);
    transform: scale(1.08);
    transition: 
        transform 200ms,
        color 200ms,
        background-color 200ms;
}

.btn-create-server:active {
    outline: none;
    box-shadow: 0 0 10px 2px var(--color-shadow);
    background-color: transparent;
    color: var(--color-text-3);
    transform: scale(0.9);
}

.btn-create-server > span {
    display: block;
    height: 1em;
}

.section-chats-wrapper {
    width: calc(100% - var(--domains-width));
    background-color: var(--color-bg-1);
}

.section-chats-content {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 18px;
    padding: 20px 0;
}

.btn-create-channel {
    position: absolute;
    bottom: 20px;
    left: calc(var(--aside-messages-width) - var(--domains-width) - 80px);
    height: 60px;
    width: 60px;
    border-radius: 50%;
    font-size: 35px;
    transition: 
        transform 200ms;
}

.btn-create-channel:hover {
    background-color: var(--color-2);
    outline: none;
    color: var(--color-text-0);
    transform: scale(1.08);
    transition: 
        transform 200ms;
}

.btn-create-channel:active {
    background-color: var(--color-2);
    outline: none;
    color: var(--color-text-0);
    box-shadow: none;
    transform: scale(0.9);
}

.section-messages {
    flex: 1 0;
    background-color: var(--color-bg-3);
}

.scrollbar__thumbPlaceholder {
    display: none;
}
</style>