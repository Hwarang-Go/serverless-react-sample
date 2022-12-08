import axios from 'axios';

export function getPhones(){
    // return axios.get('http://127.0.0.1:5000/phones')
    return axios.get('https://oziy2g9zm9.execute-api.ap-northeast-1.amazonaws.com/dev/phones')
}

export function addPhone(param) {
    return axios({
        method: 'post',
        // url : 'http://127.0.0.1:5000/addPhone',
        url : 'https://oziy2g9zm9.execute-api.ap-northeast-1.amazonaws.com/dev/addPhone',
        
        data: param
    })
}

export function deletePhone(param) {
    return axios({
        method: 'post',
        // url : 'http://127.0.0.1:5000/deletePhone',
        url : 'https://oziy2g9zm9.execute-api.ap-northeast-1.amazonaws.com/dev/deletePhone',
        data: param
    })
}

export function updatePhone(param) {
    return axios({
        method: 'post',
        // url : 'http://127.0.0.1:5000/updatePhone',
        url : 'https://oziy2g9zm9.execute-api.ap-northeast-1.amazonaws.com/dev/updatePhone',
        data: param
    })
}