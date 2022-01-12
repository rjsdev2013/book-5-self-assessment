import { PenPalNotes } from "./PenPalNotes.js"
import { fetchAuthors, fetchTopics, fetchLetters } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        console.log('state data has changed.regenerating html...')
        render()
    }
)

const render = () => {
    fetchAuthors().then(
        () => {
            fetchTopics().then(
                ()=>{
                    fetchLetters().then(
                        ()=>{
                            mainContainer.innerHTML = PenPalNotes()
                        }
                    )
                   
                }
            )
        }
    )
}

render()
