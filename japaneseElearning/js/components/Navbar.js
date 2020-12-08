import { auth, removeAuth } from '../utils.js'
const $teamplate = document.getElementById('navbar-template')

class Navbar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild($teamplate.content.cloneNode(true));
        this.$menu = this.shadowRoot.getElementById('menu')
        this.$currentUserInfo = this.shadowRoot.getElementById('current-user-info')
        this.$currentUserName = this.shadowRoot.getElementById('current-user-name')
        this.$logout = this.shadowRoot.getElementById('logout')
    }
    connectedCallback() {
        let currentUser = auth()
        if (currentUser) {
            this.$currentUserInfo.style.display = 'flex'
            this.$currentUserName.innerHTML = "Thong tin " + currentUser.name
        } else {
            this.$menu.style.display = 'flex'
        }
        this.$logout.onclick = () => {
            removeAuth()
            router.navigate('/index')
        }

    }
}

window.customElements.define('nav-bar', Navbar)