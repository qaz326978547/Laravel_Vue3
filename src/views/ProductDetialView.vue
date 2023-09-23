<template>
    <div class="  bg-white py-4 px-4 mt-5">
        <div class="flex ">
            <img class=" w-1/2 object-contain " :src="product?.image" alt="">
            <div class="w-1/2  text-black flex flex-col justify-between py-3">
                <div>
                    <h2 class=" text-3xl lg:text-5xl font-bold">{{ product?.title }}</h2>
                    <p class=" text-xl lg:text-3xl my-3 font-bold">${{ product?.price }}</p>
                    <p>{{ product?.description }}</p>
                </div>
                <button class="btn block" @click=" open()">加入購物車</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { publicStore } from '@/stores/publicStore'
import cartModal from '@/components/modals/CartModal.vue'
import { ModalsContainer, useModal } from 'vue-final-modal'
import { loadingStore } from '@/composables/useLoading'
import { ProductStore } from '@/stores/productStore'
import type { Product } from '@/type/api/product'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const { open, close } = useModal({
    component: cartModal,
    attrs: {
        title: 'Hello World!',
        onClose() {
            close()
        },
    },
    slots: {
        default: '<p>ModalBottom: The content of the modal</p>',
    },
})

const route = useRoute()
const productStore = ProductStore()
const loading = loadingStore()
const { doWithLoading, isLoading } = loading
const product = ref<Product>()
const getProductDetial = () => {
    doWithLoading(async () => {
        const data = await productStore.getProductDetail(route.params.id)
        if (data) {
            product.value = data
        }
    })
}
onMounted(() => {
    getProductDetial()
})




</script>