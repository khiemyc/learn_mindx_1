const $teamplateAnime = document.getElementById('anime-container')

//tao shadow-dom

class AnimeContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild($teamplateAnime.content.cloneNode(true))
    }

    static get observedAttributes() {
        return ['img', 'category', 'name', 'price', 'chapter']
    }
    attributeChangedCallback(attName, oldValue, newValue) {
        // console.log(attName, newValue)
        if (attName == "img") {
            this.shadowRoot.querySelector('.img').src = newValue;
        }
        if (attName == "category") {
            let arrayNewvalue = newValue.split(",")
            console.log(arrayNewvalue)
            var newspan = ""
            arrayNewvalue.forEach(element => {
                let span = `<span class="category-name">${element}</span>`;
                newspan = newspan.concat(span)
            })
            this.shadowRoot.querySelector('.category').innerHTML = newspan
        }
        if (attName == "name") {
            this.shadowRoot.querySelector('.name').innerHTML = newValue;
        }
        if (attName == "price") {
            this.shadowRoot.querySelector('.price').innerHTML = newValue;
        }
        if (attName == "chapter") {
            this.shadowRoot.querySelector('.chapter').innerHTML = newValue
        }
    }
}

window.customElements.define('anime-container', AnimeContainer)