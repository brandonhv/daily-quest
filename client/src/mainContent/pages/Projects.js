import React, {useEffect, useState} from "react"


const Projects = () => {

    const [quest, setQuest] = useState("")
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8080/receive-challenge")
        .then(response => response.json())
        .then(data => {

            const questReceived = data.oneQuest

            setQuest(questReceived)

        })
        .catch(error => {

            setError(error.message)
        });


    }, []);


    if (error) {
        return <h1>Error: Something went wrong. Please Try again.</h1>;
    }

    return <h1>{quest || "Loading..."}</h1>
};

export default Projects;