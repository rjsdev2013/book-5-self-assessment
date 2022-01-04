import { PenPalNotes } from "./PenPalNotes.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = PenPalNotes()
}

render()
