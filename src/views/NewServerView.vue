<script setup>
import { useStore } from '@/store/store';
import { useCreateServer } from '@/composables/servers'
import { useStoreMessages } from '@/store/storeMessages';
import { useRouter } from 'vue-router';

const store = useStore()
const storeMessages = useStoreMessages()
const router = useRouter()
const maxLength = 200

async function createServer() {
    try {
        const response = await useCreateServer(store.serverForm, storeMessages)
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


<style>
.container.form.new-server {
    background-color: var(--color-bg-1);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

#form-new-server {
    height: 380px;
    width: 100%;
}

#form-new-server .container.input {
    width: 100%;
}

#form-new-server .container.input>input,
#form-new-server .container.input>textarea,
#form-new-server .container.input>label,
#form-new-server .container.buttons {
    width: 250px;
}

#form-new-server .container.input>textarea {
    height: calc(30px * 5);
}

.sym-counter {
    color: var(--color-text-2);
    font-size: 10px;
    z-index: 3;
    position: absolute;
    bottom: 3px;
    right: calc((100% - 250px) / 2 + 3px);
}
</style>