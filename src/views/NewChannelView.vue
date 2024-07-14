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
    <div class="new-channel">
        <form id="new-channel-form" @submit.prevent="createChannel">
            <span class="title title-form">
                New Channel
            </span>
            <div class="container-input">
                <input
                    :class="false ? 'input-invalid' : ''"
                    type="text"
                    placeholder="Enter channel title"
                    v-model="store.channelForm.title"
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
                    placeholder="Enter channel description"
                    :maxlength="maxLength"
                    v-model="store.channelForm.description"
                >
                </textarea>
                <span class="sym-counter">{{ `${store.channelForm.description.length}/${maxLength}` }}</span>
                <label
                    class="label-input"
                    :class="false ? 'label-input-error' : ''"
                >{{ false ? '' : 'Description'
                    }}</label>
            </div>
            <div class="container-btns-form">
                <button
                    class="btn-new-channel-cancel btn-delete"
                    @click.prevent="router.back"
                >Cancel</button>
                <button
                    class="btn-new-channel-create"
                >Create</button>
            </div>
        </form>
    </div>
</template>


<style>
.new-channel {
    background-color: var(--color-bg-1);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

#new-channel-form {
    height: 380px;
    width: 100%;
}

#new-channel-form .container-input {
    width: 100%;
}

#new-channel-form .container-input>input,
#new-channel-form .container-input>textarea,
#new-channel-form .container-input>label,
#new-channel-form .container-btns-form {
    width: 250px;
}

#new-channel-form .container-input>textarea {
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