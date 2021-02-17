var x=0;
var y=0;
var intervalle=0;

function randomCoordinates(){
    x = Math.floor(Math.random()*600);
    y = Math.floor(Math.random()*600);
    intervalle = (1 + Math.floor(Math.random()*10))*1000;
    message  = "{\"x\":" + 7 + ",\"y\":" + 3 +"}"
    postMessage(message);
    console.log("Message Posted to worker : " +message)
    setTimeout(function(){randomCoordinates()}, intervalle);
}

randomCoordinates();