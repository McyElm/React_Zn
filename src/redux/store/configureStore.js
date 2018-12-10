import { createStore } from 'redux';
import reducer from './../reducer';
let userInfo = sessionStorage.getItem('userInfo')?JSON.parse(sessionStorage.getItem('userInfo')):{
        isLogIn:false,
        userName:'',
    };
const initialState = {
    menuIndex: null,//哪个菜单选中
    menuShowBool:{//顶部滚动条是否显示
        'isShow':'none',
    },
    userInfo:userInfo
}
const configureStore = () => createStore(reducer, initialState);
export default configureStore;