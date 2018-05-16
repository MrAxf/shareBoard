import http from './AxiosInstance'

export const getMyUser = () => http.get('user/me')

export const getUsersByUsername = (username) => http.get(`user/${username}`)