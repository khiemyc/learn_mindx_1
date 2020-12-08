import faceData from "../../data/fakeData.js"
import { getDataFromDocs, getDataFromDoc } from "../utils.js"
const $template = document.getElementById('index-screen')

class IndexScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$storyList = this.shadowRoot.getElementById('story-list')
    }

    connectedCallback() {
        this.loadStories();
        // this.render()
    }

    async loadStories() {
        let result = await firebase.firestore().collection('stories').get();
        // console.log(getDataFromDocs(result.docs));
        this.storiesData = getDataFromDocs(result.docs)
        for (let storyData of this.storiesData) {
            let result = await firebase
                .firestore()
                .collection('users').doc(storyData.owner)
                .get()

            console.log(result)
            let user = getDataFromDoc(result)
            storyData.owner = user.name
        }
        this.render()
    }
    render() {
        this.$storyList.setAttribute('stories', JSON.stringify(this.storiesData))
    }
}
window.customElements.define('index-screen', IndexScreen)