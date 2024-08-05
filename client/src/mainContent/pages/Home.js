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
                console.log('Inside the promise ----weee')

                const chatGptResponse = result.choices[0].message.content
                // console.log(result.choices[0].message.content)
                setData(chatGptResponse)
            })
            .catch(error => console.log('error', error));
        
    }, []);

    console.log("Outside Use Effect!")


    return <h1>{data}</h1>
}

export default Home;