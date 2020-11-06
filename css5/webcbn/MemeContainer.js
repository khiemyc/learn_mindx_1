const $template = document.getElementById('meme-container-template')

// tao shadow-dom
class MemeContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }

    //    observedAttributes
               observeAttributes
    static get observedAttributes() {
        return ['name', 'date-modified', 'image', 'description'];
    }
    //khi component sinh ra
    // connectedCallback(){}
    // connectedCallback(){}
    // phat chien, truyen vao { ten thuoc tinh, gia tri cu, gia tri moi}\
    
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log(attrName, newValue);
        if (attrName == "name") {
            this.shadowRoot.querySelector('.meme-name').innerHTML = newValue
        } else if (attrName == 'data-modified') {
            this.shadowRoot.querySelector('.meme-data-modified').innerHTML = newValue
        } else if (attrName == "image") {
            this.shadowRoot.querySelector('.meme-photo').innerHTML = newValue
        } else if (attrName == "description") {
            this.shadowRoot.querySelector('meme-description').innerHTML = newValue
        }

    }
    // mat di
    // disconnectCallback(){}
}

//tao custom-element
// bawst buoc ten the co dau gack
window.customElements.define('meme-container', MemeContainer);

