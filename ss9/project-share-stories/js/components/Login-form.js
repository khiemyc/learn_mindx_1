const $template = document.getElementById('login-form-template')
import { checkInputWrapperValue, md5, validateEmail } from "../utils.js"
class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true))
        this.$loginForm = this.shadowRoot.getElementById('login-form')
        this.$email = this.shadowRoot.getElementById('email')
        this.$password = this.shadowRoot.getElementById('password')
    }
    connectedCallback() {
        this.$loginForm.onsubmit = async (event) => {
            event.preventDefault();
            //lay du liei
            let email = this.$email.value;
            let password = this.$password.value
            let isPasster = checkInputWrapperValue(this.$email, function (value) {
                return value == ""
            }, "Nhap vao email") & checkInputWrapperValue(this.$email, function (value) {
                return !validateEmail(value);
            }, "email khong hop le") & checkInputWrapperValue(this.$password, function (value) {
                return value == ""
            }, "nhap vao mat khau")
            if (isPasster) {
                let reuslt = await firebase
                    .firestore()
                    .collection('users')
                    .where('email', '==', email)
                    .where('password', '==', md5(password))
                    .get()
                console.log(reuslt)
                if (reuslt.empty) {
                    alert("Email hoac mat khau khong chinh xac")
                } else {
                    alert("dang nhap thanh cong")
                }
            }
        }

    }
}

window.customElements.define('login-form', LoginForm)