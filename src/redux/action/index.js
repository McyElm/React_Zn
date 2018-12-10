/*
 * action 类型
 */
export const type = {
    SWITCH_Index : 'SWITCH_Index',
    SWITCH_menuShowBool:'SWITCH_menuShowBool',
    SWITCH_userInfo:'SWITCH_userInfo',
}
// 菜单点击切换，修改面包屑名称
export function switchIndex(menuIndex) {
    return {
        type:type.SWITCH_Index,
        menuIndex
    }
}
// 滚动条滚动 切换导航显示
export function switch_menuShowBool(menuShowBool) {
    return {
        type:type.SWITCH_menuShowBool,
        menuShowBool
    }
}
//登录人信息
export function switch_userInfo(userInfo) {
    return {
        type:type.SWITCH_userInfo,
        userInfo
    }
}