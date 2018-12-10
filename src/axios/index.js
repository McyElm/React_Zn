import axios from 'axios'
import { Modal } from 'antd'
export default class Axios {
    static ajax(options){
        let loading;
        if (options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                // baseURL:'http://192.168.152.1:19201',
                timeout:60000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if (response.status == '200'){
                    let res = response.data;
                    if (res.code == '0'){
                        resolve(res);
                    }else{
                        Modal.info({
                            title:"暖虎云平台",
                            content:res.msg
                        })
                        reject(res);
                    }
                }else{
                    Modal.info({
                        title:"暖虎云平台",
                        content:"数据接收失败"
                    })
                    reject(response.data);
                }
            }).catch((error)=>{
                Modal.info({
                    title:"暖虎云平台",
                    content:error.message
                })
                reject(error.message);
            })
        });
    }
}