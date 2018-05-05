function setup() {
	var textArea = document.getElementById("message");
	console.log(textArea);
	textArea.focus();
};

window.addEventListener("DOMcontentLoaded", setup, false);
window.addEventListener("beforeunload", function(event){
	var message = "you have not completed filling out this form!!";
	(event || window.event).returnValue = message;
	return message;
});