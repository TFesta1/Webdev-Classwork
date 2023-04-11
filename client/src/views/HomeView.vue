<script setup lang="ts">
<<<<<<< HEAD
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

    const isOpen = ref(false);

=======
>>>>>>> parent of d51e616 (Full Catchup Push)
</script>

<template>
  <main>
    <h1 class="title">
      This is our homepage
    </h1>

    <p>
        <button class="button" @click="isOpen = !isOpen">Open Modal</button>
    </p>

    <Modal v-model:is-open="isOpen" >
        <h1 class="title">Some Content in the slot</h1>
    </Modal>
  </main>
</template>
