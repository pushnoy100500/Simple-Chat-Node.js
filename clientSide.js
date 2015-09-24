function subscribe() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState==4 && xhr.status==200) {
			console.log(xhr.responseText);
			var text = document.createElement("li");
			text.innerText = xhr.responseText;
			$gel('messageList').appendChild(text);	
			subscribe();
		}
	}
	xhr.open("GET", "/subscribe", true);
	//setRequestHeader(header,value)
	xhr.send();
}

subscribe();

$gel("messageForm").onsubmit = function() {
	event.preventDefault();
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/publish", true);
	xhr.send($gel('message').value);
	$gel('message').value = "";
	return false;
}

function $gel(id) {
	return document.getElementById(id);
}
