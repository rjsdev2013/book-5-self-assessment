const applicationState = {
    authors: [],
    letters: [],
    topics: [],
    recepients: []
}

const API = "http://localhost:8088"

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topics) => {
                // Store the external state in application state
                applicationState.topics = topics
            }
        )
}

export const fetchAuthors = () => {
    return fetch(`${API}/Authors`)
        .then(response => response.json())
        .then(
            (authors) => {
                // Store the external state in application state
                applicationState.authors = authors
                applicationState.recipients = authors
            }
        )
}
export const fetchLetters = () => {
    return fetch(`${API}/Letters`)
        .then(response => response.json())
        .then(
            (letters) => {
                // Store the external state in application state
                applicationState.letters = letters
            }
        )
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

export const saveLetter = (letter) => {
    const postLetters = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(letter)
    }
    const mainContainer = document.querySelector("#container")


    return fetch(`${API}/letters`, postLetters)
        .then(response => response.json())
        .then(() => {
            //userServiceRequest.POST -> PHP not JS 
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}