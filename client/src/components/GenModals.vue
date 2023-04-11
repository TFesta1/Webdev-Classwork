<script setup lang="ts">
    import Modal from "@/components/Modal.vue";
    import { ref } from "vue";

    const isOpen = ref(false);

    const message = ref("Confirm delete?");



</script>

<template>
    <Modal :is-open="isOpen">

        <h1 class="title">{{ message }}</h1>
        <template #footer>
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
        </template>
    </Modal>
</template>

<style scoped>

</style>