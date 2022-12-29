import api from "../config/ApiConfig"

export const getAksia =()=>{
    return api.get('/aksia')
}