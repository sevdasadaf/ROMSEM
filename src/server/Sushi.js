import api from "../config/ApiConfig"

export const getSushi = () => {
    return api.get('/sushi')
}

