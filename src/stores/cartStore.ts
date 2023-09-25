import { defineStore } from "pinia";
import { ref, toRef } from "vue"; //toRef跟toRefs的差別是toRef只能轉換一個，toRefs可以轉換多個
import { $http, asyncDo, isResponseOK } from "@/composables/api/http";
import type { IResponse } from "@/type/api/public.ts";
import { useModal } from 'vue-final-modal'
import baseModal from '@/components/modals/BaseModal.vue'
import { useRouter } from 'vue-router'
import { loadingStore } from '@/composables/useLoading'

export const cartStore = defineStore('cartStore', () => {


    const getCart = async () => {
        const [err, result] = await asyncDo(
            $http<IResponse.Cart>('get', '/cart'),
        );
        if (!isResponseOK(err, result)) { //如果錯誤就回傳null
            return null;
        }
        return result;
    }

    const updateCart = async (prodcut_id: number, quantity: number) => {
        const [err, result] = await asyncDo(
            $http<IResponse.Cart>('post', `/cart/add`, { prodcut_id: prodcut_id, quantity: quantity }),
        );
        if (!isResponseOK(err, result)) { //如果錯誤就回傳null
            return null;
        }
        console.log(result);

        return result;
    }

    return {
        getCart,
        updateCart
    }

})