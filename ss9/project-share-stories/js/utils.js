export function checkInputWrapperValue($inputWrapper, condition, message) {
    let value = $inputWrapper.value;
    if (condition(value)) {
        $inputWrapper.error = message
        return false;
    } else {
        $inputWrapper.error = ""
        return true;
    }
}

export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validateStrongPassword(pwString) {
    var strength = 0;

    strength += /[A-Z]+/.test(pwString) ? 1 : 0;
    strength += /[a-z]+/.test(pwString) ? 1 : 0;
    strength += /[0-9]+/.test(pwString) ? 1 : 0;
    strength += /[\W]+/.test(pwString) ? 1 : 0;

    return strength >= 4;
}

export function md5(string) {
    return CryptoJS.MD5(string).toString();
}

// save status user where login
export function makeAuth(user) {
    localStorage.setItem('current-user', JSON.stringify(user))
}
// check status user if true get info user
export function auth() {
    if (localStorage.getItem('current-user') != "")
        return JSON.parse(localStorage.getItem('current-user'))
    return false
}

//xu ly du lieu tra ve tu firebase 1 doc 
export function getDataFromDoc(doc, excepts = []) {
    let result = doc.data();
    result.id = doc.id;
    // loai thong tin khong can thiet
    for (let except of excepts) {
        delete result[except]
    }
    return result;
}
// xu ly du lieu tu nhieu doc

export function getDataFromDocs(docs, except = []) {
    return docs.map(function (doc) {
        return getDataFromDoc(doc, except)
    })
}