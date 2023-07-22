import { useEffect, useState } from 'react';

const url = '';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {mode: 'cors'});
                if (response.status >= 400) {
                    throw new Error('server error');
                }
                const json = await response.json();
                setData(json);
                setError(null);
            } catch(error) {
                setError(error);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return { error, loading, data };
}

export default useFetch;
