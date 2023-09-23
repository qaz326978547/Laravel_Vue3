import { defineStore } from 'pinia';
import { ref } from 'vue';
export const loadingStore = defineStore('loadingStore', () => {
    const isLoading = ref(false);

    const doWithLoading = async (fn: () => Promise<void>) => { //這個fn是一個function，他的回傳值是一個promise 
        //帶入promise的function，並且在執行前後開啟loading 等待執行完後關閉loading
        loadingOn();
        console.log('loadingOn', isLoading.value);

        await fn();
        loadingOff();
        console.log('loadingOff', isLoading.value);

    };

    const loadingOn = () => {
        isLoading.value = true;

    };
    const loadingOff = () => {
        isLoading.value = false;
    };
    return {
        isLoading,
        doWithLoading,
        loadingOn,
        loadingOff,

    };
});
