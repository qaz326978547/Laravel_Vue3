import { defineStore } from 'pinia'; //引入storeToRefs可以解構state資料
import { ref, type Ref } from 'vue';
// import type { ModalStore } from '@/composables/api/types';
import type { ModalStore } from '@/type/public';
export const modalStore = defineStore('modalStore', () => {
    const show = ref(false);
    const isLoading = ref(false);

    const modalData = ref<ModalStore>({
        title: '',
        content: '',
        btnText: '',
    });
    const setModalData = (data: ModalStore) => {
        modalData.value = data;
        show.value = true;
    };


    const openModal = () => {
        show.value = true;
    };

    const closeModal = () => {
        show.value = false;
    };
    const setLoading = (status: boolean) => {
        isLoading.value = status;
    };
    return {
        modalData,
        setModalData,
        closeModal,
        show,
        isLoading,
        setLoading,
        openModal,
    };
});
