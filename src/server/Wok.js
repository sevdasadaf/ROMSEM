import api from "../config/ApiConfig"

export const getWok = () => {
    return api.get('/wok')
}