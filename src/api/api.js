import axios from 'axios'

let base = 'http://115.28.246.26:8009'
// 注意 /斜线

// 用户管理
export const requestLogin = params => { return axios.post(`${base}/account/user-login/ `, params).then(res => res.data) }

export const getUserList = params => { return axios.get(`${base}/account/user-list/`, {params: params}) }

export const addUser = params => { return axios.post(`${base}/account/create-new-user/`, params) }

export const resetPwd = params => { return axios.post(`${base}/account/reset-password/`, params).then(res => res.data) }

export const deletUser = params => { return axios.get(`${base}/account/del-user/`, {params: params}).then(res => res.data) }

export const getBaseInfo = params => { return axios.get(`${base}/account/base-info/`, {params: params}).then(res => res.data) }

export const changePwd = params => { return axios.post(`${base}/account/change-password/`, params).then(res => res.data) }

// 设备状态 分a/b
export const getDeviceInfo = params => { return axios.get(`${base}/monitor/device-info/`, {params: params}).then(res => res.data) }

// 读单数据获取(全部)（普通用户）
export const getIoRecord = params => { return axios.get(`${base}/monitor/io-record/`, {params: params}).then(res => res.data) }

// 读单数据分gate（普通用户）
export const getGateRecord = params => { return axios.get(`${base}/monitor/gate-record/`, {params: params}).then(res => res.data) }

// 读单数据查询（管理员）
export const searchIoRecord = params => { return axios.post(`${base}/monitor/get-record/`, params).then(res => res.data) }

export const controlDevice = params => { return axios.post(`${base}/monitor/control-device/`, params).then(res => res.data) }

export const getOperationRecord = params => { return axios.get(`${base}/monitor/history-list/`, {params: params}).then(res => res.data) }

