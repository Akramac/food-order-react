import {useCallback, useEffect, useState} from "react";

async function sendHttpRequest(url , config){
    const response= await fetch(url,config)

    const resData= response.json()
    if(!response.ok){
        throw new Error(resData.message || 'Could not send Request')
    }
    return resData
}
export default function useHttp(url, config , initialData) {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false )
    const [data, setData] = useState(initialData)

    const sendRequest = useCallback(async function sendRequest(){
        setIsLoading(true)
        try{
            const resData =  await sendHttpRequest(url, config)
            setData(resData)
        }catch (error){
            setError(error.message || 'Could not send Request')
        }
        setIsLoading(false)
    }, [url , config])

    useEffect(() => {
        if(config && (config.method === 'GET' || !config.method) || !config){
        sendRequest()
        }
    }, [config,sendRequest]);
    return {
        data,
        isLoading,
        error,
        sendRequest
    }
}