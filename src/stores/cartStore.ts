import { defineStore } from "pinia";
import { ref, toRef } from "vue"; //toRef跟toRefs的差別是toRef只能轉換一個，toRefs可以轉換多個
import { $http, asyncDo, isResponseOK } from "@/composables/api/http";
import type { IResponse } from "@/type/api/public.ts";
import { useModal } from 'vue-final-modal'
import baseModal from '@/components/modals/BaseModal.vue'
import { useRouter } from 'vue-router'
import { loadingStore } from '@/composables/useLoading'

export const cartStore = defineStore('cartStore', () => {

    const router = useRouter()
    const { isLoading, loadingOn, loadingOff } = loadingStore()
    //將isLoading使用toRef轉換成ref

    const getCart = async () => {
        loadingOn()
        const [err, result] = await asyncDo(
            $http<IResponse.Cart>('get', '/cart'),
        );
        if (!isResponseOK(err, result)) { //如果錯誤就回傳null
            return null;
        }
        loadingOff()
        return result;
    }


    return {
        getCart
    }

})