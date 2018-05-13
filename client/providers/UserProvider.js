import http from './AxiosInstance'

export const getMyUser = () => http.get('user/me')