<template>
    <p
    class="errorMessage"
    :id="id"
    aria-live="assertive"
    >
        <slot></slot>
    </p>
</template>

<script>
export default {
    props:{
        id:{
            type:[String,Number],
            required:true
        }
    }
}
</script>