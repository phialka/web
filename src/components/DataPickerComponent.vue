<script setup>
import { ref, defineProps, defineModel } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';


const props = defineProps(['inputClass', 'formId'])
const valueDataPicker = defineModel({ required: true })
const flow = ref(['month', 'year', 'calendar'])



</script>

<template>
    <vue-date-picker
        v-model="valueDataPicker"
        :enable-time-picker="false"
        :ui="{ menu: 'menu-date-picker' }"
        :flow="flow"
        :hide-navigation="['month', 'year']"
        :transitions="false"
        format="dd.MM.yyyy"
        model-type="yyyy-MM-dd"
        auto-apply
        dark
    >
        <template #dp-input="{ value, onInput, onEnter, onTab, onClear, onBlur, onKeypress, onPaste, isMenuOpen }">
            <div class="container-input data-picker">
                <input
                    type="text"
                    placeholder="Enter your birth date"
                    :form="props.formId"
                    :value="value"
                    :class="(isMenuOpen ? 'focus ' : '') + 'input__dp ' + props.inputClass"
                    @input="onInput"
                    @keydown.enter="onEnter"
                    @keydown.tab="onTab"
                    @clear="onClear"
                    @blur="onBlur"
                    @keypress="onKeypress"
                    @paste="onPaste"
                />
                <label class="label-input label-input-date-picker">Birthdate</label>
            </div>
        </template>
    </vue-date-picker>
</template>


<style>
.menu-date-picker button,
.menu-date-picker button:hover,
.menu-date-picker button:active {
    outline: 0 !important;
    box-shadow: none !important;
    background-color: transparent;
}

.menu-date-picker .dp__month_year_select:hover {
    background-color: var(--color-bg-2) !important;
}

.dp__input_wrap {
    display: flex;
    justify-content: center;
}

.container-input.data-picker {
    width: 100% !important;
}

.input__dp {
    caret-color: transparent;
}

.dp__theme_dark {
    --dp-background-color: var(--color-bg-1) !important;
    --dp-text-color: #fff !important;
    --dp-hover-color: var(--color-bg-2) !important;
    --dp-hover-text-color: #fff !important;
    --dp-hover-icon-color: #959595 !important;
    --dp-primary-color: var(--color-2) !important;
    --dp-primary-disabled-color: var(--color-1) !important;
    --dp-primary-text-color: var(--color-text-0) !important;
    --dp-secondary-color: var(--color-bg-3) !important;
    --dp-border-color: transparent !important;
    --dp-menu-border-color: var(--color-2) !important;
    --dp-border-color-hover: #aaaeb7 !important;
    --dp-border-color-focus: #aaaeb7 !important;
    --dp-disabled-color: var(--color-bg-3) !important;
    --dp-disabled-color-text: #d0d0d0 !important;
    --dp-scroll-bar-background: #212121 !important;
    --dp-scroll-bar-color: #484848 !important;
    --dp-success-color: #00701a !important;
    --dp-success-color-disabled: #428f59 !important;
    --dp-icon-color: #959595 !important;
    --dp-danger-color: #e53935 !important;
    --dp-marker-color: #e53935 !important;
    --dp-tooltip-color: #3e3e3e !important;
    --dp-highlight-color: rgb(0 92 178 / 20%) !important;
    --dp-range-between-dates-background-color: var(--dp-hover-color, #484848) !important;
    --dp-range-between-dates-text-color: var(--dp-hover-text-color, #fff) !important;
    --dp-range-between-border-color: var(--dp-hover-color, #fff) !important;

    --dp-font-family: "LXGW WenKai Mono TC", monospace;
}
</style>