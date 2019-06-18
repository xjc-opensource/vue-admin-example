import axios from 'axios';
import apiProcess from './apiprocess';
import {RESP_CODE} from './responecode.js';

axios.defaults.timeout = 60*1000; //响应时间
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
//axios.defaults.baseURL = base;   //配置接口地址

function getApiUrl(path) {
    return apiProcess.getApiRoot() + path;
}

function showErrorMessage(msg) {
    apiProcess.showErrorMessage(msg);
}

function getResponseCodeString(code) {
    return apiProcess.getResponseCodeString(code);
}

function processNoAuth(){
   return apiProcess.processNoAuth();
}

function getUserToken() {
    return apiProcess.getUserToken();
}

axios.interceptors.request.use(
    config => {
        config.headers['x-access-token'] = getUserToken();
        config.headers['x-access-type'] = 'web';
        return config;
    },
    err => {
        return Promise.reject(err)
    });

axios.interceptors.response.use((res) =>{
    //console.log(JSON.stringify(res));
    if(res.status !== 200){
        showErrorMessage( getResponseCodeString("message.errorRequest") + " : " + res.status );
        return Promise.reject(res);
    } else {
        processResponseData(res.data);
    }
    return res;

}, (error) => {
    //console.log(JSON.stringify(error));
    let hintStr = getResponseCodeString("message.errorNetwork");
    if ((error) && (error.response) && (error.response.status)) {
        hintStr += ":" + error.response.status;
    }

    showErrorMessage(hintStr);
    return Promise.reject(error);
});



export function isResponseSuccess (data) {
    return data.code === RESP_CODE.SUCCESS;
}

export function processResponseData(data) {
    if (data.code === RESP_CODE.AUTHFAIL) { //授权失败
        processNoAuth();
    } else if (data.code === RESP_CODE.ERROR) { //错误
        showErrorMessage(data.message);
    } else if (data.code === RESP_CODE.VALIDFAIL) { //检测参数失败
        let vaildStr = "";
        if ((data.extendData) && (data.extendData.fieldErrors)) {
            let fieldErrors = data.extendData.fieldErrors;
            fieldErrors.forEach(function(value) {
                vaildStr +=  ' ' + value.message;
            });
        } else {
            //兼容旧版本 infrastructure 1.0.53-SNAPSHOT 以前
            if ((data.data) && (data.data.fieldErrors)) {
                let fieldErrors = data.data.fieldErrors;
                fieldErrors.forEach(function (value) {
                    vaildStr += ' ' + value.message;
                });
            }
        }
        showErrorMessage(vaildStr);
    } else if (data.code === RESP_CODE.UPDATEVER) { //版本过期
        showErrorMessage(getResponseCodeString("message.upateVer"));
    } else if (data.code === RESP_CODE.NOTPOPEDOM) { //无权限
        showErrorMessage("[" + data.data + "]" + getResponseCodeString("message.notPopedom"));
    } else if (data.code === RESP_CODE.NOT_DATA_POPEDOM) { //无数据权限
        showErrorMessage("[" + data.data + "]" + getResponseCodeString("message.notDataPopedom"));
    }
}

export function isUploadSuccess(data) {
    if (data.flag) {
        if (data.flag === 1) {
            return true;
        } else {
            let msgStr = "";
            switch(data.flag) {
                case 2: msgStr = getResponseCodeString("fileUpload.errorVerifyCode"); break;
                case 3: msgStr = getResponseCodeString("fileUpload.notStorageDir"); break;
                case 4: msgStr = getResponseCodeString("fileUpload.uploadFieldNotExists"); break;
                case 5: msgStr = getResponseCodeString("fileUpload.errorUploadType"); break;
                case 6: msgStr = getResponseCodeString("fileUpload.errorFileType"); break;
                default: msgStr += getResponseCodeString("fileUpload.uploadFailure") + data.flag;
            }
            showErrorMessage(msgStr);
            return false;
        }
    } else {
        showErrorMessage(getResponseCodeString("fileUpload.uploadError"));
        return false;
    }
}


export function getUrl(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(getApiUrl(url), {params: params}).then(res => {
            if (isResponseSuccess(res.data)) {
                resolve(res.data);
            } else {
                reject(res.data);
            }
        }).catch(err => {
            let data = {};
            data.code = RESP_CODE.NOTKNOWN;
            data.error = err;
            reject(data);
        })
    })
}

export function postUrl(url, params) {
    return new Promise((resolve, reject) => {
        axios.post( getApiUrl(url), params).then(res => {
            if (isResponseSuccess(res.data)) {
                resolve(res.data);
            } else {
                reject(res.data);
            }
        }).catch(err => {
            let data = {};
            data.code = RESP_CODE.NOTKNOWN;
            data.error = err;
            reject(data);
        })
    })
}

export default {
    getUrl
    ,postUrl
}
