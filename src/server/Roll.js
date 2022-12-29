import api from "../config/ApiConfig"

export const getRoll = () => {
   return api.get('/roll')
}