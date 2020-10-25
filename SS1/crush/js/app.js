// var person = prompt("Please enter your name", "Harry Potter");
var $khong =document.querySelector("#no");
// $khong.onmousenter
//ghe de ham su ly su kien
var $answer = document.querySelector("#answers");
// them vao
$khong.addEventListener('mouseenter',function(){
    $answer.classList.toggle("reverse")
})