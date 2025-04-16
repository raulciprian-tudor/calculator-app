<template>
    <div class="card rounded-3 border-0 shadow-lg bg-surface-custom text-default-custom">
        <div class="card-header border-0 bg-transparent">
            <p class="m-0 w-100 fs-3 fw-semibold">0 <!-- add dynamic value --></p>
        </div>
        <div class="card-body">
            <Keyboard />
        </div>
    </div>
</template>

<script setup lang="ts">
import Keyboard from '../keyboard/Keyboard.vue';

</script>

<style scoped lang="scss">
    .card {
        width: 29%;
    }
    p.fw-semibold {
        text-align: right;
    }
</style>