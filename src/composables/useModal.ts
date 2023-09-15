import { defineStore } from 'pinia'; //引入storeToRefs可以解構state資料
import { ref, type Ref } from 'vue';
// import type { ModalStore } from '@/composables/api/types';
import type { ModalStore } from '@/type/public';
export const modalStore = defineStore('modalStore', () => {
    const show = ref(false);
    const isLoading = ref(false);

    const modalData: Ref<ModalStore> = ref({
        title: '',
        content: '',
        btnText: '',
    });
    const open = () => {
        show.value = true;
    };
    const openModal = async (data: ModalStore) => {
        modalData.value = data;
        show.value = true;
    };
    const close = () => {
        show.value = false;
    };
    const setLoading = (status: boolean) => {
        isLoading.value = status;
    };
    return {
        modalData,
        openModal,
        close,
        show,
        open,
        isLoading,
        setLoading,
    };
});
