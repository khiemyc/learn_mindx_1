const $teamplate = document.getElementById('create-courses-template')

class CreateCoureses extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild($teamplate.content.cloneNode(true));

    }
}

window.customElements.define('create-courses', CreateCoureses)