const $template = document.getElementById('meme-container-template')

// tao shadow-dom
class MemeContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
    //khi component sinh ra
    // connectedCallback(){}
    connectedCallback(){}
    // phat chien, truyen vao { ten thuoc tinh, gia tri cu, gia tri moi}
    attributeChangCallBack(name,oldValue,newValue){}
    // mat di
    disconnectCallback(){}
}

//tao custom-element
// bawst buoc ten the co dau gack
window.customElements.define('meme-container',MemeContainer);

