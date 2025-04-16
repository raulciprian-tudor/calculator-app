<template>
    <div class="row my-1 d-flex align-items-center justify-content-center gap-2 text-default-custom text-center">
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p class="m-0 fs-5">7</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p class="m-0 fs-5">8</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p class="m-0 fs-5">9</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-primary-light-custom active-bg-primary-dark-custom">
            <p class="m-0 fs-5 fw-bold">×</p>
        </div>
    </div>
    <div class="row my-1 d-flex align-items-center justify-content-center gap-2 text-default-custom text-center">
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p class="m-0 fs-5">4</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p class="m-0 fs-5">5</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p class="m-0 fs-5">6</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-primary-light-custom active-bg-primary-dark-custom">
            <p class="m-0 fs-5 fw-bold">−</p>
        </div>
    </div>
    <div class="row my-1 d-flex align-items-center justify-content-center gap-2 text-default-custom text-center">
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p class="m-0 fs-5">1</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p class="m-0 fs-5">2</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p class="m-0 fs-5">3</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-primary-light-custom active-bg-primary-dark-custom">
            <p class="m-0 fs-5 fw-bold">+</p>
        </div>
    </div>
    <div class="row my-1 d-flex align-items-center justify-content-center gap-2 text-default-custom text-center">
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p class="m-0 fs-5">0</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-primary-light-custom active-bg-primary-dark-custom">
            <p class="m-0 fs-5 fw-bold">C</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-primary-light-custom active-bg-primary-dark-custom">
            <p class="m-0 fs-5 fw-bold"><font-awesome-icon icon="delete-left" /></p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm equal-button text-white">
            <p class="m-0 fs-5 fw-bold">=</p>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
    .col-3 {
        max-width: 22%;
    }

    .equal-button {
        background-color: #33af7c !important;
        &:hover {
            cursor: pointer;
        }
    }
</style>