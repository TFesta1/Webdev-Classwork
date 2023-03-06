<script setup lang="ts">

</script>

<template>
    <div class="flyout">
        Flyout
        <slot />
    </div>
</template>

<style scoped>

    .flyout {
        position: fixed;
        top: 52px;
        right: -18rem; /* since the width is 20, we'll make it -18 here to slightly hide it */
        width: 20rem;
        height: calc(100vh - 52px); /*vh = viewport height */
        background-color: #fff;
        border-left: 1px solid #ccc;
        z-index: 100;
        transition: right 0.5s ease-in-out;
    }
    .flyout:hover {
        right: 0;
    }
</style>