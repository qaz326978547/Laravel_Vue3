import { defineStore } from 'pinia';
import { ref } from 'vue';
export const loadingStore = defineStore('loadingStore', () => {
    const isLoading = ref(false);

    const loadingOn = () => {
        isLoading.value = true;
    };
    const loadingOff = () => {
        isLoading.value = false;
    };
    return {
        isLoading,
        loadingOn,
        loadingOff,
    };
});
