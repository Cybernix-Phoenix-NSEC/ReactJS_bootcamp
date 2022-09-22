import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchComponent = () => {
    const [name, setName] = useState();
    const [userId, setUserId] = useState();

    async function fetchData() {
        const data = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        setName(data.data.title);
        setUserId(data.data.userId);
        console.log(data.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <>
            <p>
                The fetched data is:
                <br />
                title: {name}
                <br />
                userId: {userId}
            </p>
        </>
    )
}

export default FetchComponent;