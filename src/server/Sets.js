import api from "../config/ApiConfig";

export const getSets = () => {
    return api.get('/sets')
}