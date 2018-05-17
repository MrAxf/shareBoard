import http from './AxiosInstance'

export const getMyBlackboards = () => http.get('/blackboard/me')

export const addBlackboard = (blackboard) => http.post('/blackboard', blackboard)
