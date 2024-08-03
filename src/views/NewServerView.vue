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

async function createServer() {
    try {
        const response = await storeMessages.createServer(store.serverForm)
        if (response) {
            router.back()
        }
    } catch (error) {
        console.error(error)
    }
}

</script>


<template>
    <div class="container form new-server">
        <form
            id="form-new-server"
            @submit.prevent="createServer"
        >
            <span class="title form new-server">
                New Server
            </span>
            <div class="container input">
                <input
                    :class="false ? 'invalid' : ''"
                    type="text"
                    placeholder="Enter server title"
                    v-model="store.serverForm.title"
                >
                <label
                    class="label input"
                    :class="false ? 'error' : ''"
                >{{ false ? '' : 'Title'
                    }}</label>
            </div>
            <div class="container input">
                <textarea
                    :class="false ? 'invalid' : ''"
                    type="text"
                    placeholder="Enter server description"
                    :maxlength="maxLength"
                    v-model="store.serverForm.description"
                >
                </textarea>
                <span class="sym-counter">{{ `${store.serverForm.description.length}/${maxLength}` }}</span>
                <label
                    class="label input"
                    :class="false ? 'error' : ''"
                >{{ false ? '' : 'Description'
                    }}</label>
            </div>
            <div class="container buttons">
                <button
                    class="button cancel new-server"
                    @click.prevent="router.back"
                >Cancel</button>
                <button class="button create new-server">Create</button>
            </div>
        </form>
    </div>
</template>


<style scoped>

</style>