import { appProps } from "./objects";

const baseUrl = "https://flows-a8b35.web.app/api/";

const request = async (appProps: appProps, path: string , method: string, body: any = undefined, queryParams: {} ={}) => {
    
    const url = `${baseUrl}${path}?${new URLSearchParams(queryParams)}`;

    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
            "X-API-Key": appProps.apiKey
        },
        body: body ? body : undefined,
        
    });

    return response.json();
};

const doGet = (appProps: appProps, path: string, params = {}) => {
    return request(appProps,path , "GET", null, params);
};

const doPost = (appProps: appProps,path: string, body: {} = {}) => {
    return request(appProps, path, "POST", body);
};

const doDelete = (appProps: appProps,path: string, body:{} = {}) => {
    return request(appProps, path, "DELETE", body);
};

export {
    doGet,
    doPost,
    doDelete,
}
