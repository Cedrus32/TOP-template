async function fetchData(query) {
    try {
        const response = await fetch(query);
        const data = await response.json();
        return await {status: 'resolved', data: data};
    } catch(e) {
        console.log(e);
        return {status: 'error', data: e}
    }
}

export default fetchData;
