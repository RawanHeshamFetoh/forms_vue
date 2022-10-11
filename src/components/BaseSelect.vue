<template>
    
        <label v-if="label">{{label}}</label>
        <select
            :value="modelValue"
            class="field"
            @change="$emit('update:modelValue',$event.target.value)"
            >
            <option 
            v-for="option in options"
            :value="option"
            :key="option"
            :selected="option === modelValue"
            :id="uuid"
            :aria-describedby="error ? `${uuid}-error` : null"
            :aria-invalid="error ? true : false"
            :class="{error}"
            >{{ option }}</option>
        </select>

        <BaseErrorMessage
        v-if="error"
        :id="`${uuid}-error`"
        >
        {{error}}
        </BaseErrorMessage>

    <!--
        1-v-bind="{
        ...$attrs,
        onChange:($event)=>{$emit('update:modelValue',$event.target.value)}}" 

        2-@change="$emit('update:modelValue',$event.target.value)"
    
    -->
</template>
<script>
import BaseErrorMessage from './BaseErrorMessage.vue';
import UniqueId from '../Features/UniqueId'
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
        options: {
            type: Array,
            required: true
        },
        error:{
            type:String,
            default:""
        }
    },
    components: { BaseErrorMessage },
    setup(){
        const uuid=UniqueId().getID();
        return{
            uuid
        }
    }
}
</script>