
<template>
  <div class=" my-12">
    <vue-element-loading :active="loading.isLoading" spinner="bar-fade-scale" color="black"></vue-element-loading>
    <div class="flex flex-wrap ">
      <div v-for="product in products" :key="product.id" class="w-full md:w-1/2 lg:w-1/3 p-2 xl:w-1/4 ">
        <!-- @ts-ignore -->
        <!-- eslint-disable-next -->
        <router-link :to="{ name: 'productDetial', params: { id: product.id } }">
          <div class="bg-white rounded-lg">
            <div>
              <img class="lg:h-[300px] h-[350px] rounded-lg" :src="product.image" alt="">
              <div class="p-4 flex items-center">
                <div class=" mr-auto">
                  <h2 class="text-2xl font-bold text-gray-800">{{ product.title }}</h2>
                  <p class="mt-2 text-gray-600">{{ product.description }}</p>
                </div>
                <p class="mt-2 text-gray-600">數量剩餘:{{ product.quantity }}</p>
              </div>
            </div>
            <div class="flex justify-between items-center px-4 py-2 bg-gray-700 rounded-b-lg">
              <h3 class="text-xl font-bold text-white">${{ product.price }}</h3>
              <button class="px-3 py-1 bg-gray-800 text-sm text-white font-semibold rounded">Add to Cart</button>
            </div>
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ProductStore } from '@/stores/productStore'
import { ref, onMounted } from 'vue';
import type { Product } from '@/type/api/product'
import { loadingStore } from '@/composables/useLoading'

const products = ref<Product[]>([]);
const testloading = ref(false)
const loading = loadingStore()
const store = ProductStore()
const { doWithLoading, isLoading } = loading
const getProducts = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  doWithLoading(async () => {
    const data = await store.getProducts()
    if (data) {
      products.value = data
    }
  })
}

onMounted(async () => {
  getProducts()
})

</script>