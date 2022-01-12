import { Authors, Topics, Recipients, Letters } from "./Letters.js"
import { saveLetter } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitLetter") {
        // Get what the user typed into the form fields
        const userLetter = document.querySelector("textarea[name='letterContent']").value
        const userAuthor = document.querySelector("select[name='author']").value
        const userTopic = document.querySelector("input[name='topic']:checked").value
        const userRecipient = document.querySelector("select[name='recipient']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            letterContent: userLetter,
            letterAuthor: userAuthor,
            letterTopic: userTopic,
            letterRecipient: userRecipient,
            timestamp: Date.now()
        }

        // Send the data to the API for permanent storage
        saveLetter(dataToSendToAPI)
    }
})

export const PenPalNotes = () => {
    let html =  `
    <h1>Pen Pal Society</h1>
    <section class="authorForm">
        <h2>Author</h2>
        ${Authors()}
    </section>

    <section class="letter-form">
        <h2>Letter</h2>
        <textarea type="text" class="textarea" name="letterContent"></textarea>
    </section>

    <section class="topics" > 
        <h2>Topics</h2>
        ${Topics()}
    </section>

    <section class="recipients" > 
        <h2>Recipient</h2>
        ${Recipients()}
    </section>

    <button class="button" id="submitLetter">Send Letter</button>

    <section class="letters" > 
        <h2>Letters</h2>
        ${Letters()}
        </section>
    `
    return html  
      
}