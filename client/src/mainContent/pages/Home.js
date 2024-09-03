import React, {useEffect, useState} from "react"


const Home = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            redirect: 'follow',
          };
          
          fetch("http://localhost:8080/generate-text", requestOptions)
            .then(response => response.json())
            .then(result => {

                const chatGptResponse = result.choices[0].message.content
                setData(chatGptResponse)
            })
            .catch(error => console.log('error', error));
        
    }, []);


    return <h1>{data}</h1>
}

export default Home;