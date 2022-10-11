<template>
    
        <label v-if="label" :for="uuid" >{{label}}</label>
        <input 
        v-bind="$attrs"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue',$event.target.value)"
        class="field"
        :id="uuid"
        :aria-describedby="error?`${uuid}-error`:null"
        :aria-invalid="error?true:null"
        >

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