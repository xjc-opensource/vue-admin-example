
import { Message } from 'element-ui'
import { GlobalEnvParams } from '../core/envconfig';
import i18n from "../i18n/i18n"

function getApiRoot() {
    return GlobalEnvParams.API_ROOT;
}

function showErrorMessage(msg) {
    Message.error({
        message: msg
    });
}

function getResponseCodeString(code) {
    return  i18n.t(code);
}

function getUserToken() {
    let user = sessionStorage.getItem('user');
    let userToken = "";
    if (user) {
        user = JSON.parse(user);
        userToken = user.token || '';
    }
    return userToken;
}

function processNoAuth(){
    sessionStorage.removeItem('user')
}

export default {
    getApiRoot
    ,showErrorMessage
    ,getResponseCodeString
    ,processNoAuth
    ,getUserToken
}