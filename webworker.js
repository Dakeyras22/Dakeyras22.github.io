var x=0;
var y=0;
var intervalle=0;

function randomCoordinates(){
    x = Math.floor(Math.random()*601);
    y = Math.floor(Math.random()*601);
    color = "red";
    intervalle = (500 + Math.floor(Math.random()*4500));
    message  = "{\"x\":" + x + ",\"y\":" + y + ",\"color\":"+color+"}";
    postMessage(message);
    console.log("Message Posted to worker : " +message)
    setTimeout(function(){randomCoordinates()}, intervalle);
}

randomCoordinates();