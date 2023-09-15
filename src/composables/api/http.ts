import axios, { type AxiosRequestConfig, type Method } from 'axios';
// import { modalStore } from '@/composables/modalStore';
// import i18n from '@/plugins/i18n';
// import { publicStore } from '@/stores/api/public';
export const apiBaseUrl = `/api`; // api基礎路徑
// const { t: $t } = i18n.global;
const apiTimeoutSec = 60;

const ajax = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: true, // 跨域請求時是否需要使用凭证
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    timeout: apiTimeoutSec * 1000, // 請求超時時間
});

// 請求攔截器
export async function $http<T = any>(method: Method, url: string, ...payload: any[]): Promise<T> {
    const requestData: AxiosRequestConfig = { url, method }; // 請求參數

    if (method == 'get' || method == 'GET') {
        // get請求
        requestData.params = payload[0]; // get請求參數
    } else {
        requestData.data = payload[0]; // post請求參數
        requestData.params = payload[1]; // post請求參數
    }
    try {
        const response = await ajax.request(requestData);
        return response.data;
    } catch (err: any) {
        if (err.response) {
            throw err.response;
        }
        throw err;
    }
}

export function isNetworkError(err: { isAxiosError: any; response: any }) { // 判斷是否為網路錯誤
    return !!err.isAxiosError && !err.response;
}


export function asyncDo<T, E = any>(promise: Promise<T>): Promise<[undefined, T] | [E, undefined]> { // 非同步執行
    return promise.then<[undefined, T]>((res) => [undefined, res]).catch((err) => [err, undefined]);
}


export function isResponseOK(
    err: any,
    result: any,
    alertError: boolean = false
) {
    if (err && !result) {
        console.warn(err, result);
        if (err.status == 401) {
            appEmitter.emit(AppEvents.Logout);
        }
        if (alertError) {
            const errData = err.data;
            let message = '';
            if (typeof errData == 'string') {
                message = errData;
            } else {
                message = errData.message;
                try {
                    Object.values(errData.errors || {}).forEach((e) => {
                        message += `<br>${e[0]}`;
                    });
                } catch (err) {
                    console.error(err);
                }
            }
            appEmitter.emit(AppEvents.Modal, message);
        }
        return false;
    }
    return true;
}
