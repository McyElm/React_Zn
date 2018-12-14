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
            var dataType=null;
            var methodType=null;
            if(options.type&&options.type.toLowerCase()=="post"){
                dataType="data";
                methodType="post";
            }else{
                dataType="params";
                methodType="get";
            }
            if(options.type && options.type.toLowerCase()=="post"&&options.data && options.data.params){
                axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
                var params = new URLSearchParams();
                for (const key in options.data.params) {
                    if (options.data.params[key]!== undefined && Object.hasOwnProperty.call(options.data.params, key)) {
                        params.append(key, options.data.params[key]);
                    }
                }
                options.data.params=params;
            }
            axios({
                url:options.url,
                method:methodType,
                timeout:60000,
                [dataType]: (options.data && options.data.params) || ''
            }).then((response)=>{
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if (response.status == '200'){
                    let res = response.data;
                    if (res.code == '0'||res.code == 0){
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