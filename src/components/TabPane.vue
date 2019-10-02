<template>
    <section v-show="isActive">
        <h2>{{title}}</h2>
        <slot></slot>
    </section>
</template>
<script>
    export default {
        props: {
            title: String,
            id: String
        },
        data(){
            return {
                isSelected: this.isActive
            }
        },
        computed: {
            isActive(){
                return this.id == this.getActiveTabId;
            },
            getActiveTabId(){
                return this.$store.getters['getActiveTabId']
            }
        }
    }
</script>
