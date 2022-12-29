import api from "../config/ApiConfig"

export const getPizza =  () => {
    return api.get('/pizza')
}