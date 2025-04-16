import { defineStore } from 'pinia';

export const useCalculatorStore = defineStore('calculator', {
    state: () => ({
        display: '0',
    }),
    actions: {
        append(value: string) {
            if (this.display === '0' && !isNaN(Number(value))) {
                this.display = value
            } else {
                this.display += value
            }
        },
        clear() {
            this.display = '0';
        },
        calculate() {
            try {
                this.display = eval(this.display).toString();
            } catch {
                this.display = 'Error';
            }
        }
    }
})