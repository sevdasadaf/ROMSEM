import api from "../config/ApiConfig"

export const getCorn = () => {
    return api.get('/corn')
}