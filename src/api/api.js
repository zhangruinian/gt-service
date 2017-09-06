const baseUrl = process.env.NODE_ENV === 'production' ? './' : 'http://192.168.0.104:8011/'

export default baseUrl

/* export const requestLogin = params => { return axios.post(`${base}/account/user-login/ `, params).then(res => res.data) }

export const getUserList = params => { return axios.get(`${base}/account/user-list/`, {params: params}) } */

