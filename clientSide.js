function subscribe() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState==4 && xhr.status==200) {
			var text = document.createElement("li");
			text.innerText = xhr.responseText;
			$gel('messageList').appendChild(text);	
		}
	}
	xhr.open("GET", "localhost:8003/subscribe", true);
	xhr.send();
}

$gel("messageForm").onsubmit = function() {
	event.preventDefault();
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "localhost:8003/publish", true);
	xhr.send($gel('message').value);
	$gel('message').value = "";
	return false;
}

function $gel(id) {
	return document.getElementById(id);
}
