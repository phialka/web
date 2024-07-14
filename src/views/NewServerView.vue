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
    <div class="new-server">
        <form id="new-server-form" @submit.prevent="createServer">
            <span class="title title-form">
                New Server
            </span>
            <div class="container-input">
                <input
                    :class="false ? 'input-invalid' : ''"
                    type="text"
                    placeholder="Enter server title"
                    v-model="store.serverForm.title"
                >
                <label
                    class="label-input"
                    :class="false ? 'label-input-error' : ''"
                >{{ false ? '' : 'Title'
                    }}</label>
            </div>
            <div class="container-input">
                <textarea
                    :class="false ? 'input-invalid' : ''"
                    type="text"
                    placeholder="Enter server description"
                    :maxlength="maxLength"
                    v-model="store.serverForm.description"
                >
                </textarea>
                <span class="sym-counter">{{ `${store.serverForm.description.length}/${maxLength}` }}</span>
                <label
                    class="label-input"
                    :class="false ? 'label-input-error' : ''"
                >{{ false ? '' : 'Description'
                    }}</label>
            </div>
            <div class="container-btns-form">
                <button
                    class="btn-new-server-cancel btn-delete"
                    @click.prevent="router.back"
                >Cancel</button>
                <button
                    class="btn-new-server-create"
                >Create</button>
            </div>
        </form>
    </div>
</template>


<style>
.new-server {
    background-color: var(--color-bg-1);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

#new-server-form {
    height: 380px;
    width: 100%;
}

#new-server-form .container-input {
    width: 100%;
}

#new-server-form .container-input>input,
#new-server-form .container-input>textarea,
#new-server-form .container-input>label,
#new-server-form .container-btns-form {
    width: 250px;
}

#new-server-form .container-input>textarea {
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