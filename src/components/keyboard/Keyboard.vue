<template>
    <div class="row my-1 d-flex align-items-center justify-content-center gap-2 text-default-custom text-center">
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p @click="handleKeyStroke('7')" class="m-0 fs-5">7</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p @click="handleKeyStroke('8')" class="m-0 fs-5">8</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p @click="handleKeyStroke('9')" class="m-0 fs-5">9</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-primary-light-custom active-bg-primary-dark-custom">
            <p @click="handleKeyStroke('*')" class="m-0 fs-5 fw-bold">*</p>
        </div>
    </div>
    <div class="row my-1 d-flex align-items-center justify-content-center gap-2 text-default-custom text-center">
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p @click="handleKeyStroke('4')" class="m-0 fs-5">4</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p @click="handleKeyStroke('5')" class="m-0 fs-5">5</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p @click="handleKeyStroke('6')" class="m-0 fs-5">6</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-primary-light-custom active-bg-primary-dark-custom">
            <p @click="handleKeyStroke('-')" class="m-0 fs-5 fw-bold">-</p>
        </div>
    </div>
    <div class="row my-1 d-flex align-items-center justify-content-center gap-2 text-default-custom text-center">
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p @click="handleKeyStroke('1')" class="m-0 fs-5">1</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p @click="handleKeyStroke('2')" class="m-0 fs-5">2</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p @click="handleKeyStroke('3')" class="m-0 fs-5">3</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-primary-light-custom active-bg-primary-dark-custom">
            <p @click="handleKeyStroke('+')" class="m-0 fs-5 fw-bold">+</p>
        </div>
    </div>
    <div class="row my-1 d-flex align-items-center justify-content-center gap-2 text-default-custom text-center">
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-accent-light-custom active-bg-accent-dark-custom">
            <p @click="handleKeyStroke('0')" class="m-0 fs-5">0</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-primary-light-custom active-bg-primary-dark-custom">
            <p @click="handleKeyStroke('/')" class="m-0 fs-5 fw-bold">/</p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm hover-bg-primary-light-custom active-bg-primary-dark-custom">
            <p @click="handleKeyStroke('←')" class="m-0 fs-5 fw-bold"><font-awesome-icon icon="delete-left" /></p>
        </div>
        <div class="col-3 p-1 py-2 rounded m-0 shadow-sm equal-button text-white">
            <p @click="handleKeyStroke('=')" class="m-0 fs-5 fw-bold">=</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useCalculatorStore } from '@/stores/calculator';

    //instantiate the store
    const calculatorStore = useCalculatorStore();

    const handleKeyStroke = (key: string) => {
        console.log('Key pressed:', key)

        if (key === '=') return calculatorStore.calculate();
        if (key === '/') return calculatorStore.append('/')
        if (key === '←') return calculatorStore.display = calculatorStore.display.slice(0, -1)
        if (key === '*') return calculatorStore.append('*')
        if (key === '-') return calculatorStore.append('-')
        if (key === '+') return calculatorStore.append('+')
        for (let i = 0; i < 10; i++) {
            if (key === i.toString()) return calculatorStore.append(i.toString())
        }
    }

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