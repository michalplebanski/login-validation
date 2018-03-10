var btn = document.getElementById("btn");
var user_input = document.getElementById("username-input");
var pass_input = document.getElementById("password-input");

btn.addEventListener("click", function() {
	check();
});

function check() {
	var expression = /@/;
	if(!(user_input.value.match(expression))) {
		document.getElementById("wrong-text").innerHTML = "@ is missing!";
	}	else if (pass_input.value.length>9 || pass_input.value.length<6) {
		document.getElementById("wrong-text").innerHTML = "Password must containts 6-9 signs!";	
	}	else {
		document.getElementById("wrong-text").innerHTML = " ";
	}
}