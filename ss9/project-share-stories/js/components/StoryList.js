const $template = document.getElementById('story-list-template')
class StoryList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$storyList = this.shadowRoot.getElementById('story-list')
    }
    static get observedAttributes() {
        return ["stories"]
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'stories') {
            this.render();
        }
    }
    render() {
        //lay du lieu tu thuoc tinh
        let stories = JSON.parse(this.getAttribute("stories"))

        stories.forEach((story) => {
            // this.$storyList.innerHTML += `
            // `
            let $story = document.createElement('story-container')
            $story.setAttribute('id', story.id)
            $story.setAttribute('content', story.content)
            $story.setAttribute('owner', story.owner)
            $story.setAttribute('date-modified', story.dateModified)

            this.$storyList.appendChild($story)
        });
    }
}

window.customElements.define('story-list', StoryList)