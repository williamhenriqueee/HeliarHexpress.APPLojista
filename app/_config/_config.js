import { isNullOrUndefined } from "util";
const _chaveToken = "device_token";
const _deviceid = "device_id"
const _apiUrl = "https://br-heliarexpress-qa.clarios.com/api/";
var applicationSettings = require("application-settings");
export default class Config {    

    getApiUrl(){
        return _apiUrl;
    }

    getToken(){
        if(applicationSettings.getString(_chaveToken) == null || applicationSettings.getString(_chaveToken) == undefined)
            return "";
            
        return applicationSettings.getString(_chaveToken);
    }
    setToken(_token){
        applicationSettings.setString(_chaveToken, _token);
    }

    getDeviceId(){

        if(isNullOrUndefined(applicationSettings.getString(_deviceid)))
            return "";

        return applicationSettings.getString(_deviceid);
    }
    setDeviceId(_id){
        applicationSettings.setString(_deviceid, _id);
    }


}