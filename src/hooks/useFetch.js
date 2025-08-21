import { useEffect, useState } from "react";

function useFetch(url, method = 'GET') {

    let [data, setData] = useState(null)
    let [postData, setPostData] = useState(null)
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null)

    useEffect(() => {

        let abortController = new AbortController();
        let signal = abortController.signal;

        let options = {
            signal,
            method
        }

        setLoading(true)

        let fetchData = () => {
            fetch(url, options)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Something went wrong');
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setLoading(false)
                    setError(null)
                })
                .catch(err => {
                    setError(err.message)
                    setLoading(false)
                })
        }

        if (method === 'POST') {

            // console.log(postData)
            options = {
                ...options,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            }
            fetchData();
            
            // Reset postData after making the request to prevent infinite loop
            setPostData(null);
        }

        if(method === 'GET'){
            fetchData()
        }


        return () => {
            abortController.abort()
        }

    }, [url, postData])

    return { setPostData, data, loading, error }
}
export default useFetch;