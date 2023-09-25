import { defineStore } from 'pinia'
import { $http, asyncDo, isResponseOK } from '@/composables/api/http'
import type { Product } from '@/type/api/product'
import { loadingStore } from '@/composables/useLoading';

export const ProductStore = defineStore('product', () => {

    const getProducts = async () => {
        const [err, result] = await asyncDo(
            $http<{ data: Product[] }>('get', '/product'),
        );
        if (!isResponseOK(err, result)) { //如果錯誤就回傳null
            return null;
        }
        return result?.data;
    }

    const getProductDetail = async (id: number) => {
        const [err, result] = await asyncDo(
            $http<{ data: Product }>('get', `/product/${id}`),
        );
        if (!isResponseOK(err, result)) { //如果錯誤就回傳null
            return null;
        }

        return result?.data;
    }


    return {
        getProducts,
        getProductDetail
    }

})