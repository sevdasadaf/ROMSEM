import api from '../config/ApiConfig'

export const getSoup = () => {
    return api.get('/soup')
}