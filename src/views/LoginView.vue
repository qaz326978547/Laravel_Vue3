<template>
    <div class=" max-w-[450px] bg-white text-black mx-auto mt-10 py-5 px-3 rounded-lg">
        <h2 class=" text-center font-bold text-[32px] my-3">LOGIN</h2>
        <form @submit.prevent="login">
            <div class="mb-3">
                <label for="email" class="block mb-2 text-sm font-medium  text-black">Your email</label>
                <input type="email" id="email" v-model="formData.email"
                    class=" p-2  bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com" required>
            </div>
            <div class="mb-3">
                <label for="password" class="block mb-2 text-sm font-medium  text-black">Your password</label>
                <input type="password" id="password" v-model="formData.password"
                    class="p-2 bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
            </div>

            <button type="submit"
                class="py-2  px-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { publicStore } from '@/stores/publicStore'
const store = publicStore()
const formData = ref({
    email: '',
    password: ''
})
const login = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await store.login(formData.value.email, formData.value.password)
    console.log(data)
}


onMounted(async () => {
    formData.value = {
        email: '',
        password: ''
    }
})



</script>