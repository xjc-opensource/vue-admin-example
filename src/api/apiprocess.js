import { Message } from 'element-ui'
import { GlobalEnvParams } from '@/core/envconfig';
import session from '@/core/session';
import i18n from "@/i18n/i18n"

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
    return session.getSessionToken();
}

function processNoAuth(){
    session.deleteSession();
}

export default {
    getApiRoot
    ,showErrorMessage
    ,getResponseCodeString
    ,processNoAuth
    ,getUserToken
}