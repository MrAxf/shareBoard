import http from './AxiosInstance'

export const getMyBlackboards = () => http.get('/blackboard/me')

export const getBlackboard = (id) => http.get(`/blackboard/${id}`)

export const addBlackboard = (blackboard) => http.post('/blackboard', blackboard)

export const updateBlackboard = (id, blackboard) => http.put(`/blackboard/${id}`, blackboard)

export const deleteBlackboard = (id) => http.delete(`/blackboard/${id}`)
