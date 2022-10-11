<template>
    <input
            type="radio"
            :checked="value === modelValue"
            :value="value"
            v-bind="$attrs"
            @change="$emit('update:modelValue',value)"
            :id="uuid"
            />
        <label v-if="label" :for="uuid">{{label}}</label>
        <BaseErrorMessage
        v-if="error"
        :id="`${uuid}-error`"
        >
        {{error}}
        </BaseErrorMessage>
</template>

<script>
    import UniqueId from '../Features/UniqueId';
import BaseErrorMessage from './BaseErrorMessage.vue';
export default {
    props: {
        label: {
            type: String,
            default: ""
        },
        modelValue: {
            type: [String, Number],
            default: ""
        },
        value: {
            type: [String, Number],
            required: true
        },
        error: {
            type: String,
            default: ""
        }
    },
    setup() {
        const uuid = UniqueId().getID();
        return {
            uuid
        };
    },
    components: { BaseErrorMessage }
}
</script>

