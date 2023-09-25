<template>
    <div class="bg-white  text-black w-full">
        <vue-element-loading :active="isLoading" spinner="bar-fade-scale" color="black"></vue-element-loading>
        <table class="w-full ">
            <tr class=" bg-gray-700">
                <th class="py-2 text-center w-1/2 text-xl font-bold text-white"> 商品名稱</th>
                <th class="py-2 text-center w-1/4 text-xl font-bold text-white"> 數量</th>
                <th class="py-2 text-center w-1/4 text-xl font-bold text-white"> 價格</th>
            </tr>
            <tr v-for="item in cartData?.products" :key="item.id">
                <td class=" text-center text-xl font-bold text-black p-3  w-1/2">
                    <div class="flex items-center  justify-center">
                        <img class=" w-1/3 " :src="item.image" alt="">
                        <p class="text-xl font-bold text-black">{{ item.title }}</p>
                    </div>
                </td>
                <td class="w-1/4 text-center">
                    <el-input-number v-model="item.quantity" :min="1" :max="item.stock" />
                </td>
                <td class="w-1/4 text-center">
                    <p class="text-2xl font-bold text-black">${{ item.price * item.quantity }}</p>
                </td>
            </tr>
        </table>
        <div class="mt-3  flex justify-between bg-slate-100 py-3">
            <p class="w-1/2 text-center text-2xl font-bold text-black">總數量:{{ cartData?.quantity }}</p>
            <p class="w-1/2 text-center text-2xl font-bold text-black">總價: ${{ cartData?.total }}</p>
        </div>

    </div>
</template>


<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { loadingStore } from '@/composables/useLoading'
import { cartStore } from '@/stores/cartStore'
import { ProductStore } from '@/stores/productStore'

import type { IResponse } from "@/type/api/public.ts";

const { doWithLoading, isLoading } = loadingStore()
const { getCart } = cartStore()
const { getProducts, getProductDetail } = ProductStore()



const cartData = ref<IResponse.Cart>()
const getCartData = () => {
    doWithLoading(async () => {
        const data = await getCart()
        if (!data) return
        cartData.value = data
        console.log(data)
    })
}



onMounted(async () => {
    getCartData()
})

</script>