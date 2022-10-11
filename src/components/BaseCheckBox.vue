<template>
    <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue',$event.target.checked)"
    class="field"
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
            type: Boolean,
            default: false
        },
        error:{
            type:String,
            default:""
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