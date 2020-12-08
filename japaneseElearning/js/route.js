console.log("day la router")

var root = null;
var useHash = true; // Defaults to: false
// var hash = '#!'; // Defaults to: '#'
// var router = new Navigo(root, useHash, hash);
var router = new Navigo(root, useHash);

router.on('/sign-up', function () {
    console.log('this is dang ky ')
    document.getElementById('body').innerHTML = `<register-screen></register-screen>`
}).resolve();

router.on('/sign-in', function () {
    console.log("trang dang nhap")
    document.getElementById('body').innerHTML = `<login-screen></login-screen>`
}).resolve();

router.notFound(function () {
    document.getElementById("body").innerHTML = `<h1>Trang khong ton tai</h1>`
})
router.on(function () {
    // router.navigate("/sign-in")
    document.getElementById("body").innerHTML = `<index-screen></index-screen>`
}).resolve()

router.on('/index', function () {
    // router.navigate("/sign-in")
    document.getElementById("body").innerHTML = `<index-screen></index-screen>`
}).resolve()

window.router = router;
