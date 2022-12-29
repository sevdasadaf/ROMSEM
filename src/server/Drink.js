import api from '../config/ApiConfig'

export const getDrink = () => {
    return api.get('/drinks')
}