var directions = ["N", "NE", "E", "ES", "S", "SW", "W", "NW"];
var duck = document.getElementById("duck");

var posTop = 250;
var posLeft = 250;


function moveDuck(){
	var number = Math.floor(Math.random() * directions.length);
	var direction = directions[number];
	console.dir(duck.style);
	if(direction == "N"){
		posTop = posTop - 75;
		console.log(posTop);
		duck.style.top = posTop + "px";
	}
	else if(direction == "S"){
		posTop = posTop + 75;
		duck.style.top = posTop + "px";
	}
	else if(direction == "E"){
		posLeft = posLeft + 75;
		duck.style.left = posLeft + "px";	
	}
	else if(direction == "W"){
		posLeft = posLeft - 75;
		duck.style.left = posLeft + "px";
	}
	else if(direction == "NE"){
		posTop = posTop - 75;
		duck.style.top = posTop + "px";
		posLeft = posLeft + 75;
		duck.style.left = posLeft + "px";
	}
	else if(direction == "SW"){
		posTop = posTop + 75;
		duck.style.posTop = posTop + "px";
		posLeft = posLeft - 75;
		duck.style.left = posLeft + "px";
	}
	else if(direction == "NW"){
		posTop = posTop - 75;
		duck.style.top = posTop + "px";
		posLeft = posLeft - 75;
		duck.style.left = posLeft + "px";
	}
	else if(direction == "SE"){
		posTop = posTop + 75;
		duck.style.top = posTop + "px";
		posLeft = posLeft + 75;
		duck.style.left = posLeft + "px";
	}
		
}

setInterval(function(){
	moveDuck();
}, 1000)

	
	
