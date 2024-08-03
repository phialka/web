<script setup lang="ts">
import { useStore } from '@/stores/app';
import { useStoreMessages } from '@/stores/messages';
import { useRouter } from 'vue-router';


//================================= VAR DEFINITION =================================

const store = useStore()
const storeMessages = useStoreMessages()
const router = useRouter()
const maxLength = 200


//================================= METHODS =================================

async function createChannel() {
    try {
        const response = await storeMessages.createChannel({
            server_id: store.choosenServer,
            title: store.channelForm.title,
            description: store.channelForm.description
        })
        if (response) {
            router.back()
        }
    } catch (error) {
        console.log(error)
    }
}

</script>


<template>
    <div class="container form new-channel">
        <form
            id="form-new-channel"
            @submit.prevent="createChannel"
        >
            <span class="title form new-channel">
                New Channel
            </span>
            <div class="container input">
                <input
                    :class="false ? 'invalid' : ''"
                    type="text"
                    placeholder="Enter channel title"
                    v-model="store.channelForm.title"
                >
                <label
                    class="label input"
                    :class="false ? 'label-input-error' : ''"
                >{{ false ? '' : 'Title'
                    }}</label>
            </div>
            <div class="container input">
                <textarea
                    :class="false ? 'invalid' : ''"
                    type="text"
                    placeholder="Enter channel description"
                    :maxlength="maxLength"
                    v-model="store.channelForm.description"
                >
                </textarea>
                <span class="sym-counter">{{ `${store.channelForm.description.length}/${maxLength}` }}</span>
                <label
                    class="label input"
                    :class="false ? 'error' : ''"
                >{{ false ? '' : 'Description'
                    }}</label>
            </div>
            <div class="container buttons">
                <button
                    class="button new-channel cancel"
                    @click.prevent="router.back"
                >Cancel</button>
                <button class="button new-channel create">Create</button>
            </div>
        </form>
    </div>
</template>


<style scoped>

</style>