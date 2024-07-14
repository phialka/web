<script setup>
import { useStore } from '@/store/store';
import { useRouter } from 'vue-router';
import { useStoreMessages } from '@/store/storeMessages';
import { useCreateChannel } from '@/composables/channels';

const store = useStore()
const storeMessages = useStoreMessages()
const router = useRouter()
const maxLength = 200

async function createChannel() {
    try {
        const response = await useCreateChannel({
            server_id: store.choosenServer,
            title: store.channelForm.title,
            description: store.channelForm.description
        }, storeMessages)
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
        <form id="form-new-channel" @submit.prevent="createChannel">
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
                <button
                    class="button new-channel create"
                >Create</button>
            </div>
        </form>
    </div>
</template>


<style>
.container.form.new-channel {
    background-color: var(--color-bg-1);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

#form-new-channel {
    height: 380px;
    width: 100%;
}

#form-new-channel .container.input {
    width: 100%;
}

#form-new-channel .container.input>input,
#form-new-channel .container.input>textarea,
#form-new-channel .container.input>label,
#form-new-channel .container.buttons {
    width: 250px;
}

#form-new-channel .container.input>textarea {
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