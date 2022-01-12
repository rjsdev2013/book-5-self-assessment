import { getAuthors, getTopics, getRecipients, getLetters } from "./dataAccess.js"



export const Topics = () => {
    const topics = getTopics()
    let html = "<ul>"

    for (const topic of topics) {
        html += `<li>
            <input type="checkbox" name="topic" value="${topic.topic}"/> ${topic.topic}
        </li>`
    }

    html += "</ul>"

    return html
}

const createAuthorList = (author) => {
    return `
            <option id="${author.name}">${author.name}<option>
            `
}

export const Authors = () => {

    const authors = getAuthors()
    let html = `
        <select name="author">
        <option>choose</option>
            ${
                authors.map(createAuthorList).join("")
            }
        </option>
        </select>
         `

    return html
}

export const Recipients = () => {
    const recipients = getAuthors()

    let html = `
        <select name="recipient">
        <option>Choose</option>
            ${
                recipients.map(createAuthorList).join("")
            }
        </select>
         `

    return html
}

const createLetterItem = (letter) => {
    const authors = getAuthors()
    const topics = getTopics()
    const recipients = getRecipients()
    const letters = getLetters()

    const letterAuthor = authors.find(
        (author) =>{
            return author.name === letter.letterAuthor
        }

    )
    const letterTopic = topics.find(
        (topic) =>{
            return topic.topic === letter.letterTopic
        }

    )
    const letterRecipient = recipients.find(
        (recipient) =>{
            return recipient.name === letter.letterRecipient
        }

    )    


    return `
        <li class="letter">
        <p>Dear ${letterRecipient.name} (${letterRecipient.email}),</p>
        <p>${letter.letterContent}</p>
        <p>Sincerely,</p>
        <p>${letterAuthor.name} (${letterAuthor.email})</p>
        <p>sent on ${letter.timestamp}</p>
        <span id='letterTopic'>${letter.letterTopic}</span>
    
    </li>`
    
} 


export const Letters = () => {
    const letters = getLetters()

    let html = `
        <ul>
            ${letters.map(
                (letter) => {
                    return createLetterItem(letter)
                }
            ).join("")
            }

        </ul>
         `

    return html
}