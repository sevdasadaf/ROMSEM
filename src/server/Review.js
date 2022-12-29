import api from "../config/ApiConfig"

export const getReview =() => {
    return api.get('/reviews')
}

export const storeReview = (data) => {
    return api.post('/reviews', data)
}