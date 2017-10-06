var userName = document.getElementById("userName");
var pass = document.getElementById("pass");
var confrimPass = document.getElementById("confrimPass");
var email = document.getElementById("email");

userName.onkeyup = function(){
	var span = document.getElementsByClassName("message");
	if (userName.value.length == 0) {
		span[0].innerHTML = "Vui lòng nhập tên";
		span[0].style.color = "red";
	}
	else if(userName.value.length < 7){
		span[0].innerHTML = "Tên quá ngắn";
		span[0].style.color = "red";
	}
	else {
		span[0].innerHTML = "Hợp lệ";
		span[0].style.color = "green";
	}
}
email.onkeyup = function(){
	var span = document.getElementsByClassName("message");
	if (email.value.length == 0) {
		span[2].innerHTML = "Vui lòng nhập email";
		span[2].style.color = "red";
	}
	else if(email.value.length < 7){
		span[2].innerHTML = "Email quá ngắn";
		span[2].style.color = "red";
	}
	else {
		span[2].innerHTML = "Hợp lệ";
		span[2].style.color = "green";
	}
}
pass.onkeyup = function(){
	var span = document.getElementsByClassName("message");
	if (pass.value.length == 0) {
		span[3].innerHTML = "Vui lòng nhập pass";
		span[3].style.color = "red";
	}
	else if(pass.value.length < 7){
		span[3].innerHTML = "Password quá ngắn";
		span[3].style.color = "red";
	}
	else {
		span[3].innerHTML = "Hợp lệ";
		span[3].style.color = "green";
	}
}
confrimPass.onkeyup = function(){
	var span = document.getElementsByClassName("message");
	if (confrimPass.value == pass.value) {
		span[4].innerHTML = "Hợp lệ";
		span[4].style.color = "green";
	}
	else {
		span[4].innerHTML = "Pass chưa khớp";
		span[4].style.color = "red";
	}
}