import axios, { AxiosResponse, AxiosError } from 'axios';
import resp from "./error.helper";
const API = 'http://localhost:9000/api'

function _helperaxios(url: string, params: any, method: string) {
    let token = (localStorage.getItem('token'))
    return axios({
        method: method,
        headers: {
            'Authorization': 'Bearer ' + token
        },
        url: API + url,
        data: params
    })
        .then((response: AxiosResponse) => {
            return resp(response?.data?.body, response?.data?.status, response?.data?.message);
        })
        .catch((reason: any) => {
            return resp([], reason?.response?.data?.status, reason?.response?.data?.message)
        })

}
export default _helperaxios;