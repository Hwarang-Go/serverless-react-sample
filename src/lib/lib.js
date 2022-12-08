import axios from 'axios';

export function getPhones(){
    return axios.get('http://127.0.0.1:5000/phones')
    // return axios.get('[your API Gateway address]/[zappa stage name]/phones')
}

export function addPhone(param) {
    return axios({
        method: 'post',
        url : 'http://127.0.0.1:5000/addPhone',
        // url : '[your API Gateway address]/[zappa stage name]/addPhone',
        
        data: param
    })
}

export function deletePhone(param) {
    return axios({
        method: 'post',
        url : 'http://127.0.0.1:5000/deletePhone',
        // url : '[your API Gateway address]/[zappa stage name]/deletePhone',
        data: param
    })
}

export function updatePhone(param) {
    return axios({
        method: 'post',
        url : 'http://127.0.0.1:5000/updatePhone',
        // url : '[your API Gateway address]/[zappa stage name]/updatePhone',
        data: param
    })
}