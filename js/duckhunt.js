var directions = ["N", "NE", "E", "ES", "S", "SW", "W", "NW"];
var duck = document.getElementById("duck");

var north = 75;
var northEast = 75;
var east = 75;
var southEast = 75;


function moveDuck(){
	var number = Math.floor(Math.random() * directions.length);
	var direction = directions[number];
	if(direction == "N"){
		north = north - 75;
		duck.style.north + "px";	
	}
	else if(direction == "S"){
		north = north + 75;
		duck.style.north + "px";
	}
	else if(direction == "E"){
		east = east - 75;
		duck.style.east + "px";	
	}
	else if(direction == "W"){
		east = east + 75;
		duck.style.east + "px";
	}
	else if(direction == "NE"){
		northEast = northEast - 75;
		duck.style.northEast + "px";
	}
	else if(direction == "SW"){
		northEast = northEast + 75;
		duck.style.northEast+ "px";
	}
	else if(direction == "NW"){
		southEast = southEast - 75;
		duck.style.southEast + "px";
	}
	else{
		southEast = southEast + 75;
		duck.style.southEast + "px";
	}
		
}



setInterval(function(){
	moveDuck();
}, 1000)

	
	
