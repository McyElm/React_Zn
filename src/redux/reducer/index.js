/**
 * reducer
 */
import { type } from '../action';
const reducer = (state, action) => {
    switch (action.type) {
        case type.SWITCH_Index:
            // sessionStorage.setItem('menuIndex', JSON.stringify(action.menuIndex));
            return {
                ...state,
                menuIndex:action.menuIndex
            };
            break;
        case type.SWITCH_menuShowBool:
            return {
                ...state,
                menuShowBool:action.menuShowBool
            };
            break;
        case type.SWITCH_userInfo:
            sessionStorage.setItem('userInfo', JSON.stringify(action.userInfo));
            var obj=JSON.parse(JSON.stringify(action.userInfo))
            return {
                ...state,
                userInfo:obj
            };
            break;
        default:
            return {...state};
    }
};
export default reducer;