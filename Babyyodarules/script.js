function happy() {
	var cute = document.getElementById('pet')
	cute.src = "baby yoda happy.jpg"
}
function feed(event) {
	if (event.dataTransfer.getData("DON'T EAT ME!!") === "dino") {
		var yum = document.getElementById('eat')
		yum.src = "baby yoda happy.jpg"
	}
}

function allowDrop(event) {
	event.preventDefault()
}

function drag(event) {
event.dataTransfer.setData("DON'T EAT ME!!", event.target.id)
}

function contest(winner) {
	document.getElementById("winner").innerHTML = "It's... " +winner
}