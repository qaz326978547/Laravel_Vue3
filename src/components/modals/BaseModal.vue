<template>
    <vue-final-modal class="flex justify-center items-center" @update:model-value="val => emit('update:modelValue', val)"
        content-class="base-modal bg-white  dark:border-gray-800 px-3 py-1 rouned">
        <vue-element-loading color="white" :active="useModal.isLoading"></vue-element-loading>
        <div class="modal-header  ps-3 py-1 ">
            <p class="header-title text-lg">{{ title ? title : '提示' }}</p>
            <button>
                <i class=" icon-close" @click="closeModel"></i>
            </button>

        </div>
        <div class="modal-ctn">
            <p>{{ content }}</p>
        </div>
        <div class="submit-btn-area">
            <button class="btn " @click="closeModel">{{ btnText ? btnText :
                '確認'
            }}</button>
        </div>
    </vue-final-modal>
</template>
  
<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'
import VueElementLoading from 'vue-element-loading';
import { modalStore } from '@/composables/useModal';
import { ref } from 'vue'
const useModal = modalStore()



const closeModel = () => {
    emit('update:modelValue', false)
}

defineProps<{
    title?: string
    content?: string
    btnText?: string
    //接收props 函式方法
    event?: () => void
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: boolean): void
}>()


</script>
  
<style lang="scss" >
.base-modal {
    .icon-close {
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" /></svg>') no-repeat center;
        background-size: contain;

    }

    i {
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 999999999;

    }

    .submit-btn-area .btn {
        background-color: #44bac1;
        color: #ffff;
        display: block;
        font-weight: bold;
        width: 100%;
    }



    :deep(.vfm__content) {
        border-radius: 0.25rem 0.25rem 0 0;

    }

    .base-modal {
        border-radius: 0.25rem 0.25rem 0 0;
    }

    .modal-ctn {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        width: 80vw;
        max-width: 300px;
        height: auto;
        overflow: auto;
        font-weight: bold;
        color: #212529;
        padding: 44px;
        line-height: 150%;
        font-size: 16px;
        letter-spacing: 1px;
        word-wrap: break-word;
        text-align: center;

        :deep(.md-container) {
            p {
                margin: 2rem 0 1rem;
            }

            h2 {
                font-size: 24px;
                margin: 2rem 0 1rem;

                &:first-child {
                    margin-top: 0;
                }
            }

            ol {
                margin: 1rem 0;
                padding-left: 20px;
                list-style: decimal;
            }
        }
    }

    .submit-btn-area {
        padding: 16px;
        text-align: center;
    }

    .modal-header {
        border-bottom: solid 2px #44bac1;
        height: 45px;
        color: #212529;
        font-size: 3.7vw;
        font-weight: bold;
        border-radius: 0.25rem 0.25rem 0 0;
    }

    @media (max-width: 768px) {
        :deep(.modal-header) {
            height: 45px;
            background-color: #354052;
        }

        :deep(.modal-ctn) {
            padding: 16px;
            max-height: 324px;
            font-size: 14px;

            .md-container p {
                margin: 15px;
            }
        }
    }
}
</style>
  