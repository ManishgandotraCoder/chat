import axios, { AxiosResponse, AxiosError } from 'axios';
import resp from "./error.helper";
const API = 'https://infinite-ocean-11002-5e980ae4a0c9.herokuapp.com/api'

function _helperaxios(url: string, params: any, method: string) {
    return axios({
        method: method,
        url: API + url,
        data: params
    })
        .then((response: AxiosResponse) => {
            return resp(response?.data?.body, response?.data?.status, response?.data?.message);
        })
        .catch((reason: AxiosError) => {
            return resp({}, 400, reason.message);
        })

}
export default _helperaxios;