import api from "../config/ApiConfig"

export const getSalad = () => {
    return api.get('/salad')
}