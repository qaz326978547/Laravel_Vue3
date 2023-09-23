/* eslint-disable prefer-const */
import { defineStore } from "pinia";
import { ref, onMounted, computed } from "vue"; //toRef跟toRefs的差別是toRef只能轉換一個，toRefs可以轉換多個
import { $http, asyncDo, isResponseOK } from "@/composables/api/http";
import type { IResponse } from "@/type/api/public.ts";
import { useModal } from 'vue-final-modal'
import baseModal from '@/components/modals/BaseModal.vue'
import { useRouter } from 'vue-router'
import { useSessionStorage } from '@vueuse/core'
export const publicStore = defineStore('publicStore', () => {
    const router = useRouter()

    const user = ref<IResponse.User | null>(null);
    const isLogin = computed(() => !!token.value); //判斷token是否存在 有就是true 沒有就是false
    const token = ref<any>(null);
    const sessionToken: any = useSessionStorage('token', null);
    onMounted(() => {
        if (!sessionToken.value) return
        token.value = sessionToken.value
    })

    const login = async (email: string, password: string) => {
        const [err, result] = await asyncDo(
            $http<IResponse.Login>('post', '/login', { email, password }),
        );
        if (!isResponseOK(err, result)) { //如果錯誤就回傳null
            return null;
        }
        const { open } = useModal({
            component: baseModal,
            attrs: {
                content: result?.message,
            },
        })
        open()
        if (result?.user)
            user.value = result?.user;
        if (result?.user?.token) {
            sessionToken.value = result?.user?.token;
            token.value = result?.user?.token;
        }

        return result;
    }

    const logout = async () => {
        console.log('tokenStorage', token.value);

        if (!isLogin.value) {
            return null;
        }
        const [err, result] = await asyncDo(
            $http<{ message: string }>('post', `/logout?timestamp=${Date.now()}`))
        if (!isResponseOK(err, result)) { //如果錯誤就回傳null
            return null;
        }
        user.value = null;
        router.push({ name: 'home' })
        sessionStorage.removeItem('token');
        token.value = null;
        return result;
    }

    const init = async () => {
        const [err, result] = await asyncDo(
            $http<{ user: IResponse.User }>('get', '/init'),
        );
        if (!isResponseOK(err, result)) { //如果錯誤就回傳null
            return null;
        }
        if (result?.user)
            user.value = result?.user;
        console.log('store', user.value);

        if (result?.user?.token) {
            sessionToken.value = result?.user?.token;
            token.value = result?.user?.token;
        }
        return result;
    }


    return {
        sessionToken,
        token,
        init,
        login,
        logout,
        user,
        isLogin,
    };
});