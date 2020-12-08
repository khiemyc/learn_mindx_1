import { auth } from "../utils.js";

const $template = document.getElementById('story-container-template')

class StoryContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild($template.content.cloneNode(true))
        this.$owner = this.shadowRoot.getElementById('owner')
        this.$dateModified = this.shadowRoot.getElementById('date-modified')
        this.$content = this.shadowRoot.getElementById('content')
        this.$reactionBtns = this.shadowRoot.querySelectorAll('.reaction-btn')
        this.$reactionContainer = this.shadowRoot.getElementById()
    }
    static get observedAttributes() {
        return ['id', 'owner', 'date-modified', 'content']
    }
    connectedCallback() {
        for (let i = 0; i < this.$reactionBtns.length; i++) {
            this.$reactionBtns[i].onclick = () => {
                this.addReactiona(i)
                console.log('aaaaaa');
                let $reaction = this.$reactionBtns[i].cloneNode(true)
                $reaction.classList.add('stylie')
            }
        }
    }
    attributeChangedCallback(attrName, oldValue, newValue) {

        switch (attrName) {
            case 'owner':
                this.$owner.innerHTML = newValue;
                break;
            case 'date-modified':
                this.$dateModified.innerHTML = newValue;
                break;
            case 'content':
                this.$content.innerHTML = newValue;
                break;
        }
    }
    addReactiona(type) {
        firebase.firestore().collection('reactions').add({
            story: this.id,
            owner: auth().id,
            type: type,
        })
    }
}

window.customElements.define('story-container', StoryContainer)