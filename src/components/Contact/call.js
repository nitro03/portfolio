import axios from 'axios';

const call = (options, onSuccess, onError)=>{
    if(options){
        const {method, url, header, body} = options;

        if(method && method.toUpperCase() === 'GET'){
            requestGet(url, header, body, onSuccess, onError);
        }
        if(method && method.toUpperCase() === 'POST'){
            requestPost(url, header, body, onSuccess, onError);
        }
        return;
    }
    console.error('no url or request options passed')
}

const requestGet = (url, header, body, onSuccess, onError) =>{
    axios.get(url)
        .then(function (response) {
            // handle success
            onSuccess(response)
        })
        .catch(function (error) {
            // handle error
            onError(error);
        });
}

const requestPost = (url, header, body, onSuccess, onError) =>{
    axios.post(url, body)
        .then(function (response) {
            // handle success
            onSuccess(response)
        })
        .catch(function (error) {
            // handle error
            onError(error);
        });
}

export default call;