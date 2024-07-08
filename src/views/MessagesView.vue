<script setup>
import { ref } from 'vue';
import { useStoreMessages } from '@/store/storeMessages';
import { useStoreAuth } from '@/store/storeAuth';
import ServerComponent from '@/components/domens/ServerComponent.vue'
import ChannelComponent from '@/components/chats/ChannelComponent.vue'
import CustomScrollbar from 'custom-vue-scrollbar';
import 'custom-vue-scrollbar/dist/style.css';

const storeMessages = useStoreMessages()
const storeAuth = useStoreAuth()
const currentServer = ref()

storeMessages.getServers(storeAuth.authJWT)

currentServer.value = storeMessages.servers[0].server_id

console.log(storeMessages.servers)

function chooseServer(server_id) {
    currentServer.value = server_id
    storeMessages.getChannels({server_id: server_id})
}

chooseServer(currentServer.value)

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
                <server-component
                    v-for="server in storeMessages.servers"
                    :key="server.server_id"
                    @server-choose="(server_id) => chooseServer(server_id)"
                    :class="(server.server_id == currentServer) ? 'active' : ''"
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
                />
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
    width: var(--domens-width);
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

.section-chats-wrapper {
    width: calc(100% - var(--domens-width));
    background-color: var(--color-bg-3);
}

.section-chats-content {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
}

.section-messages {
    flex: 1 0;
}

.scrollbar__thumbPlaceholder {
    display: none;
}
</style>